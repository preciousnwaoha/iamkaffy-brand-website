import React, { useContext } from 'react'
import CartContext from '../../../context/cart-context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import classes from "./CartIcon.module.css"

const CartIcon = ( {className, onClick}) => {
  const cartCtx = useContext(CartContext)

  const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity
  }, 0)


  return (
    <div className={`${classes.cart} ${className || ""}`} onClick={onClick}>
        <FontAwesomeIcon icon={faCartShopping} style={{fontSize: "25px"}} />
        <div className={classes["no-of-items"]}>{numberOfItems}</div>
    </div>
  )
}

export default CartIcon