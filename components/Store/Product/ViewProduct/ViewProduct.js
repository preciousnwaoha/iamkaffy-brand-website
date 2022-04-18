import React, { useState } from "react";
import Image from "next/image";
import ViewProductImage from "./ViewProductImage"
import classes from "./ViewProduct.module.css";
import ViewProductInfo from "./ViewProductInfo";

const {
  name,
  images,
  subCollections,
  colors,
  sizes,
  date,
  price,
  numberLeft,
  numSold,
} = {
  name: "bruh",
  images: ["/images/fit-5.jpg", "/images/fit-5.jpg"],
  description:
    "Everyone need a cozy go-to hoodeie to curl up in, so go for one that's soft, smooth, and stylish. It's the perfect choice for cooler evenings!",
  specs: [
    "50% cotton, 50% polyester",
    "Double-lined hood",
    "Double-needle stiching throughout",
  ],
  subCollections: ["Unisex T-Shirts"],
  collections: ["T-Shirts"],
  colors: ["white", "black"],
  sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
  sizeGuide: {
    small: [27, 20],
    medium: [28, 22],
    large: [29, 24],
    xlarge: [30, 26],
  },
  date: "2022-10-11",
  price: 500.453,
  numberLeft: 50,
  numSold: 10,
};

const imagesMaxIndex = images.length - 1;

const ViewProduct = () => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className={classes["view-product"]}>
      <ViewProductImage />
      <ViewProductInfo />
    </div>
  );
};

export default ViewProduct;
