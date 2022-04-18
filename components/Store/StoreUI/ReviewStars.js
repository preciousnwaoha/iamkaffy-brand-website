import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from "./ReviewStars.module.css"

const ReviewStars = ({starNum, className}) => {
  return (
    <div className={`${classes["review-stars"]} ${className || ""}`}>
        {starNum} Stars
    </div>
  )
}

export default ReviewStars