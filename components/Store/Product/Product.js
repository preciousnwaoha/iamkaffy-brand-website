import React, { useContext } from "react";
import Image from "next/image";

import classes from "./Product.module.css"
import Link from "next/link";
import ItemsContext from "../../../context/items-context";

const Product = ({
  id,
  name,
  images,
  subCollections,
  collections,
  price,
  numberLeft,
  numSold,
}) => {
  const itemsCtx = useContext(ItemsContext)

  const addToViewedProductsHandler = () => {
    console.log("addToViewedProductsHandler")
    itemsCtx.addItem({id,
      name,
      images,
      subCollections,
      collections,
      price,
      numberLeft,
      numSold, })
  }


  return (
    <Link href={`/store/view-product/${id}`}>
    <a className={classes["product"]} onClick={addToViewedProductsHandler} >
      <div className={classes["image-wrapper"]}>
        <div className={classes["image-wrapper-inner"]}>
          <Image
            src={images[0]}
            alt={`buy ${name}`}
            priority={true}
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
      </div>

      <div className={classes["item-info-wrapper"]}>
        <p className={classes["item-name"]}>{name}</p>
        <p className={classes["item-price"]}>From ₦{price.toFixed(2)}</p>
      </div>
    </a>
    </Link>
  );
};

export default Product;
