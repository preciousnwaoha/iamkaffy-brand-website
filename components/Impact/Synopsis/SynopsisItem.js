import React from "react";
import Image from "next/image";
import classes from "./SynopsisItem.module.css";

const SynopsisItem = ({ title, alt, img, description }) => {
  return (
    <div className={classes["synopsis-item"]}>
      <div className={classes["image-wrapper"]}>
        <div className={classes["image-wrapper-inner"]}>
          <Image
            src={img}
            alt={alt}
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
      </div>
      <div className={classes["text-wrapper"]}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SynopsisItem;
