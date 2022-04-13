import Image from "next/image";
import React from "react";
import classes from "./Program.module.css";

const Program = ({ name, imgPath, imgw, imgh, description, topRef }) => {
  return (
    <div className={classes.program}>
      <div className={classes["program-image-wrapper"]}>
        <Image
          src={imgPath}
          alt={`Kaffy the dancer's ${name} program`}
          width={imgw}
          height={imgh}
          layout="responsive"
        />
        <p className={classes["program-image-ref"]}>{topRef}</p>
        <div className={classes["program-text-wrapper"]}>
          <p className={classes["program-name"]}>{name}</p>
          <p className={classes["program-description"]}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
