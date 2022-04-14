import React from "react";
import Video from "./Video";
import classes from "./Videos.module.css";

const Videos = ({ videosData }) => {
  return (
    <div className={classes.videos}>
      <div className={classes["videos-inner"]}>
        {videosData.map((video) => (
          <Video key={video.id} title={video.title} url={video.url} />
        ))}
      </div>
    </div>
  );
};

export default Videos;
