import React from "react";
import classes from "./ImpactLanding.module.css";

const ImpactLanding = () => {
  return (
    <div className={classes["impact-landing"]}>
        <div className={classes.backdrop}></div>
      <div className={classes["impact-angle-div"]}></div>
      <h1 className={classes.title}>Impact</h1> 
    </div>
  );
};

export default ImpactLanding;
