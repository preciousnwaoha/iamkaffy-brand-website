import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, className, clickAction }) => {
  const btnClasses = `${classes.button} ${className || ""}`;

  return (
    <button className={btnClasses} onClick={clickAction}>
      {children}
    </button>
  );
};

export default Button;
