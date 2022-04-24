import React from 'react'
import classes from "./Effect4.module.css"


const Effect4 = ({className}) => {
  return (
    <div className={`${classes["effect"]} ${classes["effect-4"]} ${className || ""}`}></div>
  )
}

export default Effect4