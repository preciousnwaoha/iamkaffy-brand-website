import React from "react";
import Video from "./Video";
import classes from "./Videos.module.css";

const Videos = ({ videosData }) => {
  return (
    <div className={classes.videos}>
      <div className={classes["videos-inner"]}>
        {videosData.map((video) => {
          
          // const { id, snippet = {} } = item;
          // const { title, thumbnails = {}, resourceId } = snippet;
          // const { medium = {} } = thumbnails;
          
          return (
            <Video key={video.id}  id={video.id} type={video.type} from={video.from} /> //medium={medium} title={title} embedId={resourceId.videoId} 
          )

        })}
      </div>
    </div>
  );
};

export default Videos;
