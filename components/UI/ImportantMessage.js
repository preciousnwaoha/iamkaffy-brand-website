import React from 'react'
import classes from "./ImportantMessage.module.css"

const ImportantMessage = ({ children, className }) => {
 
  return (
    <div className={`${classes.important} ${className || ""}`}>
        {children}
    </div>
  )
}

export default ImportantMessage