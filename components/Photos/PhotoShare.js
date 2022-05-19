import React, { useState } from "react";

import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCopy } from "@fortawesome/free-regular-svg-icons";
import { faXmark, faCheck, } from "@fortawesome/free-solid-svg-icons";
import classes from "./PhotoShare.module.css";

const PhotoShare = ({photoURL, onHideShare}) => {
   const [copied, setCopied] = useState(false)
  const { asPath, pathname } = useRouter();

  let path = `${asPath}`;

  if (typeof window !== "undefined") {
    origin = window.location.origin;
    path = `${origin}${path}/photos/${photoURL}`;
  }

  const exitShareHandler = () => {
      onHideShare()
  }

  const copyHandler = () => {
    navigator.clipboard.writeText(path);
        setCopied(true)

        const timer = setTimeout(() => {
                  setCopied(false)
        }, 2000);
  }
  

  return (
    <>
      <div className={classes["photo-share"]}>
          <div className={classes["exit-share"]} onClick={exitShareHandler}>
              <FontAwesomeIcon icon={faXmark} className={classes["exit-share-icon"]} />
          </div>
        <p className={classes["link-txt"]}>{path}</p>
        <div className={classes["copy-link"]}>
          {!copied && <FontAwesomeIcon
            icon={faCopy}
            className={classes["copy-link-icon"]}
            onClick={copyHandler}
          />}
          {copied && <span><b>Copied</b> <FontAwesomeIcon icon={faCheck} className={classes["copy-link-icon"]} /></span>}
        </div>
      </div>
    </>
  );
};
//
export default PhotoShare;
