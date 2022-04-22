import React, { useState, useEffect, useContext } from "react";
import CartContext from "../../../../context/cart-context";
import classes from "./AddedProductToCartPopUp.module.css";

const AddedProductToCartPopUp = () => {
  const [popup, setPopup] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const popupClasses = `${classes["added-to-cart"]} ${
    popup ? classes.popup : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setPopup(true);

    const timer = setTimeout(() => {
      setPopup(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return <div className={popupClasses}>added to cart</div>;
};

export default AddedProductToCartPopUp;
