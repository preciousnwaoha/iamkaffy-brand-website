import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./VideosInstaYt.module.css"



const VideosInstaYt = () => {
  return (
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
  )
}

export default VideosInstaYt