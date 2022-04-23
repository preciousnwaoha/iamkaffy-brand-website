import React, { useState } from "react";
import Button from "../UI/Button";
import UIBigTitle from "../UI/UIBigTitle";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import classes from "./SuccessStories.module.css";

const DEFAULT_SSs = [
  {
    id: "synop1",
    img:"/images/awards/heades_show-1.jpg",
    alt: "Kaffy Bags a Headies Award",
    title: "Headies Award",
    description: "Kaffy bags Headies Special Recognition Award",
  },
  {
    id: "synop2",
    img:"/images/kaffy-photo-15.JPEG",
    alt: "Kaffy Afrima Award",
    title: "Kaffy - AFRIMA",
    description: "kaffy AFRIMA Award",
  },
  {
    id: "synop3",
    img:"/images/awards/mtvbase-logo.webp",
    alt: "Kaffy on MTV Base",
    title: "Kaffy on MTV",
    description: "Recognized on MTV Base",
  },
];

const storyMaxIndex = DEFAULT_SSs.length - 1

const SuccessStories = () => {
  const [storyIndex, setStoryIndex] = useState(0);

  const forwardsHandler = () => {
    if (storyIndex === storyMaxIndex) {
      setStoryIndex(0);
      return
    } else {
      setStoryIndex((prevIndex) => {
        return prevIndex + 1;
      });
    }
  };

  const backwardsHandler = () => {
    if (storyIndex === 0) {
        setStoryIndex(storyMaxIndex);
        return
      } else {
        setStoryIndex((prevIndex) => {
          return prevIndex - 1;
        });
      }
  };

  const { img, title, description} = DEFAULT_SSs[storyIndex]

  return (
    <div className={classes["success-stories"]}>
      <UIBigTitle titleText={"Success Stories"} />
      <div className={classes["SSs-content"]}>
        <div className={classes["SSs-image-wrapper"]}>
          <div className={classes["SSs-image-wrapper-inner"]}>
            <Image
              src={img}
              alt={title}
              priority={true}
              width={"100%"}
              height="100%"
              layout="responsive"
            />
          </div>
        </div>
        <div className={classes["SSs-text-actions-wrapper"]}>
          <div className={classes["SSs-text"]}>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
          <div className={classes["SSs-actions"]}>
            <Button className={classes["right-btn"]} clickAction={backwardsHandler}>
            <FontAwesomeIcon icon={faAngleLeft} style={{fontSize: "1.125rem"}} />
              </Button>
            <Button className={classes["left-btn"]} clickAction={forwardsHandler}>
            <FontAwesomeIcon icon={faAngleRight} style={{fontSize: "1.125rem"}} />
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
