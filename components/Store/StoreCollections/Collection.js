import React from "react";
import UITitle from "../../UI/UITitle";
import classes from "./Collection.module.css";
import Product from "../Product/Product";
import Link from "next/link";
import CollectionFilterSort from "./CollectionFilterSort";



const Collection = ({ name, isInStoreHome = false }) => {
  const { statement } = DEFAULT_STORE_DATA.collections.filter(
    (collection) => collection.name === name
  )[0];

  const itemsList = items.filter(
    (item, index) => item.collections.includes(name) && index < 8
  );

  return (
    <div className={classes.collection}>
      <UITitle titleText={name} className={classes["title"]} />
      <h4 className={classes["subtitle"]}>{statement}</h4>

      {!isInStoreHome && (
        <CollectionFilterSort />
      )}

      <div className={classes["collection-items-wrapper"]}>
        {itemsList.map((item) => (
          <Product
            key={`${item.name}in${name}${itemsList.indexOf(item)}`}
            name={item.name}
            images={item.images}
            subCollections={item.subCollections}
            collections={item.collections}
            price={item.price}
            numberLeft={item.numberLeft}
            numSold={item.numSold}
          />
        ))}
      </div>
      <Link href={`/store/collections/${name}`}>
        <a className={classes["view-all-link"]}>view all</a>
      </Link>
    </div>
  );
};

export default Collection;
