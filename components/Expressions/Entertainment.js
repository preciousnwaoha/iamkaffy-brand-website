import React from "react";
import Videos from "../Videos/Videos";
import classes from "./Entertainment.module.css";
import Title from "./Title";



const Entertainment = ({videosData}) => {
  return (
    <div className={classes.entertainment}>
      <Title>
        <h2>Entertainment</h2>
      </Title>
      <h4>She has produced numerous dance performances and choreography for different music genres - Afrobeats, Fuji, RnB etc.</h4>
      <Videos videosData={videosData}/>/
    </div>
  );
};

export default Entertainment;
