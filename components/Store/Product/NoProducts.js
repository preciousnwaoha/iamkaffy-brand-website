import React from "react";
import Link from "next/link";
import classes from "./NoProducts.module.css";

const NoProducts = () => {
  return (
    <div className={classes["no-products"]} >
        <h3>Sorry no products here</h3>
        <p>checkout our other collections</p>
        <Link href={"/store"}>
            <a>Collections</a>
        </Link>
    </div>
  )
}

export default NoProducts;
