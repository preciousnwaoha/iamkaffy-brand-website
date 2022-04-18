import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from "./Cart.module.css"

const Cart = ( {className}) => {
  return (
    <div className={`${classes.cart} ${className || ""}`}>
        ||
        {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" style={{fontSize: "25px"}} /> */}
    </div>
  )
}

export default Cart