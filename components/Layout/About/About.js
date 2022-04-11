import React from "react";
import Button from "../../UI/Button";
import Scroll from "../../UI/Scroll";
import classes from "./About.module.css";
import Accolades from "./Accolades";
import MoreThanADancer from "./MoreThanADancer";
import Story from "./Story";

const About = () => {

  return (
    <section className={classes.about}>
      <Story />
      <MoreThanADancer />
      <Accolades />
    </section>
  );
};

export default About;
