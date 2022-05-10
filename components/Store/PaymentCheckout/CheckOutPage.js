import React, { useState, useContext } from "react";
import classes from "./CheckOutPage.module.css";
import ExpressCheckout from "./ExpressCheckout";
import ManualCheckout from "./ManualCheckout";
import Link from "next/link"
import OrderSummary from "./OrderSummary/OrderSummary";
import CartContext from "../../../context/cart-context";


const CheckOutPage = () => {
  const cartCtx = useContext(CartContext)

  const {subtotal} = cartCtx

  const [showSummary, setShowSummary] = useState(false);

  const toggleShowSummaryHandler = () => {
      setShowSummary(prevState => !prevState)
  }

  return (
    <div className={classes["checkout-page"]}>
      <h1 className={classes.title}>Kaffy Store</h1>
      <div className={classes["order-summary"]}>
        <div className={classes["short-order-summary"]}>
          <button className={classes["show-full-summary-btn"]} onClick={toggleShowSummaryHandler}>{showSummary ? "Hide" : "Show"} order summary</button>
          <p className={classes["short-order-summary-total-price"]}>₦{subtotal.toFixed(2)}</p>
        </div>
        {showSummary && <OrderSummary />}
      </div>
        
        <ExpressCheckout />
 
      {/* <div className={classes["OR-line"]}><p>OR</p></div> */}
      <ManualCheckout />

<Link href="/store/cart">
            <a className={classes["return-to-cart-link"]}>Return to cart</a>
          </Link>
    </div>
  );
};

export default CheckOutPage;
