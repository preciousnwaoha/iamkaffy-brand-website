import React, {useState, useRef} from 'react'
import useInput from '../../hooks/use-input';
import Button from '../UI/Button'
import classes from "./ContactForm.module.css"

const emailRegex =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ContactForm = (toEmail=null) => {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [retry, setRetry] = useState(false)

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailResetHandler,
  } = useInput((value) => emailRegex.test(value.trim()));


  const nameRef = useRef()
  const messageRef = useRef()

    const submitHandler = async (event) => {
        event.preventDefault()
        setSending(true)

        if (!emailIsValid || emailHasError) {
          setSending(false);
          return;
        }
    
       
        const name = nameRef.current.value
        const message = messageRef.current.value

        const templateParams = {
          name,
          email: enteredEmail.trim(),
          message,
        }

      if (email) {
        const mailSupportResponse =  await fetch("/api/mail-support", {
          method: "post",
          body: JSON.stringify(templateParams),
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        })

        // console.log(response)
        if (mailSupportResponse.status === 200) {
          setRetry(false)
          setSending(false)
          emailResetHandler();
          setSubmitted(true)
        } else {
          setRetry(true)
           setSending(false)
        }

      } else {
        const mailMessageResponse =  await fetch("/api/mail-message", {
          method: "post",
          body: JSON.stringify(templateParams),
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        })

        if (mailMessageResponse.status === 200) {
          setRetry(false)
          setSending(false)
          emailResetHandler();
          setSubmitted(true)
        } else {
          setRetry(true)
           setSending(false)
        }
      }

       

        
    }

    

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor='name'>Name</label>
        <input ref={nameRef} type="text" id="name" placeholder='Your Name' />
        <label htmlFor='email'>Email</label>
        <input onChange={emailChangeHandler} onBlur={emailBlurHandler} type="email" id="email" placeholder='Email' />
       { emailHasError && <p className={classes.error}>Please enter your valid email address</p>}
        <textarea ref={messageRef} placeholder='Got a message for Kaffy'> 
        </textarea>
        {submitted ? <p>Kaffy&apos;s got your message</p> : <button type="submit" className={classes["form-submit-btn"]}>
        {(!sending && !retry ) && "Send Message" }
           {sending && "Sending..." }
           {(retry && !sending) && "Could not Send, Retry?"}
        </button>}
    </form>
  )
}

export default ContactForm