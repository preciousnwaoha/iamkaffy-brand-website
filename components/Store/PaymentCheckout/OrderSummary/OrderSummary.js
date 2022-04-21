import React from 'react'
import OrderedItem from './OrderedItem'
import classes from "./OrderSummary.module.css"

const {cartItems, subtotal} = {
  cartItems: [
      {
        name: "bruh",
        image: "/images/fit-5.jpg",
        description:
          "Everyone need a cozy go-to hoodeie to curl up in, so go for one that's soft, smooth, and stylish. It's the perfect choice for cooler evenings!",
        subCollections: ["Unisex T-Shirts"],
        collections: ["T-Shirts"],
        colors: ["white", "black"],
        size: "S",
        date: "2022-10-11",
        price: 500.453,
        quantity: 10,
      },
      {
          name: "bruh",
          image: "/images/fit-5.jpg",
          description:
            "Everyone need a cozy go-to hoodeie to curl up in, so go for one that's soft, smooth, and stylish. It's the perfect choice for cooler evenings!",
          subCollections: ["Unisex T-Shirts"],
          collections: ["T-Shirts"],
          colors: ["white", "black"],
          size: "S",
          date: "2022-10-11",
          price: 500.453,
          quantity: 10,
        },
        {
          name: "bruh",
          image: "/images/fit-5.jpg",
          description:
            "Everyone need a cozy go-to hoodeie to curl up in, so go for one that's soft, smooth, and stylish. It's the perfect choice for cooler evenings!",
          subCollections: ["Unisex T-Shirts"],
          collections: ["T-Shirts"],
          colors: ["white", "black"],
          size: "S",
          date: "2022-10-11",
          price: 500.453,
          quantity: 10,
        },
      
    ],
    subtotal: 1501.353,
    noOfItems: 4,
}

const OrderSummary = () => {
  return (
    <div className={classes["order-summary"]}>
        <ul className={classes["ordered-items"]}>
            {cartItems.map(item => (
                <OrderedItem 
                key={`${item}${cartItems.indexOf(item)}${Math.random().toFixed(6)}`}
                img={item.image}
                itemName={item.name}
                quantity={item.quantity}
                price={item.price}
                className={classes["item"]} />
            ))}
        </ul>

        <div className={classes["total-section"]}>
            <div className={classes["total-title"]}>Total</div>
            <div className={classes["total-value"]}>${subtotal}</div>
        </div>
    </div>
  )
}

export default OrderSummary