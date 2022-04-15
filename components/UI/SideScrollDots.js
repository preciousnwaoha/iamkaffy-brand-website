import React from 'react'
import classes from "./SideScrollDots.module.css"

const SideScrollDots = ({className}) => {
    
  return (
    <div className={`${classes["side-scroll-dots"]} ${className || ""}`}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default SideScrollDots