import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import classes from "./CartIcon.module.css"

const CartIcon = ( {className, onClick}) => {
  return (
    <div className={`${classes.cart} ${className || ""}`} onClick={onClick}>
        <FontAwesomeIcon icon={faCartShopping} style={{fontSize: "25px"}} />
    </div>
  )
}

export default CartIcon