import React, { useState, useEffect } from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faShare, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import PhotoShare from "./PhotoShare"
import classes from "./PhotoExpand.module.css"

const PhotoExpand = ({ photoData, onMinimizePhoto }) => {
    const [showOptions, setShowOptions] = useState(true)
    const [showShare, setShowShare] = useState(false)
    const { url, desc } = photoData

    console.log(url, desc)

    const minimizePhotoHandler = (e) => {
        e.stopPropagation()
        onMinimizePhoto()
    }

    const showOptionsHandler = (e) => {
        e.stopPropagation()
        
            setShowOptions(prevState => !prevState)
    }

    const toggleShowShareHandler = () => {
        setShowShare(prevState => !prevState)
    }


    return (
        <div className={classes["photo-expand"]}  >
        
            

            {/* <div className={classes["photo-wrapper"]} onClick={(e) => e.stopPropagation()}  > */}
            <Image alt={`Kaffy in ${desc}`} src={url} className={classes.photo} width={"100vh"} height={'100vh'} onClick={showOptionsHandler}  />
            
            {/* </div> */}
            <div className={`${classes["top-nav"]}  ${showOptions ? classes['fade-in'] : classes["fade-out"]}`}>
        <div className={classes.back}>
                <FontAwesomeIcon icon={faArrowLeft} className={classes["back-icon"]} onClick={minimizePhotoHandler} />
            </div>

            <div className={classes.share}>
                <FontAwesomeIcon icon={faShareNodes} className={classes["share-icon"]} onClick={toggleShowShareHandler} />
            </div>
        </div>

            {showShare && <PhotoShare onHideShare={toggleShowShareHandler} photoURL={url} />}
            
       
            <div className={`${classes.desc} ${showOptions ? classes['fade-in'] : classes["fade-out"]}`}>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default PhotoExpand