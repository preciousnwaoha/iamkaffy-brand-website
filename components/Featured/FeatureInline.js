import React from 'react'
import Link from "next/link"
import classes from "./FeatureInline.module.css"

const FeatureInline = ({feature}) => {
  const {img, name, title, description, link } = feature

  return (
    <div className={classes["feature-inline"]}>
      <h5>{title}</h5>

      <p>{description}
      <Link href={link}>
        <a className={classes["feature-link"]}>See more</a>
      </Link>
      </p>
      
    </div>
  )
}

export default FeatureInline