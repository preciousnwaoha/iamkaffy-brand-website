import React, { useState } from "react";
import Image from "next/image";
import ViewProductImage from "./ViewProductImage"
import classes from "./ViewProduct.module.css";
import ViewProductInfo from "./ViewProductInfo";
import StoreHeader from "../../StoreHeader/StoreHeader";



const ViewProduct = ({data}) => {
  const {product } = data

  return (
    <div className={classes["view-product"]}>
      <ViewProductImage product={product}  />
      <ViewProductInfo product={product}/>
    </div>
  );
};

export default ViewProduct;
