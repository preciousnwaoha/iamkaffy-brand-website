import React, { useState } from "react";
import Image from "next/image";
import Button from "../../../UI/Button";
import classes from "./ViewProductImage.module.css";

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
  images: ["/images/fit-5.jpg", "/images/fit-3.jpg"],
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

const ViewProductImage = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const forwardsHandler = () => {
    if (imageIndex === imagesMaxIndex) {
      setImageIndex(0);
      return;
    } else {
      setImageIndex((prevIndex) => {
        return prevIndex + 1;
      });
    }
  };

  const backwardsHandler = () => {
    if (imageIndex === 0) {
      setImageIndex(imagesMaxIndex);
      return;
    } else {
      setImageIndex((prevIndex) => {
        return prevIndex - 1;
      });
    }
  };

  return (
    <div className={classes["view-product-image"]}>
      <div className={classes["product-image-wrapper"]}>
        <div className={classes["product-image-wrapper-inner"]}>
          <Image
            src={images[imageIndex]}
            alt={`${name} in kaffy store`}
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
      </div>
      <div className={classes["actions"]}>
        <Button className={classes["next-btn"]} clickAction={forwardsHandler}>
          &lt;
        </Button>
        <Button className={classes["prev-btn"]} clickAction={backwardsHandler}>
          &gt;
        </Button>
      </div>
    </div>
  );
};

export default ViewProductImage;
