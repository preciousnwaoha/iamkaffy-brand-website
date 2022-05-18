import React, { useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import classes from "./CheckOutPage.module.css";
import AuthPopUp from "../../Auth/AuthPopUp";
import PayStackBtn from "./PayStackBtn";
import Link from "next/link";
import OrderSummary from "./OrderSummary/OrderSummary";
import ContactAndShippingInfoItem from "../ContactInfo/ContactAndShippingInfoItem";
import CartContext from "../../../context/cart-context";
import ContactShippingInfoContext from "../../../context/contact-shipping-info-context";
import AuthContext from "../../../context/auth-context";
import OrderComplete from "./OrderComplete";

import { db } from "../../../firebase";
import { collection, setDoc, doc } from "firebase/firestore";


const ordersCollectionRef = collection(db, "orders");




const CheckOutPage = () => {
  const [orderComplete, setOrderComplete] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showAuthPopUp, setShowAuthPopUp] = useState(false);
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const contactShippingInfoCtx = useContext(ContactShippingInfoContext);

  const { userId, isLoggedIn } = authCtx;
  const { subtotal } = cartCtx;

  const {
    contactEmail,
    firstName,
    lastName,
    address,
    phone,
    city,
    state,
    country,
    zipCode,
    validity,
  } = contactShippingInfoCtx.contactInfo;

  const CSIData = {
    name: `${firstName} ${lastName}`,
    email: contactEmail,
    phone,
    address,
    location: `${zipCode ? "Zip/Postal Code: " + zipCode + ", " : ""}${
      city ? city + ", " : ""
    }${state ? state + ", " : ""}${country ? country + "." : ""}`,
  };

  const toggleShowSummaryHandler = () => {
    setShowSummary((prevState) => !prevState);
  };

  const toggleShowAuthPopUpHandler = () => {
    setShowAuthPopUp((prevState) => !prevState);
  };

  const paymentSuccessHandler = async (reference) => {

    const {status, trxref} = reference
    // fetch("/api/mailjet", {
    //   method: "post",
    //   body: JSON.stringify(CSIData),
    // });

    const orderId = `${trxref}userId${isLoggedIn ? userId : "Anonymous"}`

    const orderData = {
      trxref,
      user: `${isLoggedIn ? userId : "Anonymous"}`,
      CSIData,
      purchasedItems: [
        ...cartCtx.items
      ],
      paid: cartCtx.subtotal,
      currency: "Naira"
    }

    // await setDoc(doc(ordersCollectionRef, orderId), orderData)

    const data = fetch("/api/sendinblue", {
      method: "post",
      body: JSON.stringify(CSIData),
    });

    // console.log(JSON.parse(data))
    // setOrderComplete(true);
    // console.log(reference);
  };

  if (orderComplete) {
    return <OrderComplete />;
  }

  return (
    <>
      <div className={classes["checkout-page"]}>
        <h1 className={classes.title}>Kaffy Store</h1>

        <div className={classes["order-summary"]}>
          <div className={classes["short-order-summary"]}>
            <button
              className={classes["show-full-summary-btn"]}
              onClick={toggleShowSummaryHandler}
            >
              {showSummary ? "Hide" : "Show"} order summary
            </button>
            <p className={classes["short-order-summary-total-price"]}>
              ₦{subtotal.toFixed(2)}
            </p>
          </div>
          {showSummary && <OrderSummary />}
        </div>
        <ContactAndShippingInfoItem />

        {isLoggedIn && (
          <div className={classes.login}>
            <button
              className={classes["login-btn"]}
              onClick={toggleShowAuthPopUpHandler}
            >
              Login to your account
            </button>
          </div>
        )}

        <div className={classes["express-checkout"]}>
          {/* <p className={classes["express-checkout-title"]}>Express checkout</p> */}
          {/* <GooglePayButton  /> */}
          {validity && (
            <PayStackBtn
              item={cartCtx}
              fromCart={true}
              onPaymentSuccess={paymentSuccessHandler}
              CSIData={CSIData}
            />
          )}
        </div>

        

<div className={classes.login}>
            <button
              className={classes["login-btn"]}
              onClick={paymentSuccessHandler}
            >
              Send Email
            </button>
          </div>

        {(showAuthPopUp && !isLoggedIn) && (
          <AuthPopUp onExitAuthPopUp={toggleShowAuthPopUpHandler} />
        )}

        {/* <div className={classes["OR-line"]}><p>OR</p></div> */}

        <Link href="/store/cart">
          <a className={classes["return-to-cart-link"]}>Return to cart</a>
        </Link>
      </div>
    </>
  );
};

export default CheckOutPage;
