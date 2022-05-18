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



const VaultVideos = ({videosData}) => {
  return (
    <div className={classes["vault-videos"]}>
        <UITitle titleText={"Dance Videos"} className={classes.title}  />
        <Videos videosData={videosData} />
        <div className={classes["insta-yt"]}>
          <Link href={"https://www.youtube.com/c/kaffytube"}>
          <a>youtube
            <FontAwesomeIcon icon={faYoutube} className={classes.icon} />
          </a>
          </Link>
          <Link href={"https://www.instagram.com/kaffydance/"}>
          <a>Instagram
          <FontAwesomeIcon icon={faInstagram} className={classes.icon} />
          </a>
          </Link>
          
        </div>
    </div>
  )
}

export default VaultVideos