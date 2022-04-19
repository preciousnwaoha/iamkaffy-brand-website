import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from "./CartIcon.module.css"

const CartIcon = ( {className, onClick}) => {
  return (
    <div className={`${classes.cart} ${className || ""}`} onClick={onClick}>
        ||
        {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" style={{fontSize: "25px"}} /> */}
    </div>
  )
}

export default CartIcon