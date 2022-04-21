import React from "react";
import UIBigTitle from "../../UI/UIBigTitle";
import ReviewStars from "../StoreUI/ReviewStars";
import ProductReview from "./ProductReview";
import classes from "./ProductReviews.module.css";

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
      reviewerName: "Precious Nwaoha",
      date: "2022-05-01",
      itemType: {
        color: "pink",
        size: "L",
      },

      itemName: "bruh",
      reviewMessage: "I like this sweater a lot",
    },
    {
      rating: 3,
      reviewerName: "Precious Nwaoha",
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



const ProductReviews = () => {
  const writeReviewHandler = () => {
    console.log("write a review handled");
  };

  const reviewExist = reviews.length > 0;

  return (
    <div className={classes["product-reviews"]}>
      <UIBigTitle titleText={"Product reviews"} className={classes.title} />
      <div className={classes["avg-rating"]}>
        <ReviewStars starNum={4.55} />
      </div>
      <button
        type="button"
        className={classes["write-review-btn"]}
        onClick={writeReviewHandler}
      >
        write a review
      </button>
      <div className={classes["product-reviews-content"]}>
        {reviewExist ? (
          reviews.map((review) => (
            <ProductReview
              key={`review${review.reviewerName}${reviews.indexOf(review)}`}
              reviewerName={review.reviewerName}
              rating={review.rating}
              itemName={review.itemName}
              date={review.date}
              itemType={review.itemType}
              reviewMessage={review.reviewMessage}
            />
          ))
        ) : (
          <p className={classes["be-first-review"]}>
            Be the first to write a review
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductReviews;
