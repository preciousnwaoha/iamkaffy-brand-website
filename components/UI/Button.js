import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, classValue, clickAction }) => {
  const btnClasses = `${classes.button} ${classValue || ""}`;

  return (
    <div className={btnClasses} onClick={clickAction}>
      {children}
    </div>
  );
};

export default Button;
