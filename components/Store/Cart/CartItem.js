import React from "react";
import Image from "next/image"
import classes from "./CartItem.module.css";

const CartItem = ({name, image, size, price, quantity}) => {
  const removeItemFromCartHandler = () => {
      console.log("Removed Item fron cart")
  };

  const increaseQuantityHandler = () => {
      console.log("Quantity + 1")
  }

  const decreaseQuantityHandler = () => {
    console.log("Quantity - 1")
}



  return (
    <div className={classes["cart-item"]}>
      
        <div className={classes["image-wrapper"]}>
          <div className={classes["image-wrapper-inner"]}>
              <Image src={image} alt={`${name} item in cart`} width={"100%"} height={"100%"} layout="responsive"
              />
          </div>
        </div>
        <div className={classes["remove-item-btn"]}>&times;</div>
      <p className={classes["name-size"]}>
        {`${name} / ${size}`}
      </p>
      <p className={classes.price}>${price.toFixed(2)}</p>
      <div className={classes["quantity-setter"]}>
        <button type="button" className={classes["quantity-btn"]} onClick={decreaseQuantityHandler}>-</button>
        <p className={classes.quantity}>{quantity}</p>
        <button type="button" className={classes["quantity-btn"]} onClick={increaseQuantityHandler}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
