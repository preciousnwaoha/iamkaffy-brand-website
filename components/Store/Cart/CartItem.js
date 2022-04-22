import React, { useContext } from "react";
import Image from "next/image";
import CartContext from "../../../context/cart-context";
import classes from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const {name, id, images, selectedSizes, price, quantity} = item

  const image = images[0]
  const size = selectedSizes.join("-")

  const cartCtx = useContext(CartContext)


  const removeWholeItemFromCartHandler = () => {
    cartCtx.onRemoveFromCart(id, true);
  };

  const increaseQuantityHandler = () => {
    cartCtx.onAddToCart({...item, selectedSizes: [] })
  };

  const decreaseQuantityHandler = () => {
    cartCtx.onRemoveFromCart(id)
  };

  return (
    <div className={classes["cart-item"]}>
      <div className={classes["image-wrapper"]}>
        <div className={classes["image-wrapper-inner"]}>
          <Image
            src={`https://firebasestorage.googleapis.com/v0/b/iamkaffy-brand-site.appspot.com/o/products%2F${image}?alt=media`}
            alt={`${name} item in cart`}
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
      </div>
      <div
        className={classes["remove-item-btn"]}
        onClick={removeWholeItemFromCartHandler}
      >
        &times;
      </div>
      <p className={classes["name-size"]}>{`${name} / ${size}`}</p>
      <p className={classes.price}>₦{price.toFixed(2)}</p>
      <div className={classes["quantity-setter"]}>
        <button
          type="button"
          className={classes["quantity-btn"]}
          onClick={decreaseQuantityHandler}
        >
          -
        </button>
        <p className={classes.quantity}>{quantity}</p>
        <button
          type="button"
          className={classes["quantity-btn"]}
          onClick={increaseQuantityHandler}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
