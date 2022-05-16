import React, {useState } from 'react'
import Photo from './Photo'
import PhotoExpand from "../Photos/PhotoExpand"
import classes from "./Photos.module.css"

const Photos = ({photosData}) => {
  const [expandPhoto, setExpandPhoto] = useState(false)
  const [expandPhotoData, setExpandPhotoData] = useState({})



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
                url={photo.url}
                desc={photo.desc}
                onExpandPhoto={toggleExpandPhotoHandler}
            />
        ))}
    </div>

    {expandPhoto && <PhotoExpand photoData={expandPhotoData} onMinimizePhoto={toggleExpandPhotoHandler} /> }
    </>
    
  )
}

export default Photos