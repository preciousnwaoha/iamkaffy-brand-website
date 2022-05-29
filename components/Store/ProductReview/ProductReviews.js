import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../../context/auth-context";
import UIBigTitle from "../../UI/UIBigTitle";
import ReviewStars from "../StoreUI/ReviewStars";
import ProductReview from "./ProductReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import classes from "./ProductReviews.module.css";
import WriteReview from "./WriteReview";


const ProductReviews = ({ product, reviews }) => {
  const authCtx = useContext(AuthContext)
  const [showWriteReview, setShowWriteReview] = useState(false)
  const [reviewsToMap, setReviewsToMap] = useState(reviews)

  let userReview = null;
  if (authCtx.isLoggedIn) {
    const curUserReview = reviewsToMap.filter(review => review.reviewerId === authCtx.userId)

    console.log("review", curUserReview)
    if (curUserReview.length === 1) {
      userReview = {...curUserReview[0]}
    }
  }


  const showWriteReviewHandler = () => {
      // show write a review form
      setShowWriteReview(true)
  };
  const postedNewReviewHandler = (newReviews) => {
    // reload reviews
    setReviewsToMap(newReviews)
    // hide write a review form
    setShowWriteReview(false)
};


  const reviewExist = reviewsToMap.length > 0;

  const allRating = reviewsToMap.map(review => review.rating)

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
        {reviewExist && <ReviewStars starNum={avgRating} />}
        {!reviewExist && <p>No review yet</p>}
      </div>
      {!showWriteReview && <button
        type="button"
        className={classes["write-review-btn"]}
        onClick={showWriteReviewHandler}
      >
        {`${userReview ? "edit your" : "write a"}`} review <FontAwesomeIcon icon={faPen} className={classes["wrb-icon"]} />
      </button>}

     { showWriteReview && <WriteReview product={product} reviews={reviews} onPostedNewReview={postedNewReviewHandler} />}
      <div className={classes["product-reviews-content"]}>
        {(reviewsToMap && reviewExist) ? (
          reviewsToMap.map((review) => (
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
