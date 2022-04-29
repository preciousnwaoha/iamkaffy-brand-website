import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./Video.module.css";

// import PropTypes from "prop-types";
// embedId
const Video = ({ id, type, from }) => {
  let vw = "640px";
  let vh = "360px";
  let pad = "52.65%"
  
  if (type === "portrait") {
    vw = "360px"
    vh = "640px"
    pad = "52.65%"
  }

  return (

  <div className={classes.video} >
    <div className={classes["video-responsive"]} style={{ paddingTop: `${pad}`}}>
      <iframe
        width={vw}
        height={vh}
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player" 
      />
    </div>
  </div>
)};

// Video.propTypes = {
//   embedId: PropTypes.string.isRequired,
// };

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
