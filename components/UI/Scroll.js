import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import classes from "./Scroll.module.css"

function Scroll({className, scrollType}) { 
  const scrollClasses = `${classes.scroll} ${className || ""}`

  if (scrollType === "scroll-down" ) {
    return (
      <div className={`${scrollClasses} ${classes.bounceDown}`}>
        <FontAwesomeIcon icon={faArrowDown} style={{fontSize: "25px"}}>

        </FontAwesomeIcon>
        </div>
    )
  }

  return (
    <div className={`${scrollClasses} ${classes.bounceUp}`}>
      <FontAwesomeIcon icon={faArrowUp} style={{fontSize: "25px"}}>

      </FontAwesomeIcon>
    </div>
  )
}

export default Scroll