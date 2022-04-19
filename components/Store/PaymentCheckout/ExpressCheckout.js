import React from 'react'
import GooglePayButton from './GooglePayButton'
import classes from "./ExpressCheckout.module.css"

const ExpressCheckout = () => {
  return (
    <div className={classes["express-checkout"]}>
        <GooglePayButton />
    </div>
  )
}

export default ExpressCheckout