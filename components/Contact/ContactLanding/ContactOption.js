import React from 'react'
import { scroller } from "react-scroll"
import Link from "next/link"
import classes from "./ContactOption.module.css"


const ScrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)


const ContactOption = ({className, optionText, optionId,}) => {

  const scrollToSection = () => {
    scroller.scrollTo(`${optionId}`, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }


  return (
    <div className={`${classes["contact-option"]} ${className || ""}`}>
          <div className={classes["contact-option-colored-side"]}></div>
            <p className={classes["contact-option-text"]}>{optionText}</p>

            <div  className={classes["contact-option-link"]} onClick={scrollToSection} >{"Connect"}</div>

            {/* <Link href={`${linkURL}`}>
              <a className={classes["contact-option-link"]}>{"Connect"}</a>
            </Link> */}
        </div>
  )
}

export default ContactOption