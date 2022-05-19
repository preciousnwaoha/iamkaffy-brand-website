import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

import classes from "./Photo.module.css";

const Photo = ({ url, id, desc, onExpandPhoto }) => {
  const expandPhotoHandler = () => {
    onExpandPhoto({ url, id, desc });
  };

  return (
    <div className={classes.photo} onClick={expandPhotoHandler}>
      <div className={classes["photo-wrapper"]}>
        <div className={classes["photo-wrapper-inner"]}>
          <Image
            src={url}
            alt={`Photo of Kaffy in ${desc}`}
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
      </div>
      <div className={classes.expand}>
          <FontAwesomeIcon icon={faExpand} className={classes["expand-icon"]} />
        </div>
      <p className={classes["photo-desc"]}>{desc}</p>
    </div>
  );
};

export default Photo;
