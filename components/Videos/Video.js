import React from "react";
import ReactPlayer from "react-player";
import classes from "./Video.module.css";

const Video = ({ title, url }) => {
  return (
    <div className={classes["video"]}>
      <p>{title}</p>
      <div className={classes["player-wrapper"]}>
      {/* <ReactPlayer
          className={classes['react-player']}
          url={url}
          width='100%'
          height='100%'
          controls= {false}
          volume={1}
          muted={true}
          getDuration
        /> */}
      </div>
    </div>
  );
};

export default Video;
