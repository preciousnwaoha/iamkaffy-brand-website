import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faShare,
  faShareNodes,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import PhotoShare from "./PhotoShare";
import classes from "./PhotoExpand.module.css";

const PhotoExpand = ({ photoData, photosData, onMinimizePhoto }) => {
  const [showOptions, setShowOptions] = useState(true);
  const [showShare, setShowShare] = useState(false);
  const [curPhoto, setCurPhoto] = useState(photoData);

  const maxPhotosIndex = photosData.length - 1;

  const curPhotoIndex = photosData.findIndex(
    (photo) => photo.id === curPhoto.id
  );

  const forwardsHandler = () => {
    if (curPhotoIndex === maxPhotosIndex) {
      setCurPhoto(photosData[0]);
      return;
    } else {
      setCurPhoto(photosData[curPhotoIndex + 1]);
    }
  };

  const backwardsHandler = () => {
    if (curPhotoIndex === 0) {
      setCurPhoto(photosData[maxPhotosIndex]);
      return;
    } else {
      setCurPhoto(photosData[curPhotoIndex - 1]);
    }
  };

  const { url, id, desc } = curPhoto;

  const minimizePhotoHandler = (e) => {
    e.stopPropagation();
    onMinimizePhoto();
  };

  const showOptionsHandler = (e) => {
    e.stopPropagation();

    setShowOptions((prevState) => !prevState);
  };

  const toggleShowShareHandler = () => {
    setShowShare((prevState) => !prevState);
  };

  return (
    <div className={classes["photo-expand"]}>
      <Image
        alt={`Kaffy in ${desc}`}
        src={url}
        className={classes.photo}
        width={"100%"}
        height={"100%"}
        layout="fill"
        onClick={showOptionsHandler}
      />

      <div
        className={`${classes["top-nav"]}  ${
          showOptions ? classes["fade-in"] : classes["fade-out"]
        }`}
      >
        <div className={classes.back}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={classes["back-icon"]}
            onClick={minimizePhotoHandler}
          />
        </div>

        <div className={classes.share}>
          <FontAwesomeIcon
            icon={faShareNodes}
            className={classes["share-icon"]}
            onClick={toggleShowShareHandler}
          />
        </div>
      </div>

      <div
        className={`${classes["mid-nav"]}  ${
          showOptions ? classes["fade-in"] : classes["fade-out"]
        }`}
      >
        <div className={classes.prev}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            className={classes["prev-icon"]}
            onClick={backwardsHandler}
          />
        </div>

        <div className={classes.next}>
          <FontAwesomeIcon
            icon={faAngleRight}
            className={classes["next-icon"]}
            onClick={forwardsHandler}
          />
        </div>
      </div>

      {showShare && (
        <PhotoShare onHideShare={toggleShowShareHandler} photoURL={id} />
      )}

      <div
        className={`${classes.desc} ${
          showOptions ? classes["fade-in"] : classes["fade-out"]
        }`}
      >
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default PhotoExpand;
