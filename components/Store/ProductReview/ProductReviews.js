import React from "react";
import UIBigTitle from "../../UI/UIBigTitle";
import ReviewStars from "../StoreUI/ReviewStars";
import ProductReview from "./ProductReview";
import classes from "./ProductReviews.module.css";


const ProductReviews = ({ product }) => {

  const {reviews} = product

  const writeReviewHandler = () => {
    console.log("write a review handled");
  };

  const reviewExist = reviews.length > 0;

  const allRating = reviews.map(review => review.rating)

  const calculateAverage = (array) => {
    let total = 0;
    let count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

  const avgRating = calculateAverage(allRating)

  return (
    <div className={classes["product-reviews"]}>
      <UIBigTitle titleText={"Product reviews"} className={classes.title} />
      <div className={classes["avg-rating"]}>
        <ReviewStars starNum={avgRating} />
      </div>
      <button
        type="button"
        className={classes["write-review-btn"]}
        onClick={writeReviewHandler}
      >
        write a review
      </button>
      <div className={classes["product-reviews-content"]}>
        {(reviews && reviewExist) ? (
          reviews.map((review) => (
            <ProductReview
              key={`review${review.reviewerName}${reviews.indexOf(review)}`}
              reviewerName={review.reviewerName}
              rating={review.rating}
              itemName={review.itemName}
              date={review.date}
              itemType={review.itemType}
              reviewMessage={review.message}
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