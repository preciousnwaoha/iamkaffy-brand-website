import React, { useState } from "react";
import Button from "../UI/Button";
import UIBigTitle from "../UI/UIBigTitle";
import Image from "next/image";
import classes from "./SuccessStories.module.css";

const DEFAULT_SSs = [
  {
    img: "/images/ijoda-1.jpg",
    title: "A Story from Kaffy's Impact 1",
    description: "desscription of story",
  },
  {
    img: "/images/ijoda-2.jpg",
    title: "A Story from Kaffy's Impact 2",
    description: "desscription of story",
  },
  {
    img: "/images/ijoda-2.jpg",
    title: "A Story from Kaffy's Impact 3",
    description: "desscription of story",
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
            <Button className={classes["right-btn"]} clickAction={backwardsHandler}>{"<"}</Button>
            <Button className={classes["left-btn"]} clickAction={forwardsHandler}>{">"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
