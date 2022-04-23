import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./Socials.module.css";

const Socials = ({ className }) => {
  return (
    <div className={`${classes.social} ${className || ""}`}>
      <Link href="https://www.instagram.com/kaffydance/">
        <a>
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ fontSize: "27px" }}
            className={classes.instagram}
          ></FontAwesomeIcon>
        </a>
      </Link>

      <Link href="https://www.youtube.com/c/kaffytube">
        <a>
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ fontSize: "25px" }}
            className={classes.youtube}
          ></FontAwesomeIcon>
        </a>
      </Link>

      <Link href="https://www.facebook.com/kdancequeen">
        <a>
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ fontSize: "25px" }}
            className={classes.facebook}
          ></FontAwesomeIcon>
        </a>
      </Link>

      <Link href="https://www.tiktok.com/@kaffydance">
        <a>
          <FontAwesomeIcon
            icon={faTiktok}
            style={{ fontSize: "25px" }}
            className={classes.tiktok}
          ></FontAwesomeIcon>
        </a>
      </Link>

      <Link href="https://www.linkedin.com/in/kaffy-shafau-ameh-40a5a929/">
        <a>
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ fontSize: "25px" }}
            className={classes.linkedin}
          ></FontAwesomeIcon>
        </a>
      </Link>
      <Link href="https://twitter.com/kaffydancequeen">
        <a>
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ fontSize: "25px" }}
            className={classes.twitter}
          ></FontAwesomeIcon>
        </a>
      </Link>
    </div>
  );
};

export default Socials;
