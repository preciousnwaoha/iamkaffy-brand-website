import React from 'react'
import Button from '../UI/Button'
import classes from "./ContactForm.module.css"

const ContactForm = () => {
    const submitHandler = (event) => {
        event.preventDefault()
        console.log("form submited")
    }
  return (
    <form className={classes.form} id="contact-1" onSubmit={submitHandler}>
        <label htmlFor='name'>Name</label>
        <input type="text" id="name" placeholder='Your Name' required />
        <label htmlFor='email'>Email</label>
        <input type="email" id="email" placeholder='Email' required />
        <textarea placeholder='Got a message for Kaffy'> 
        </textarea>
        <Button className={classes["form-submit-btn"]}>
            Send
        </Button>
    </form>
  )
}

export default ContactForm