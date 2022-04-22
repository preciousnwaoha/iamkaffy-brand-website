import React from "react";
import classes from "./Color.module.css"

const Color = ( { color, onGetColor}) => {

    const chooseColorHandler = () => {
        onGetColor(color)
    }

  return (
    <div
      className={classes["color"]}
      style={{ background: color }}
      onClick={chooseColorHandler}
    ></div>
  );
};

export default Color;
