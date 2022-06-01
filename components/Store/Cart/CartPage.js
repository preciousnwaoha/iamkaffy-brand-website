import React, { useContext } from "react";
import Link from "next/link";
import CartContext from "../../../context/cart-context";
import CartItem from "./CartItem";
import CheckOutBtn from "../PaymentCheckout/CheckOutBtn";
import classes from "./CartPage.module.css";
import PayStackBtn from "../PaymentCheckout/PayStackBtn";

const CartPage = () => {
  const cartCtx = useContext(CartContext);

  const { items, subtotal } = cartCtx;

  return (
    <div className={classes["cart-page"]}>
      <h1 className={classes.title}>Shopping Cart</h1>

      <div className={classes["cart-items-wrapper"]}>
        {items.map((item) => (
          <CartItem
          key={`cart-item${item.id}${Math.random().toFixed(5)}`}
          item={item}
          />
        ))}
      </div>
      <div className={classes["subtotal-section"]}>
        <p className={classes["subtotal-title"]}>SUBTOTAL</p>
        <p className={classes["subtotal"]}>₦{subtotal.toFixed(2)}</p>
      </div>
      <p className={classes["tax-calc-info"]}>
        taxes and shipping calculated at checkout
      </p>

      {items.length > 0 && (
        <div className={classes["actions"]}>
          <CheckOutBtn className={classes["check-out-btn"]} />
          {/* <GooglePayBtn item={cartCtx} fromCart={true} className={classes["g-pay-btn"]} /> */}
          {/* <PayStackBtn item={cartCtx} fromCart={true} /> */}
        </div>
      )}

      {(items.length < 1) ? 
        <Link href={"/store"}>
          <a className={classes["see-collections-link"]}>See Collections</a>
        </Link>
      : <Link href={"/store"}>
      <a className={classes["collections-link"]}>Collections</a>
    </Link>}
    </div>
  );
};

export default CartPage
