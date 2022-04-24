import React from 'react'
import Photo from './Photo'
import classes from "./Photos.module.css"

const Photos = ({photosData}) => {

  return (
    <div className={classes.photos}>
        {photosData.map(photo => (
            <Photo 
                key={photo.id}
                url={photo.url}
                desc={photo.desc}
            />
        ))}
    </div>
  )
}

export default Photos