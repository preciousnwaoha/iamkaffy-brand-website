import React from "react";
import UIBigTitle from "../../UI/UIBigTitle";
import SynopsisItem from "./SynopsisItem";
import classes from "./Synopsis.module.css";
import SideScrollDots from "../../UI/SideScrollDots";

const DEFAULT_SYNOPSIS = [
  {
    id: "synop1",
    img:"/images/ijoda-1.jpg",
    alt: "Kaffy on Synopsis",
    title: "Synopsis 1",
    description: "Synopsis 1 Description",
  },
  {
    id: "synop2",
    img:"/images/ijoda-1.jpg",
    alt: "Kaffy on Synopsis",
    title: "Synopsis 2",
    description: "Synopsis 2 Description",
  },
  {
    id: "synop3",
    img:"/images/ijoda-1.jpg",
    alt: "Kaffy on Synopsis",
    title: "Synopsis 3",
    description: "Synopsis 3 Description",
  },
  {
    id: "synop4",
    img:"/images/ijoda-1.jpg",
    alt: "Kaffy on Synopsis",
    title: "Synopsis 4",
    description: "Synopsis 4 Description",
  },
];

const Synopsis = () => {
  return (
    <div className={classes.synopsis}>
      <UIBigTitle titleText={"Synopsis"} />
      <div className={classes["synopsis-content"]}>
        {DEFAULT_SYNOPSIS.map((synopsis) => (
          <SynopsisItem
            key={synopsis.id}
            img={synopsis.img}
            title={synopsis.title}
            alt={synopsis.alt}
            description={synopsis.description}
          />
        ))}
      </div>
      <SideScrollDots />
    </div>
  );
};

export default Synopsis;
