import React from 'react'

import classes from "./Effect5.module.css"

const Effect5 = ({className}) => {
  return (
    <div className={`${classes["effect"]} ${classes["effect-5"]} ${className || ""}`}>
          {/* <!-- 10 divs --> */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
  )
}

export default Effect5