import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../UI/Button";
import UIBigTitle from "../UI/UIBigTitle";
import classes from "./Foundation.module.css";

const Foundation = () => {
  return (
    <div className={classes.foundation}>
      <div className={classes["bg-div"]}></div>
      <div className={classes["foundation-content"]}>
        <UIBigTitle
          titleText={"Kaffy Foundation"}
          className={classes["foundation-title"]}
        />
        <h4 className={classes["foundation-text"]}>Kaffy&apos;s Foundation has helped lots of Africans to a much better life than they were living</h4>
        <div className={classes.actions}>
          <Link href="http://kaffyfoundation.org" passHref >
            <a target="_blank" className={classes["learn-more-link"]}>Learn More</a>
          </Link>
          <Link href="/contact/#contact-2">
          <a className={classes["foundation-contact-btn"]}>Contact Us</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Foundation;
