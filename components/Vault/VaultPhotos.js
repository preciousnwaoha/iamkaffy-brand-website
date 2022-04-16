import React from 'react'
import Photos from '../Photos/Photos'
import UITitle from '../UI/UITitle'
import classes from "./VaultPhotos.module.css"

const DEFAULT_PHOTOS = [
    {
        id: "foto1",
        imgPath: "/images/kaffy-photo-8.jpg",
        desc: "A photo of kaffy",
        alt: "Kaffy in the south"
    },
    {
        id: "foto2",
        imgPath: "/images/kaffy-photo-8.jpg",
        desc: "A photo of kaffy",
        alt: "Kaffy in the south"
    },
    {
        id: "foto3",
        imgPath: "/images/kaffy-photo-8.jpg",
        desc: "A photo of kaffy",
        alt: "Kaffy in the south"
    },
    {
        id: "foto4",
        imgPath: "/images/kaffy-photo-8.jpg",
        desc: "A photo of kaffy",
        alt: "Kaffy in the south"
    },
]

const VaultPhotos = () => {
  return (
    <div className={classes["vault-photos"]}>
        <UITitle titleText={"Photos"} className={classes.title} />
        <Photos photosData={DEFAULT_PHOTOS}/>
        <Photos photosData={DEFAULT_PHOTOS}/>
    </div>
  )
}

export default VaultPhotos