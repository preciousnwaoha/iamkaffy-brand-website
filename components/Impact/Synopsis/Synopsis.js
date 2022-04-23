import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import UIBigTitle from "../../UI/UIBigTitle";
import SynopsisItem from "./SynopsisItem";
import classes from "./Synopsis.module.css";
import SideScrollDots from "../../UI/SideScrollDots";

const DEFAULT_SYNOPSIS = [
  {
    id: "synop1",
    img:"/images/imagneto-2.jpg",
    alt: "Kaffy Bags a Headies Award",
    title: "Eko Dance",
    description: "Eko Dance",
  },
  {
    id: "synop2",
    img:"/images/kaffy-photo-15.JPEG",
    alt: "Kaffy Afrima Award",
    title: "The Dance Workshop and Conference",
    description: "The Dance Workshop and Conference",
  },
  {
    id: "synop3",
    img:"/images/kaffy-fit-1.png",
    alt: "Kaffy on MTV Base",
    title: "Dance Health Inituative",
    description: "Dance Health Inituative",
  },
  {
    id: "synop4",
    img:"/images/kaffy-photo-4.jpg",
    alt: "Kaffy on Synopsis",
    title: "DanceBoss Challenge",
    description: "DanceBoss Challenge",
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
      <SideScrollDots className={classes["synopsis-side-scroll-dots"]} />
    </div>
  );
};

export default Synopsis;
