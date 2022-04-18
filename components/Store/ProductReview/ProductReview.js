import React from "react";
import ReviewStars from "../StoreUI/ReviewStars";
import classes from "./ProductReview.module.css";

const {
  name,
  images,
  subCollections,
  description,
  specs,
  colors,
  sizes,
  reviews,
  sizeGuide,
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
  colors: ["white", "black", "pink"],
  sizes: [
    {
      size: "S",
      numLeft: 4,
    },
    {
      size: "M",
      numLeft: 4,
    },
    {
      size: "L",
      numLeft: 4,
    },
    {
      size: "XL",
      numLeft: 4,
    },
    {
      size: "2XL",
      numLeft: 4,
    },
  ],
  reviews: [
    {
      rating: 3,
      name: "Precious Nwaoha",
      date: "2022-05-01",
      itemType: {
        color: "pink",
        size: "L",
      },

      itemName: "bruh",
      reviewMessage: "I like this sweater a lot",
    },
  ],
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

const ProductReview = ({
  reviewerName,
  date,
  rating,
  reviewMessage,
  itemType,
  itemName,
}) => {
  return (
    <div className={classes["product-review"]}>
      <h4 className={classes["reviewer-name"]}>{reviewerName}</h4>
      <p className={classes.date}>{date}</p>
      <ReviewStars starNum={rating} className={classes["rating"]} />
      <p className={classes["review-message"]}>{reviewMessage}</p>
      <p className={classes["item-type"]}>
        Item type: {`${itemType.color}/${itemType.size}`}
      </p>
    </div>
  );
};

export default ProductReview;
