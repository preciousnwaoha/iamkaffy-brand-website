import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./Socials.module.css";

const Socials = ({ className }) => {
  return (
    <div className={`${classes.social} ${className || ""}`}>
      <Link href="https://www.youtube.com">
        <a>
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ fontSize: "27px" }}
            className={classes.instagram}
          ></FontAwesomeIcon>
        </a>
      </Link>

      <Link href="https://www.youtube.com">
        <a>
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ fontSize: "25px" }}
            className={classes.youtube}
          ></FontAwesomeIcon>
        </a>
      </Link>

      <Link href="https://www.youtube.com">
        <a>
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ fontSize: "25px" }}
            className={classes.facebook}
          ></FontAwesomeIcon>
        </a>
      </Link>

      <Link href="https://www.youtube.com">
        <a>
          <FontAwesomeIcon
            icon={faTiktok}
            style={{ fontSize: "25px" }}
            className={classes.facebook}
          ></FontAwesomeIcon>
        </a>
      </Link>
    </div>
  );
};

export default Socials;
