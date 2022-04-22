import React from "react";
import ReviewStars from "../StoreUI/ReviewStars";
import classes from "./ProductReview.module.css";

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
      <h4 className={classes["reviewer-name"]}>
        {reviewerName ? reviewerName : "Anonymous"}
      </h4>
      <p className={classes.date}>{date ? date : ""}</p>
      <ReviewStars starNum={rating} className={classes["rating"]} />
      <p className={classes["review-message"]}>
        {reviewMessage ? reviewMessage : "No Message"}
      </p>

      {itemType && (
        <p className={classes["item-type"]}>
          Item type:{" "}
          {`${itemType.color ? itemType.color : ""}/${
            itemType.size ? itemType.size : ""
          }`}
        </p>
      )}
      
    </div>
  );
};

export default ProductReview;
