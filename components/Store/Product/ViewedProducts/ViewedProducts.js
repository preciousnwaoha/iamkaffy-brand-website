import React, { useContext, useEffect } from "react";
import UITitle from "../../../UI/UITitle";

import Product from "../Product";
import NoProducts from "../NoProducts";
import ItemsContext from "../../../../context/items-context";
import classes from "./ViewedProducts.module.css";

const ViewedProducts = ({ inStoreHome = false, newProduct = null }) => {
  const itemsCtx = useContext(ItemsContext);

  const { viewedItems } = itemsCtx;

  useEffect(() => {
    if (newProduct) {
      itemsCtx.addItem(newProduct);
    }
  
  })
  
  return (
    <div className={classes.viewed}>
      <UITitle titleText={"Viewed Products"} className={classes["title"]} />

      {viewedItems.length > 0 ? (
        <div className={classes["viewed-items-wrapper"]}>
          {viewedItems.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              images={product.images}
              subCollections={product.subCollections}
              collections={product.collections}
              price={product.price}
              numberLeft={product.numberLeft}
              numSold={product.numSold}
            />
          ))}
        </div>
      ) : (
        <NoProducts inViewed={true} inStoreHome={inStoreHome} />
      )}
    </div>
  );
};

export default ViewedProducts;
