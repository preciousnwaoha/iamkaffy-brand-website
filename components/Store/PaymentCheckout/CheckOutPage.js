import React, { useState, useContext } from "react";
import classes from "./CheckOutPage.module.css";
import ExpressCheckout from "./ExpressCheckout";
import ManualCheckout from "./ManualCheckout";
import PayStackBtn from './PayStackBtn'
import Link from "next/link"
import OrderSummary from "./OrderSummary/OrderSummary";
import ContactAndShippingInfoItem from "../ContactInfo/ContactAndShippingInfoItem"
import CartContext from "../../../context/cart-context";
import ContactShippingInfoContext from "../../../context/contact-shipping-info-context";
import OrderComplete from "./OrderComplete";


const CheckOutPage = () => {
  const [orderComplete, setOrderComplete] = useState(false)
  const [showSummary, setShowSummary] = useState(false);
  const cartCtx = useContext(CartContext)
  const contactShippingInfoCtx = useContext(ContactShippingInfoContext);

  const {subtotal} = cartCtx

  const { contactEmail, firstName, lastName, address, phone, city, state, country, zipCode } = contactShippingInfoCtx.contactInfo

  const CSIData = {
    name: `${firstName} ${lastName}`,
    email: contactEmail,
    phone,
    address,
    location: `${zipCode ? "Zip/Postal Code: " + zipCode + ", " : "" }${city ? city + ", ": ""}${state ? state + ", " : ""}${country ? country + "." : ""}`,
  }

  

  const toggleShowSummaryHandler = () => {
      setShowSummary(prevState => !prevState)
  }

  const paymentSuccessHandler = (reference) => {
    setOrderComplete(true)
    console.log(reference)
  }

  if (orderComplete ) {
    return <OrderComplete />
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
      <ContactAndShippingInfoItem />
      <div className={classes["express-checkout"]}>
        {/* <p className={classes["express-checkout-title"]}>Express checkout</p> */}
        {/* <GooglePayButton  /> */}
        <PayStackBtn item={cartCtx} fromCart={true} onPaymentSuccess={paymentSuccessHandler} CSIData={CSIData} />
    </div>
 
      {/* <div className={classes["OR-line"]}><p>OR</p></div> */}
      

<Link href="/store/cart">
            <a className={classes["return-to-cart-link"]}>Return to cart</a>
          </Link>
    </div>
  );
};

export default CheckOutPage;
