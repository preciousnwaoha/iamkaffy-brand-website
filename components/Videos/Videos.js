import React, { useState } from "react";
import Video from "./Video";
import classes from "./Videos.module.css";

const Videos = ({ videosData }) => {
  let noVideos = false

  if (videosData.length < 1) {
    noVideos = true;
  }
  

  return (
    <div className={classes.videos}>
      {!noVideos && <div className={classes["videos-inner"]}>
        {videosData.map((video) => {
          
          return (
            <Video key={video.id}  id={video.videoId} type={video.type} from={video.from} /> //medium={medium} title={title} embedId={resourceId.videoId} 
          )

        })}
      </div>}

      {noVideos && <div className={classes["videos-inner"]}>No Videos</div>}
    </div>
  );
};

export default Videos;
