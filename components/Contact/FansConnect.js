import React from 'react'
import Image from 'next/image'
import UIBigTitle from '../UI/UIBigTitle'
import ContactForm from './ContactForm'
import classes from "./FansConnect.module.css"
import Socials from './Socials'

const FansConnect = () => {
  return (
    <div className={classes["fans-connect"]} id="contact-1" >
        <div className={classes["fans-connect-inner"]}>
            <div className={classes["content-side"]}>
                <UIBigTitle titleText={"Fans Connect"} className={classes.title}/>
                <h4 className={classes["sub-title"]}>Wanna Be Associated Kaffy&apos;s Brand, Join Our Fam</h4>
                <ContactForm />
            </div>
            <div className={classes["image-side"]}>
                <div className={classes["image-wrapper"]}>
                    <Image src="/images/kaffy-photo-13.jpg" width={"100%"} alt="Fans Connect with Kaffy" height={"100%"} layout="responsive" />
                    
                </div>
                <Socials className={classes["fans-connect-socials"]}/>
            </div>
        </div>
    </div>
  )
}

export default FansConnect