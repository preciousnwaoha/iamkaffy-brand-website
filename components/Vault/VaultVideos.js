import React from 'react'
import UITitle from '../UI/UITitle'
import Videos from '../Videos/Videos'
import classes from "./VaultVideos.module.css"



const VaultVideos = ({videosData}) => {
  return (
    <div className={classes["vault-videos"]}>
        <UITitle titleText={"Dance Videos"} className={classes.title}  />
        <Videos videosData={videosData} />
    </div>
  )
}

export default VaultVideos