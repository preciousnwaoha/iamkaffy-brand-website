import React from "react";
import UITitle from "../UI/UITitle";
import Program from "./Program";
import Effect4 from "../UI/Effects/Effect4"
import Effect2 from "../UI/Effects/Effect2"
import classes from "./Programs.module.css";



const Programs = ({programs}) => {
  return (
    <div className={classes.programs}>
      <Effect4 className={classes["effect-item-1"]} />
      <Effect2 className={classes["effect-item-2"]} />
      <UITitle titleText={"Some of Ijoda by Kaffy Customised Programs are"} className={classes["programs-title"]} />
      <div className={classes["programs-items-wrapper"]}>
        {programs.map((program) => (
          <Program
            key={program.id}
            name={program.name}
            img={program.img}
            description={program.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Programs;
