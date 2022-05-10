import React, {useState, useContext } from 'react'
import ContactInfoSummary from './ContactInfoSummary'
import SetContactAndShippingInfo from './SetContactAndShippingInfo'
import ContactShippingInfoContext from "../../../context/contact-shipping-info-context";
import classes from "./ContactAndShippingInfoItem.module.css"

const ContactAndShippingInfoItem = () => {
  const [showUpdateCSI, setShowUpdateCSI] = useState(false)
  const contactShippingInfoCtx = useContext(ContactShippingInfoContext)

  const { contactInfo } = contactShippingInfoCtx

  const toggleEditHandler = () => {
    setShowUpdateCSI((prevState) => !prevState)
  }


  return (
    <div className={classes.CSII}>
        {!showUpdateCSI && <ContactInfoSummary contactInfo={contactInfo} onToggleEdit={toggleEditHandler} />}
      {(!showUpdateCSI && contactInfo.validity) && <button onClick={toggleEditHandler} className={classes.edit} >Edit</button>}
      {showUpdateCSI && <SetContactAndShippingInfo onToggleEdit={toggleEditHandler} />}
    </div>
  )
}

export default ContactAndShippingInfoItem