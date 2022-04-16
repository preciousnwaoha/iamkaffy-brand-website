import React from "react";
import ReactPlayer from "react-player";
import classes from "./Video.module.css";

const Video = ({ title, url }) => {
  return (
    <div className={classes["video"]}>
      <p className={classes.title}>{title}</p>
      <div className={classes["player-wrapper"]}>
      {/* <ReactPlayer
          className='react-player'
          url='https://www.youtu.be/yaOGwIPIce4'
          width='100%'
          height='100%'
          control=""
        /> */}
      </div>
    </div>
  );
};

export default Video;
