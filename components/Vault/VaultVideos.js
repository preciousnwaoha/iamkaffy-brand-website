import React from 'react'
import UITitle from '../UI/UITitle'
import Videos from '../Videos/Videos'
import { DEFAULT_VIDEOS } from '../Expressions/Entertainment'
import classes from "./VaultVideos.module.css"



const VaultVideos = () => {
  return (
    <div className={classes["vault-videos"]}>
        <UITitle titleText={"Dance Videos"} className={classes.title}  />
        <Videos videosData={DEFAULT_VIDEOS} />
    </div>
  )
}

export default VaultVideos