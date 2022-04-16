import React from "react";
import Videos from "../Videos/Videos";
import classes from "./Entertainment.module.css";
import Title from "./Title";

export const DEFAULT_VIDEOS = [
    {
        id: "vid1",
        url: "https://youtu.be/Rq5SEhs9lws",
        title: "Video Title 1",
    },
    {
        id: "vid2",
        url: "https://youtu.be/Rq5SEhs9lws",
        title: "Video Title 2",
    },
    {
      id: "vid3",
      url: "https://youtu.be/Rq5SEhs9lws",
      title: "Video Title 3",
  },
  {
    id: "vid4",
    url: "https://youtu.be/Rq5SEhs9lws",
    title: "Video Title 2",
},
{
  id: "vid5",
  url: "https://youtu.be/Rq5SEhs9lws",
  title: "Video Title 2",
},
]

const Entertainment = () => {
  return (
    <div className={classes.entertainment}>
      <Title>
        <h2>Entertainment</h2>
      </Title>
      <h4>She has produced numerous dance performances and choreography for different music genres - Afrobeats, Fuji, RnB etc.</h4>
      <Videos videosData={DEFAULT_VIDEOS}/>
    </div>
  );
};

export default Entertainment;
