import React from "react";
import classes from "./Effect.module.css";

const Effect = ({className}) => {
  return (
      <div className={`${classes["effect-wrap"]} ${className | ""}`}>
        <div className={`${classes["effect"]} ${classes["effect-1"]}`}></div>
        <div className={`${classes["effect"]} ${classes["effect-2"]}`}>
          {/* <!-- 28 divs --> */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${classes["effect"]} ${classes["effect-3"]}`}></div>
        <div className={`${classes["effect"]} ${classes["effect-4"]}`}></div>
        <div className={`${classes["effect"]} ${classes["effect-5"]}`}>
          {/* <!-- 10 divs --> */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
  );
};


export default Effect