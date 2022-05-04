import React from "react";
import UITitle from "../../UI/UITitle";
import classes from "./Collection.module.css";
import Product from "../Product/Product";
import Link from "next/link";
import NoProducts from "../Product/NoProducts";
// import CollectionFilterSort from "./CollectionFilterSort";



const Collection = ({ data }) => {
  const { collection, products } = data

  return (
    <div className={classes.collection}>
      <UITitle titleText={collection.name || "This Collection"} className={classes["title"]} />
      <h4 className={classes["subtitle"]}>{collection.statement ? collection.statement : ""}</h4>

      {/* {!isInStoreHome && (
        <CollectionFilterSort />
      )} */}

      { (products.length > 0) ?
        <div className={classes["collection-items-wrapper"]}>
        {products.map((product) => (
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
      : <NoProducts /> } 
      

      
    </div>
  );
};

export default Collection;
