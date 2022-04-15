import React from "react";
import classes from "./UIBigTitle.module.css";

const UIBigTitle = ({ titleText, className }) => {
  return (
    <h2 className={`${classes["ui-big-title"]} ${className || ""}`}>{titleText}</h2>
  );
};

export default UIBigTitle;
