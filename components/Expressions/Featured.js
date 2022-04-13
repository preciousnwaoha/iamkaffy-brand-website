import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../UI/Button";
import classes from "./Featured.module.css";

const Featured = ({ imgPath, imgW, imgH, name, description, featuredLink, className }) => {
  return (
    <div className={`${classes.featured} ${className || ""}`}>
      <div className={classes["featured-show"]}>
        <h4 className={classes["featured-ref"]}>{name} FEATURE</h4>
        <Image
          src={imgPath}
          alt={`Kaffy featured on ${name}`}
          width={imgW}
          height={imgH}
          layout="responsive"
        />
        <div className={classes["featured-image-overlay"]}>
        <Link href={featuredLink}>
          <a target="_blank">SEE MORE</a>
        </Link>
        </div>
      </div>
      <div className={classes["featured-hide"]}>
        <p>{description}</p>
        <Link href={featuredLink}>
          <a target="_blank" className={classes["hiden-see-more"]}>SEE MORE</a>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
