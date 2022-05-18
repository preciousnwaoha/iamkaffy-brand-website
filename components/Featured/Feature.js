import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import classes from "./Feature.module.css";

const Feature = ({ feature, className }) => {
  const {img, name, title, description, link } = feature

  return (
    <div className={`${classes.feature} ${className || ""}`}>
      <div className={classes["feature-content"]}>
        <div className={classes["feature-show"]}>
          <h3 className={classes["feature-ref"]}>{name || "Feature"}</h3>

          <div className={classes["image-wrapper"]}>
            <div className={classes["image-wrapper-inner"]}>
              <Image
                src={img}
                alt={`Kaffy feature on ${name || description}`}
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>

          <div className={classes["feature-image-overlay"]}>
            <div className={classes["show-see-more"]}>
              <Link href={link} passHref>
                <a target="_blank">SEE MORE</a>
              </Link>
              <FontAwesomeIcon
                icon={faAnglesRight}
                className={classes["show-see-more-icon"]}
              />
            </div>
          </div>
        </div>
        <div className={classes["feature-hide"]}>
          <h4>{title}</h4>
          <p>{description}</p>
          <div className={classes["hidden-see-more"]}>
            <Link href={link}>
              <a target="_blank">SEE MORE</a>
            </Link>
            <FontAwesomeIcon
              icon={faAnglesRight}
              className={classes["hidden-see-more-icon"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
