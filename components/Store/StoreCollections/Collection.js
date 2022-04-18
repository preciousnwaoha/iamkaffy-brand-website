import React from "react";
import UITitle from "../../UI/UITitle";
import classes from "./Collection.module.css";
import Product from "../Product/Product";
import Link from "next/link";
import CollectionFilterSort from "./CollectionFilterSort";

const DEFAULT_STORE_DATA = {
  collections: [
    {
      name: "T-Shirts",
      statement: "Here's your T-shirts from kaffy",
      subCollections: ["Unisex T-Shirts", "Native"],
      collectionImage: "/images/kaffy-photo-5.jpg",
    },
    {
      name: "T-Shirts",
      statement: "Here's your T-shirts from kaffy",
      subCollections: ["Unisex T-Shirts", "Native"],
      collectionImage: "/images/kaffy-photo-5.jpg",
    },
    {
      name: "T-Shirts",
      statement: "Here's your T-shirts from kaffy",
      subCollections: [],
      collectionImage: "/images/kaffy-photo-5.jpg",
    },
    {
      name: "For Dancers",
      statement: "Dance T-shirts from kaffy",
      subCollections: ["Unisex T-Shirts"],
      collectionImage: "/images/kaffy-photo-6.jpg",
    },
    {
      name: "T-Shirts",
      statement: "Here's your T-shirts from kaffy",
      subCollections: ["Unisex T-Shirts", "Native"],
      collectionImage: "/images/kaffy-photo-5.jpg",
    },
  ],
  items: [
    {
      name: "bruh",
      images: ["/images/fit-5.jpg", "/images/fit-3.jpg"],
      subCollections: ["Unisex T-Shirts"],
      collections: ["T-Shirts"],
      colors: ["white", "black"],
      sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
      date: "2022-10-11",
      price: 500.453,
      numberLeft: 50,
      numSold: 10,
      
    },
    {
      name: "bruh",
      images: ["/images/fit-5.jpg", "/images/fit-4.jpg"],
      subCollections: ["Unisex T-Shirts"],
      collections: ["T-Shirts"],
      colors: ["white", "black"],
      sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
      date: "2022-10-11",
      price: 500.453,
      numberLeft: 50,
      numSold: 10,
    },
    {
      name: "bruh",
      images: ["/images/fit-5.jpg", "/images/fit-5.jpg"],
      subCollections: ["Unisex T-Shirts"],
      collections: ["T-Shirts"],
      colors: ["white", "black"],
      sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
      date: "2022-10-11",
      price: 500.453,
      numberLeft: 50,
      numSold: 10,
    },
    {
      name: "bruh",
      images: ["/images/fit-5.jpg", "/images/fit-5.jpg"],
      subCollections: ["Unisex T-Shirts"],
      collections: ["T-Shirts"],
      colors: ["white", "black"],
      sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
      date: "2022-10-11",
      price: 500.453,
      numberLeft: 50,
      numSold: 10,
    },
    {
      name: "goat",
      images: ["/images/fit-5.jpg", "/images/fit-5.jpg"],
      subCollections: ["Unisex T-Shirts"],
      collections: ["For Dancers"],
      colors: ["white", "black"],
      sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
      date: "2022-10-11",
      price: 500.453,
      numberLeft: 50,
      numSold: 10,
    },
  ],

  viewedItems: [
    {
      name: "bruh",
      images: ["/images/fit-5.jpg", "/images/fit-5.jpg"],
      subCollections: ["Unisex T-Shirts"],
      collections: ["T-Shirts"],
      colors: ["white", "black"],
      sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
      date: "2022-10-11",
      price: 500.453,
      numberLeft: 50,
      numSold: 10,
    },
  ],
};

const { items } = DEFAULT_STORE_DATA;

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
