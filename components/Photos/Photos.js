import React, {useState } from 'react'
import Photo from './Photo'
import PhotoExpand from "../Photos/PhotoExpand"
import classes from "./Photos.module.css"

const Photos = ({photosData, inPhotosRoute, photoData }) => {
  const [expandPhoto, setExpandPhoto] = useState(inPhotosRoute)
  const [expandPhotoData, setExpandPhotoData] = useState(photoData)

  const toggleExpandPhotoHandler = (data) => {
    setExpandPhotoData(data)
    setExpandPhoto(prevState => !prevState)
  }

  return (
    <>
    <div className={classes.photos}>
        {photosData.map(photo => (
            <Photo 
                key={photo.id}
                id={photo.id}
                url={photo.url}
                desc={photo.desc}
                onExpandPhoto={toggleExpandPhotoHandler}
            />
        ))}
    </div>

    {expandPhoto && <PhotoExpand photoData={expandPhotoData} photosData={photosData} onMinimizePhoto={toggleExpandPhotoHandler} /> }
    </>
    
  )
}

export default Photos