import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-regular-svg-icons";
import classes from "./NoProducts.module.css";

const NoProducts = ({ inViewed = false, inStoreHome = false }) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smooth scrolling
    })
  }

  return (
    <div className={classes["no-products"]}>
      <h3>
        {`${!inViewed ? "Sorry no products here" : "You have viewed nothing"}`}
        <FontAwesomeIcon icon={faFaceFrown} className={classes.frown} />
      </h3>
      {!inViewed && <p>checkout our other collections</p>}
      {inStoreHome ? (
        <button type="button" onClick={scrollToTop}>{`${
          !inViewed ? "Collections" : "See Collection"
        }`}</button>
      ) : (
        <Link href={"/store"}>
          <a>{`${!inViewed ? "Collections" : "See Collection"}`}</a>
        </Link>
      )}
    </div>
  );
};

export default NoProducts;
