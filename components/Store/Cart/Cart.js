import React from "react";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CheckOutBtn from "../PaymentCheckout/CheckOutBtn";
import GooglePayButton from "../PaymentCheckout/GooglePayButton";

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
 

const Cart = ({ className, onHideCart }) => {

    const hideCartHandler = () => {
        onHideCart()
    }
    console.log(className)

    const cartClasses = `${classes["cart"]} ${classes[className]}`

  return (
    <div className={cartClasses}>
         <div className={classes["exit-btn"]} onClick={hideCartHandler}>&times;</div>
      <h2 className={classes.title}>Shopping Cart</h2>
     
      <div className={classes["cart-items-wrapper"]}>
        {cartItems.map((item) => (
          <CartItem
            key={`item.name${cartItems.indexOf(item)}`}
            name={item.name}
            image={item.image}
            size={item.size}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className={classes["subtotal-section"]}>
          <p className={classes["subtotal-title"]}>SUBTOTAL</p>
          <p className={classes["subtotal"]}>${subtotal}</p>
      </div>
      <p className={classes["tax-calc-info"]}>taxes and shipping calculated at checkout</p>
      <div className={classes["actions"]}>
            <CheckOutBtn className={classes["check-out-btn"]} />
            <GooglePayButton className={classes["g-pay-btn"]} />
      </div>
    </div>
  );
};

export default Cart;
