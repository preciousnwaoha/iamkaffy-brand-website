import React from "react";
import UITitle from "../UI/UITitle";
import Program from "./Program";
import classes from "./Programs.module.css";

const DEFAULT_PROGRAMS = [
  {
    id: "program1",
    imgPath: "/images/imagneto-2.jpg",
    name: "B.O.M.B",
    imgw: "640",
    imgh: "640",
    description: "BEST OF MY BODY",
  },
  {
    id: "program2",
    imgPath: "/images/fit_breaking-bad-1.jpg",

    name: "Breaking Bad",
    imgw: "2048",
    imgh: "2048",
    description: "Program Decription in many many words",
  },
  {
    id: "program3",
    imgPath: "/images/dance-burn-1.jpg",
    name: "Dance Burnout",
    imgw: "320",
    imgh: "320",
    description: "",
  },
  {
    id: "program4",
    imgPath: "/images/kaffy-fit-1.png",
    topRef: "REF",
    name: "Sensual Me",
    imgw: "454",
    imgh: "400",
    description: "",
  },
  {
    id: "program5",
    imgPath: "/images/kaffy-fit-2.jpg",
    name: "Tommy Blast",
    imgw: "403",
    imgh: "539",
    description: "Program Decription in many many words",
  },
];

const Programs = () => {
  return (
    <div className={classes.programs}>
      <UITitle titleText={"Some of Ijoda by Kaffy Customised Programs are"} className={classes["programs-title"]} />
      <div className={classes["programs-items-wrapper"]}>
        {DEFAULT_PROGRAMS.map((program) => (
          <Program
            key={program.id}
            name={program.name}
            imgPath={program.imgPath}
            imgw={program.imgw}
            imgh={program.imgh}
            description={program.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Programs;
