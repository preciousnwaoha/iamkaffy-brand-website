import React, { useState } from "react";
import StoreLogo from "../StoreUI/StoreLogo";
import Link from "next/link"
import classes from "./StoreNav.module.css";

const StoreNav = ({ className, onExitNav, collections, padTopOrNot }) => {
  const hideNavHandler = () => {
    onExitNav();
  };

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
            <p className={classes["collection-name"]}>
              <Link href={`/store/collection/${collection.id}`}>
                <a>{collection.name}</a>
              </Link>
            </p>
            {collection.subCollections.length > 0 && (
              <p className={classes["sub-collection-arrow"]}>&gt;</p>
            )}
          </li>
        ))}
      </ul>
      <div className={classes["store-nav-acc"]}>
        <div className={classes["store-nav-acc-head"]}>ACCOUNT</div>
        <div className={classes["store-nav-acc_item"]}>Login</div>
        <div className={classes["store-nav-acc_item"]}>Logout</div>
      </div>
    </div>
  );
};

export default StoreNav;
