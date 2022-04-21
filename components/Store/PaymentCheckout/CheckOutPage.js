import React, { useState } from "react";
import classes from "./CheckOutPage.module.css";
import ExpressCheckout from "./ExpressCheckout";
import ManualCheckout from "./ManualCheckout";
import OrderSummary from "./OrderSummary/OrderSummary";

const price = 1501.343;

const items = [];

const CheckOutPage = () => {
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
          <p className={classes["short-order-summary-total-price"]}>${price}</p>
        </div>
        {showSummary && <OrderSummary />}
      </div>
        
        <ExpressCheckout />
 
      <div className={classes["OR-line"]}><p>OR</p></div>
      <ManualCheckout />
    </div>
  );
};

export default CheckOutPage;
