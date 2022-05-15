import React, {useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import Button from '../UI/Button'
import classes from "./ContactForm.module.css"
// import { db } from '../../firebase'
// import { collection, addDoc } from 'firebase/firestore'


const ContactForm = () => {
  // const usersCollectionRef = collection(db, "contactMessages");
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

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

        emailjs.send('service_lg6hz83', 'template_6x7qmjt', templateParams, "4XWVk6nlrikOaocCl")
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
        
        // const res = await addDoc(usersCollectionRef, {name: name, email: email, message: message})
        setSending(false)
        setSubmitted(true)
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
           { !sending ? "Send Message" : "Sending..."}
        </Button>}
    </form>
  )
}

export default ContactForm