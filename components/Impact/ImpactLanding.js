import React from "react";
import Scroll from "../UI/Scroll";
import classes from "./ImpactLanding.module.css";

const ImpactLanding = () => {
  return (
    <div className={classes["impact-landing"]}>
      
        <div className={classes.backdrop}></div>
      <div className={classes["impact-angle-div"]}></div>
      <h1 className={classes.title}>Kaffy&apos;s<br/> Impact</h1> 
      
    </div>
  );
};

export default ImpactLanding;
