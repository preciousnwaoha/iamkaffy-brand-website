import React from "react";
import Image from "next/image";

import classes from "./Product.module.css"

const Product = ({
  name,
  images,
  subCollections,
  collections,
  price,
  numberLeft,
  numSold,
}) => {
  return (
    <div className={classes["product"]}>
      <div className={classes["image-wrapper"]}>
        <div className={classes["image-wrapper-inner"]}>
          <Image
            src={images[0]}
            alt={`buy ${name}`}
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
      </div>

      <div className={classes["item-info-wrapper"]}>
        <p className={classes["item-name"]}>{name}</p>
        <p className={classes["item-price"]}>From ${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Product;
