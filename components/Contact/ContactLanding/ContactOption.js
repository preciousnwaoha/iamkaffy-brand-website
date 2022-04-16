import React from 'react'
import Link from "next/link"
import classes from "./ContactOption.module.css"

const ContactOption = ({className, optionText, linkText}) => {
  return (
    <div className={`${classes["contact-option"]} ${className || ""}`}>
          <div className={classes["contact-option-colored-side"]}></div>
            <p className={classes["contact-option-text"]}>optionText</p>
            <Link href='/#contact-1'>
              <a className={classes["contact-option-link"]}>{linkText}</a>
            </Link>
        </div>
  )
}

export default ContactOption