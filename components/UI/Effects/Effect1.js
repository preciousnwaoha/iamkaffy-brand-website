import React from "react";
import classes from "./Effect1.module.css";

const Effect1 = ({className}) => {
  return <div className={`${classes["effect"]} ${classes["effect-1"]} ${className || ""}`}></div>;
};

export default Effect1;
