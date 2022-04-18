import React from 'react'
import Scroll from "../UI/Scroll"
import classes from "./ExpressionsLanding.module.css"

const ExpressionsLanding = () => {
  return (
    <div className={classes["expressions-landing"]}>
      <h1>Kaffy&apos;s Expressions</h1>
      <Scroll className={classes["scroll-down"]} scrollType={"scroll-down"} />
    </div>
  )
}

export default ExpressionsLanding