import React from 'react'
import Image from "next/image"
import classes from "./OrderedItem.module.css"



const OrderedItem = ({ image, itemName, price, quantity }) => {
  return (
    <li className={classes["ordered-item"]} >
        <div className={classes["item-image-wrapper"]}>
            <div className={classes["item-image-wrapper-inner"]}>
                <div className={classes["item-image-wrapper-inner-inner"]}>
                <Image src={`https://firebasestorage.googleapis.com/v0/b/iamkaffy-brand-site.appspot.com/o/products%2F${image}?alt=media`} alt={`${itemName} in checkout of kaffy store`} width={"100%"} height={"100%"} layout="responsive" />
                </div>
                
            </div>
            <div className={classes["quantity"]}>{quantity}</div>
        </div>

        <p className={classes["item-name"]}>{itemName}</p>
        <p className={classes["price"]}>₦{price.toFixed(2)}</p>
    </li>
  )
}

export default OrderedItem