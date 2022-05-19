import React, {useState, useRef} from 'react'
import Button from '../UI/Button'
import classes from "./ContactForm.module.css"

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [retry, setRetry] = useState(false)

  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()


    const submitHandler = async (event) => {
        event.preventDefault()
        setSending(true)

        const name = nameRef.current.value
        const email = emailRef.current.value
        const message = messageRef.current.value

        const templateParams = {
          name,
          email,
          message,
        }

    

       const response =  await fetch("/api/mailMessage", {
          method: "post",
          body: JSON.stringify(templateParams),
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        })

        // console.log(response)
        if (response.status === 200) {
          setRetry(false)
          setSending(false)
          setSubmitted(true)
        } else {
          setRetry(true)
           setSending(false)
        }
    }

    

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor='name'>Name</label>
        <input ref={nameRef} type="text" id="name" placeholder='Your Name' required />
        <label htmlFor='email'>Email</label>
        <input ref={emailRef} type="email" id="email" placeholder='Email' required />
        <textarea ref={messageRef} placeholder='Got a message for Kaffy'> 
        </textarea>
        {submitted ? <p>Kaffy&apos;s got your message</p> : <Button className={classes["form-submit-btn"]}>
        {(!sending && !retry ) && "Send Message" }
           {sending && "Sending..." }
           {(retry && !sending) && "Could not Send, Retry?"}
        </Button>}
    </form>
  )
}

export default ContactForm