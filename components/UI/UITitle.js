import React from "react";
import classes from "./UITitle.module.css";

const UITitle = ({ titleText, className }) => {
  return (
    <h3 className={`${classes["ui-title"]} ${className || ""}`}>{titleText}</h3>
  );
};

export default UITitle;
