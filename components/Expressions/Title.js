import React from 'react'
import classes from "./Title.module.css"

const Title = ({children, className}) => {
  return (
    <div className={`${classes.title} ${className || ""}`}>{children}</div>
  )
}

export default Title