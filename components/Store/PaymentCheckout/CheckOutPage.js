import React, { useState, useContext } from "react";
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
import Loading from "../StoreUI/Loading";


const ordersCollectionRef = collection(db, "orders");




const CheckOutPage = () => {
  const [orderComplete, setOrderComplete] = useState(false);
  const [loadingOrderComplete, setLoadingOrderComplete] = useState(false);
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
    loadingOrderComplete(true)
    const {status, trxref} = reference
    const order_ref = trxref || (new Date()).getTime()
    const order_id = `${isLoggedIn ? (Math.random() * 10000).toFixed(4).shift + "u" : (Math.random() * 10000).toFixed(4) + "a"}${order_ref}`


    const orderData = {
      order_ref: trxref,
      order_id: order_id,
      user_id: `${isLoggedIn ? userId : email || "Anonymous"}`,
      order_date: new Date(trxref),
      CSIData,
      orders: [
        ...cartCtx.items
      ],
      subtotal: cartCtx.subtotal,
      currency: "NGN ₦",
      paymentStatus: status,
    }

    // Send order to database
    await setDoc(doc(ordersCollectionRef, order_id), orderData)

    // Send emails of order
    const sendOrderEmailResponse = await fetch("/api/orderConfirmEmail", {
      method: "post",
      body: JSON.stringify(orderData),
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    setOrderComplete(true);
    loadingOrderComplete(false)

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
          {validity && (
            <PayStackBtn
              item={cartCtx}
              fromCart={true}
              onPaymentSuccess={paymentSuccessHandler}
              CSIData={CSIData}
            />
          )}
        </div>

        {loadingOrderComplete && <Loading />}

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
