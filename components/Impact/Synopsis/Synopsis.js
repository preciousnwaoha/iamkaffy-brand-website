import React from "react";
import UIBigTitle from "../../UI/UIBigTitle";
import SynopsisItem from "./SynopsisItem";
import classes from "./Synopsis.module.css";
import SideScrollDots from "../../UI/SideScrollDots";
import Effect3 from "../../UI/Effects/Effect3";



const Synopsis = ({synopsis}) => {
  return (
    <div className={classes.synopsis}>
      <Effect3 className={classes["effect-item"]} />
      <UIBigTitle titleText={"Synopsis"} />
      <div className={classes["synopsis-content"]}>
        {synopsis.map((synop) => (
          <SynopsisItem
            key={synop.id}
            img={synop.img}
            title={synop.title}
            alt={`${synop.description || synop.title} with Kaffy the dancer`}
            description={synop.description}
          />
        ))}
      </div>
      <SideScrollDots className={classes["synopsis-side-scroll-dots"]} />
    </div>
  );
};

export default Synopsis;
