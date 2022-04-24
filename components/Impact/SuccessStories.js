import React, { useState } from "react";
import Button from "../UI/Button";
import UIBigTitle from "../UI/UIBigTitle";
import Image from "next/image";
import Effect5 from "../UI/Effects/Effect5"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import classes from "./SuccessStories.module.css";



const SuccessStories = ({successStories}) => {
  const storyMaxIndex = successStories.length - 1

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

  const { img, title, description} = successStories[storyIndex]

  return (
    <div className={classes["success-stories"]}>
      <Effect5 className={classes["effect-item"]} />
      <UIBigTitle titleText={"Success Stories"} className={classes.title} />
      <div className={classes["SSs-content"]}>
        <div className={classes["SSs-image-wrapper"]}>
          <div className={classes["SSs-image-wrapper-inner"]}>
            <Image
              src={img}
              alt={`Kaffy on ${description || title}`}
              priority={true}
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
        </div>
        <div className={classes["SSs-text-actions-wrapper"]}>
          <div className={classes["SSs-text"]}>
            <h4>{title}</h4>
            <p>{description || ""}</p>
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
