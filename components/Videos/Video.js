import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./Video.module.css";

import PropTypes from "prop-types";

const Video = ({ medium, title, embedId }) => (
  <div className={classes.video}>
    <div className={classes["video-responsive"]}>
      <iframe
        width="640px"
        height="360px"
        src={`https://youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  </div>
);

Video.propTypes = {
  embedId: PropTypes.string.isRequired,
};

// const Video = ({ medium, title, url }) => {
//   console.log(title, url, medium)
//   return (
//     <div className={classes["video"]}>
//       <div className={classes["thumbnail-wrapper"]}>
//         <div className={classes["thumbnail-wrapper-inner"]}>
//         <Image src={medium.url}  width={"100%"} height={"100%"} alt={title} />
//         </div>
//       </div>
//       <Link href={url}>
//         <a className={classes.title}>{title}</a>
//       </Link>

//     </div>
//   );
// };

export default Video;
