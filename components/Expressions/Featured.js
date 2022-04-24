import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../UI/Button";
import Effect3 from "../UI/Effects/Effect3";
import classes from "./Featured.module.css";

const Featured = ({ img, name, title, description, featuredLink, className }) => {
  return (
    <div className={`${classes.featured} ${className || ""}`}>
      <Effect3 className={classes["effect-item"]} />
      <div className={classes["featured-content"]}>
      <div className={classes["featured-show"]}>
        <h3 className={classes["featured-ref"]}>{name} FEATURE</h3>
        
        <div className={classes["image-wrapper"]}>
          <div className={classes["image-wrapper-inner"]}>
          <Image
          src={img}
          alt={`Kaffy featured on ${name || description}`}
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
          </div>
        </div>
        
        <div className={classes["featured-image-overlay"]}>
        <Link href={featuredLink} passHref >
          <a target="_blank">SEE MORE</a>
        </Link>
        </div>
      </div>
      <div className={classes["featured-hide"]}>
        <h4>{title}</h4>
        <p>{description}</p>
        <Link href={featuredLink}>
          <a target="_blank" className={classes["hiden-see-more"]}>SEE MORE</a>
        </Link>
      </div>
      </div>

      
    </div>
  );
};

export default Featured;
