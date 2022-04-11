import React from 'react'
import classes from "./Arts.module.css"

const Arts = () => {
  return (
    <div className={classes.arts}>
        <div className={classes["arts-title-wrapper"]}>
        <h2>Arts</h2>
        <div>
            <h3>Creative Director</h3>
            <h3>Performance</h3>
        </div>
        </div>
        
    </div>
  )
}

export default Arts