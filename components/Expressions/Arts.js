import React from "react";
import Title from "./Title";
import Services from "../Services/Services"
import classes from "./Arts.module.css";
import ImportantMessage from "../UI/ImportantMessage";

const Arts = () => {
  return (
    <div className={classes.arts}>
      <Title className={classes["arts-title"]}>
        <h2>Arts</h2>
        <h3>Creative Director | Performance</h3>
      </Title>

      <h4 className={classes["sub-title"]}>
        <span>Kaffy believes</span> in the power of art to create a more
        inspired world.
      </h4>

      <div className={classes["arts-text"]}>
        <p>
          From conceptual development design, suration, and performance - Kaffy has built a business brand that provides services for every spectrum of creative arts.
        </p>
        <p>
          She understands how to be immersed in a brief to produce
          uniquely creative pieces (dance, costume or content) that evoke the
          right emotions and create the desired experience.
        </p>
      </div>
      <Services />
      
      <ImportantMessage className={classes["arts-quote"]}>
        <h4>Art is a piece of communication tool used to express the unspoken and open the eyes to the unseen.</h4>
      </ImportantMessage>
    </div>
  );
};

export default Arts;
