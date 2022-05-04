import React from "react";
import UITitle from "../../UI/UITitle";
import classes from "./CollectionInHome.module.css";
import Product from "../Product/Product";
import Link from "next/link";
import CollectionFilterSort from "./CollectionFilterSort";



const CollectionInHome = ({ data }) => {
  const { collection, products } = data

  const filteredProducts = products.filter((product, index) => {
      return ((product.collections.includes(collection.name)) && (index < 8) )
  } )

  return (
    <div className={classes.collection}>
      <UITitle titleText={collection.name || "Collection" } className={classes["title"]} />
      <h4 className={classes["subtitle"]}>{collection.statement ? collection.statement : ""}</h4>

      {/* {!isInStoreHome && (
        <CollectionFilterSort />
      )} */}

      <div className={classes["collection-items-wrapper"]}>
        {filteredProducts.map((product) => (
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
      <Link href={`/store/collection/${collection.id}`}>
        <a className={classes["view-all-link"]}>view all</a>
      </Link>
    </div>
  );
};

export default CollectionInHome;
