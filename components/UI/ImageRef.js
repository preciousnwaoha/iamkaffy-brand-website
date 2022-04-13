import React from 'react'
import classes from "./ImageRef.module.css"

const ImageRef = ({children, classValue}) => {
    const imageRefClasses = `${classes["img-ref"]} ${classValue || ""}`
  return (
    <p>{children}</p>
  )
}

export default ImageRef