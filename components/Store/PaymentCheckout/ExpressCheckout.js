import React from 'react'
import GooglePayButton from './GooglePayButton'
import classes from "./ExpressCheckout.module.css"

const ExpressCheckout = () => {
  return (
    <div className={classes["express-checkout"]}>
        <p className={classes["express-checkout-title"]}>Express checkout</p>
        <GooglePayButton />
    </div>
  )
}

export default ExpressCheckout