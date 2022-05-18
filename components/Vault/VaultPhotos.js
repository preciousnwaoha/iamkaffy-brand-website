import React from 'react'
import Photos from '../Photos/Photos'
import UITitle from '../UI/UITitle'
import classes from "./VaultPhotos.module.css"

const VaultPhotos = ({photosData}) => {
  
  return (
    <div className={classes["vault-photos"]}>
        <UITitle titleText={"Photos"} className={classes.title} />
        <Photos photosData={photosData}/>
        
    </div>
  )
}

export default VaultPhotos