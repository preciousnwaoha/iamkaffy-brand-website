import React from 'react'
import classes from "./Effect3.module.css"

const Effect3 = ({className}) => {
  return (
    <div className={`${classes["effect"]} ${classes["effect-3"]} ${className || ""}`}></div>
  )
}

export default Effect3