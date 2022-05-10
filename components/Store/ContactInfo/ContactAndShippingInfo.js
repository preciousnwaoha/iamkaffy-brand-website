import React, { useContext, useState } from "react";
import UIBigTitle from "../../UI/UIBigTitle";
import UITitle from "../../UI/UITitle";
import AuthPopUp from "../../Auth/AuthPopUp";
import classes from "./ContactAndShippingInfo.module.css";

// import { db } from "../../../firebase";
// import { collection, doc, getDoc } from "firebase/firestore";
import AuthContext from "../../../context/auth-context";
import ContactAndShippingInfoItem from "./ContactAndShippingInfoItem";




const ContactAndShippingInfo = () => {
    const [showAuth, setShowAuth] = useState(false)

    const authCtx = useContext(AuthContext)

    const authHandler = () => {
      setShowAuth(prevState => !prevState)
    }


  if (!authCtx.isLoggedIn) {
    return (
        <div className={classes["not-logged-in"]}>
            <UITitle titleText={"To edit your contact and shipping info"}/>
            <button className={classes["auth-btn"]} onClick={authHandler}>Login</button>
            {showAuth && <AuthPopUp onExitAuthPopUp={authHandler} />}
        </div>
    );
  }

  return (
    <div>
      <UIBigTitle
        titleText={"Contact and Shipping Info"}
        className={classes.title}
      />
      <ContactAndShippingInfoItem />
    </div>
  );
};

export default ContactAndShippingInfo;
