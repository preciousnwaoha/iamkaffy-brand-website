import React, {useContext} from 'react'
import GooglePayButton from './GooglePayBtn'
import CartContext from '../../../context/cart-context'
import classes from "./ExpressCheckout.module.css"
import PayStackBtn from './PayStackBtn'

const ExpressCheckout = () => {
const cartCtx = useContext(CartContext)

  return (
    <div className={classes["express-checkout"]}>
        <p className={classes["express-checkout-title"]}>Express checkout</p>
        {/* <GooglePayButton  /> */}
        <PayStackBtn item={cartCtx} fromCart={true} />
    </div>
  )
}

export default ExpressCheckout