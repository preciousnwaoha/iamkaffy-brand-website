import React, { useContext, useState, useRef, useEffect } from "react";
import Link from "next/link";
import AuthContext from "../../../context/auth-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classes from "./WriteReview.module.css";
import RateItem from "./RateItem";

import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import AuthPopUp from "../../Auth/AuthPopUp";

const WriteReview = ({ product, reviews, onPostedNewReview }) => {
  const authCtx = useContext(AuthContext);
  const [isShowingAuthPopUp, setIsShowingAuthPopUp] = useState(false);
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(true);
  const [ratingIsValid, setRatingIsValid] = useState(true);
  const [messageIsValid, setMessageIsValid] = useState(true);
  const [justPosted, setJustPosted] = useState(false)


  let userReview = null;
  if (authCtx.isLoggedIn) {
    const curUserReview = reviews.filter(
      (review) => review.reviewerId === authCtx.userId
    );

    if (curUserReview.length === 1) {
      userReview = {...curUserReview[0]};
    }
  }

  useEffect(() => {
    setIsShowingAuthPopUp(false);
    
  }, []);

  const nameRef = useRef();
  const messageRef = useRef();
  const colorRef = useRef();
  const sizeRef = useRef();

  const justPostedHandler = (newReviews) => {
      console.log("just posted")
      setJustPosted(true)

    setTimeout(() => {
        setJustPosted(false)
        onPostedNewReview(newReviews)
    }, 5000);

    
  }

  const showAuthPopUpHandler = () => {
    setIsShowingAuthPopUp((prevState) => {
      return !prevState;
    });
  };

  const getRatingHandler = (rating) => {
    setRating(rating);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const name = nameRef.current.value;
    const message = messageRef.current.value;
    const color = colorRef.current.value || "";
    const size = sizeRef.current.value || "";

    if (name === "" || name.length <= 1) {
      setNameIsValid(false);
      setIsLoading(false);
      return;
    }

    if (message === "" || message.length <= 1) {
      setMessageIsValid(false);
      setIsLoading(false);
      return;
    }

    if (rating < 1 || rating > 5) {
      setRatingIsValid(false);
      setIsLoading(false);
      return;
    }

    setMessageIsValid(true);
    setNameIsValid(true);
    setRatingIsValid(true);
    

    const productReviewData = {
      itemType: {
        color: `${color || ""}`,
        size: `${size || ""}`,
      },
      rating: rating,
      reviewerName: name,
      message: message,
      reviewerId: authCtx.userId,
      productId: product.id,
      id: `${userReview ? userReview.id : ""}`,
      isEdit: `${userReview ? true : false}`,
    };

    const responseData = await fetch("/api/postreview", {
        method: "POST",
        body: JSON.stringify(productReviewData)
    })

    setIsLoading(false);


    if (responseData.status === 200) {
        const reviewRef = collection(db, "products", product.id, "reviews");
        const newReviewsSetData = await getDocs(reviewRef)
        const newReviews = newReviewsSetData.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
        })
        justPostedHandler(newReviews)
    } else {
        console.log("Posting review failed, check connection")
    }

  };

 

  return (
    <div className={classes["write-review"]}>
      <h2>{`${userReview ? "Edit your" : "Write a"}`} review</h2>

      <div className={classes["content"]}>
        {!authCtx.isLoggedIn && (
          <div>
            <p
              className={classes["sorry-login"]}
              onClick={showAuthPopUpHandler}
            >
              You&apos;ll have to login to post a valid review{" "}
              <span>(LOGIN)</span>
            </p>
          </div>
        )}

        {justPosted && <p className={classes.posted}>{`${userReview ? "Updated" : "Posted "}`} review</p>}

        {!justPosted && <form onSubmit={submitHandler}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Your Name" ref={nameRef} defaultValue={`${userReview ? userReview.reviewerName : ""}`} />
          {!nameIsValid && (
            <p className={classes.error}>please enter your name!</p>
          )}
          <RateItem onGetRating={getRatingHandler} userReview={userReview} />
          {!ratingIsValid && (
            <p className={classes.error}>tap star to add your rating</p>
          )}

          <div className={classes["color-size-wrapper"]}>
            <label htmlFor="color">Color</label>
            <input
              type="text"
              id="color"
              placeholder="Color (optional)"
              ref={colorRef}
              defaultValue={`${userReview ? userReview.itemType.color : ""}`}
            />
            <label htmlFor="size">Size</label>
            <input
              type="text"
              id="size"
              placeholder="Size (optional)"
              ref={sizeRef}
              defaultValue={`${userReview ? userReview.itemType.size : ""}`}
            />
          </div>

          <textarea ref={messageRef} defaultValue={`${userReview ? userReview.message : ""}`} placeholder="Review Message..."></textarea>
          {!messageIsValid && (
            <p className={classes.error}>help others by adding a message</p>
          )}
          <div className={classes["verified-post-btn-wrapper"]}>
            {authCtx.isLoggedIn && (
              <p className={classes.verified}>
                verified user{" "}
                <FontAwesomeIcon
                  className={classes["verified-mark"]}
                  icon={faCheckCircle}
                  style={{ fontSize: "1.5rem" }}
                />{" "}
              </p>
            )}
            {!authCtx.isLoggedIn && (
              <p
                className={classes["login-first"]}
                onClick={showAuthPopUpHandler}
              >
                <span>(LOGIN)</span> first!
              </p>
            )}
            {!userReview && (
              <button
                type="submit"
                disabled={!authCtx.isLoggedIn}
                className={classes["post-btn"]}
              >
                {isLoading ? "In a sec..." : "POST REVIEW"}
              </button>
            )}
            {userReview && (
              <button
                type="submit"
                disabled={!authCtx.isLoggedIn}
                className={classes["post-btn"]}
              >
                {isLoading ? "In a sec..." : "UPDATE REVIEW"}
              </button>
            )}
          </div>
        </form>}
      </div>
      {!authCtx.isLoggedIn && isShowingAuthPopUp && (
        <AuthPopUp onExitAuthPopUp={showAuthPopUpHandler} />
      )}
    </div>
  );
};

export default WriteReview;
