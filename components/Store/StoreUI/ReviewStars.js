import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import classes from "./ReviewStars.module.css"

const ReviewStars = ({starNum, className}) => {
  // const value = Math.round(starNum)
  // console.log(value)
  // console.log(starNum)
  let valLeft;
  const valFloor = Math.floor(starNum)
  const isHalf = (starNum - valFloor) >= 0.5

  valLeft = 5 - valFloor

  if (isHalf) {
    valLeft = valLeft -1
  }

  return (
    <div className={`${classes["review-stars"]} ${className || ""}`}>
        {starNum.toFixed(2)}
        <div>
          {[...Array(valFloor)].map(() => (
            <FontAwesomeIcon  key={`rating${Math.random().toFixed(5)}`} icon={faStarSolid} style={{fontSize: "1rem"}} />
          ))}
          {isHalf &&
            <FontAwesomeIcon icon={faStarHalfAlt} style={{fontSize: "1rem"}} />
          }
          {[...Array(valLeft)].map(() => (
            <FontAwesomeIcon  key={`rating${Math.random().toFixed(5)}`} icon={faStar} style={{fontSize: "1rem"}} />
          ))}
        </div>
        
    </div>
  )
}

export default ReviewStars