import React from 'react'
import classes from "./ImportantMessage.module.css"

const ImportantMessage = ({ children, classValue }) => {
    const importantMsgClasses = `${classes.important} ${classValue || ""}`
  return (
    <div className={importantMsgClasses}>
        {children}
    </div>
  )
}

export default ImportantMessage