import React from 'react'
import classes from "./Error404.module.css"

const Error404 = () => {
  return (
    <div className={classes["error404"]}>
        <h1>Something went wrong!</h1>
        <p>Error 404</p>
    </div>
  )
}

export default Error404