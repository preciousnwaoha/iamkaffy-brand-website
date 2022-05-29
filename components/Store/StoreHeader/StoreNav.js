import React, { useState, useContext } from "react";
import StoreLogo from "../StoreUI/StoreLogo";
import Link from "next/link"
import classes from "./StoreNav.module.css";
import AuthContext from "../../../context/auth-context";

const StoreNav = ({ className, onExitNav, collections, padTopOrNot }) => {
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn

  const hideNavHandler = () => {
    onExitNav();
  };

  const logoutHandler = () => {
    console.log("logged out")
    authCtx.logout()
  }

  const storeNavClasses = `${classes["store-nav"]} ${classes[className]} ${classes[padTopOrNot]}`;

  return (
    <div className={storeNavClasses}>
      <StoreLogo className={classes["store-nav-logo"]} />
      <div className={classes["store-exit-icon"]} onClick={hideNavHandler}>
        &times;
      </div>
      <ul className={classes["store-nav-collection-list"]}>
        {collections.map((collection) => (
          <li
            key={`${collection.id}`}
            className={classes["store-nav-collection-item"]}
          >
            <Link href={`/store/collection/${collection.id}`}>
            <a className={classes["collection-name"]}>
                {collection.name}
            </a>
            </Link>
            {collection.subCollections.length > 0 && (
              <p className={classes["sub-collection-arrow"]}>&gt;</p>
            )}
          </li>
        ))}
      </ul>
      <div className={classes["store-nav-acc"]}>
        
        <div className={classes["store-nav-acc-head"]}>ACCOUNT</div>

       { !isLoggedIn && (
         <>
          <Link href={"/store/login"} >
          <a className={classes["store-nav-acc_item"]}>Login</a>
          </Link>
          <Link href={"/store/createaccount"} >
          <a  className={classes["store-nav-acc_item"]}>Create Account</a>
          </Link>
         </>
        
        )
        }
        {isLoggedIn && <Link href={"/store/contact-and-shipping-info"} >
          <a  className={classes["store-nav-acc_item"]}>Contact and Shipping Details</a>
          </Link>}
         {isLoggedIn && <button onClick={logoutHandler} className={classes["logout"]}>Logout</button>}

      </div>
    </div>
  );
};

export default StoreNav;

