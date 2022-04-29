import React from 'react'
import Effect1 from "./UI/Effects/Effect1"
import Effect2 from "./UI/Effects/Effect2"
import Effect3 from "./UI/Effects/Effect3"
import Link from 'next/link'
import classes from "./Error.module.css"



const Error = ({type}) => {
  let title;
  let message;

  if (type === "404") {
    title = "Oops!"
    message = "Error 404: The Page could not be found"
  }
  else if ( type === "500") {
    title = "Sorry!"
    message = "Error 500: Something went wrong."
  }
  else {
    title = "Oops!"
    message = "Something went weird happened."
  }

  return (
    <div className={classes["error"]}>
    <Effect1 className={classes["effect-item-1"]} />
    <Effect2 className={classes["effect-item-2"]} />
    <Effect3 className={classes["effect-item-3"]} />
    <h1>{title || "Oops"}</h1>
    <h3>{message || "Something went wrong"}</h3>
    <Link href="/">
      <a className={classes["back-to-home"]}>Back to Home</a>
    </Link>
    </div>
  )
}

export default Error