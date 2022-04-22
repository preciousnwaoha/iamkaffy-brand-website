import React, { useState } from "react";
import classes from "./Size.module.css";

const Size = ({size, onGetSize}) => {
  // const [isSelected, setIsSelected] = useState(false)

  const chooseSizeHandler = () => {
    onGetSize(size);
  };

  return (
    <div className={classes["size"]} onClick={chooseSizeHandler}>
      {size}
    </div>
  );
};

export default Size;
