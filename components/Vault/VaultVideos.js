import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import UITitle from '../UI/UITitle'
import Videos from '../Videos/Videos'
import classes from "./VaultVideos.module.css"
import VideosInstaYt from './VideosInstaYt';



const VaultVideos = ({videosData}) => {
  return (
    <div className={classes["vault-videos"]}>
        <UITitle titleText={"Dance Videos"} className={classes.title}  />
        <Videos videosData={videosData} />
        <VideosInstaYt />
    </div>
  )
}

export default VaultVideos