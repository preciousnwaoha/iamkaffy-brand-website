import React, { useContext } from 'react'
import OrderedItem from './OrderedItem'
import CartContext from '../../../../context/cart-context'
import classes from "./OrderSummary.module.css"




const OrderSummary = () => {
  const cartCtx = useContext(CartContext)

  const {items, subtotal} = cartCtx

  return (
    <div className={classes["order-summary"]}>
        <ul className={classes["ordered-items"]}>
            {items.map(item => (
                <OrderedItem 
                key={`cart-item${item.id}${Math.random().toFixed(6)}`}
                image={item.images[0]}
                itemName={item.name}
                quantity={item.quantity}
                price={item.price}
                className={classes["item"]} />
            ))}
        </ul>

        <div className={classes["total-section"]}>
            <div className={classes["total-title"]}>Total</div>
            <div className={classes["total-value"]}>₦{subtotal.toFixed(2)}</div>
        </div>
    </div>
  )
}

export default OrderSummary