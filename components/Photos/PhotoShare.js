import React, { useState } from "react";

import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import classes from "./PhotoShare.module.css";

const PhotoShare = ({photoURL, onHideShare}) => {
   const [copied, setCopied] = useState(false)
  const { asPath, pathname } = useRouter();

  let path = `${asPath}`;

  if (typeof window !== "undefined") {
    origin = window.location.origin;
    path = `${origin}${path}${photoURL}`;
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

//   useEffect(() => {
//     if (items.length === 0) {
//       return;
//     }
//     setButtonIsHighlighted(true);
//     const timer = setTimeout(() => {
//       setButtonIsHighlighted(false);
//     }, 300);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [items]);

  

  return (
    <>
      <div className={classes["photo-share"]}>
          <div className={classes["exit-share"]} onClick={exitShareHandler}>
              <FontAwesomeIcon icon={faXmark} className={classes["exit-share-icon"]} />
          </div>
        <p className={classes["link-txt"]}>{path}</p>
        <div className={classes["copy-link"]}>
          {!copied && <FontAwesomeIcon
            Icon={faCopy}
            className={classes["copy-link-icon"]}
            onClick={copyHandler}
          />}
          {copied && <FontAwesomeIcon icon={faCheck} className={classes["copy-link-icon"]} />}
        </div>
      </div>
    </>
  );
};
//
export default PhotoShare;
