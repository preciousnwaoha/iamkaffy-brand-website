import React from 'react'
import Image from "next/image"
import classes from "./Photo.module.css"

const Photo = ( {imgPath, desc}) => {
  return (
    <div className={classes.photo} >
        <div className={classes['photo-wrapper']}>
        <div className={classes['photo-wrapper-inner']}>
        <Image src={imgPath} alt={`Photo of Kaffy in ${desc}`} width={"100%"} height={"100%"} layout="responsive"  /> 
        </div>
        <p className={classes["photo-desc"]}>{desc}</p>
        </div>
        
    </div>
  )
}

export default Photo