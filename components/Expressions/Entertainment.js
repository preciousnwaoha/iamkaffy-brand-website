import React from "react";
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Videos from "../Videos/Videos";
import classes from "./Entertainment.module.css";
import Title from "./Title";
import VideosInstaYt from "../Vault/VideosInstaYt";



const Entertainment = ({videosData}) => {
  return (
    <div className={classes.entertainment}>
      <Title>
        <h2>Entertainment</h2>
      </Title>
      <h4>She has produced numerous dance performances and choreography for different music genres - Afrobeats, Fuji, RnB etc.</h4>
      <Videos videosData={videosData}/>
      <VideosInstaYt />
    </div>
  );
};

export default Entertainment;
