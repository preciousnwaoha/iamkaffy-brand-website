import React from 'react'
import classes from "./Scroll.module.css"

function Scroll({classValue}) { 
  const scrollClasses = `${classes.scroll} ${classValue || ""}`

  if (classValue === "scroll-down" ) {
    return (
      <div className={scrollClasses}>|</div>
    )
  }

  return (
    <div className={scrollClasses}>-</div>
  )
}

export default Scroll