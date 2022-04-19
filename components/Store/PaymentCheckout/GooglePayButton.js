import React from 'react'
import classes from "./GooglePayButton.module.css"

const GooglePayButton = ({className}) => {
  return (
    <div className={`${classes["google-pay-btn"]} ${className || ""}`}>
        G Pay
    </div>
  )
}

export default GooglePayButton