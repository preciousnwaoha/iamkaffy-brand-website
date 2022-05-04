import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

import classes from "./RateItem.module.css"
const RateItem = ({onGetRating}) => {
    const [rated, setRated] = useState(false)
    const [rating, setRating] = useState(0)


    
    const rateHandler = (rating) => {
        setRated(true)
        setRating(rating)
        onGetRating(rating)
    }

    



    const emptyStars = 5 - rating

  return (
    <div className={classes["rate-item"]}>
        <p className={classes['rate-item-text']}>Rate Product:</p>
        {!rated && <div className={classes["rate-stars"]}>
        <FontAwesomeIcon onClick={() => rateHandler(1)} icon={faStar} style={{fontSize: "25px"}} />
        <FontAwesomeIcon onClick={() => rateHandler(2)} icon={faStar} style={{fontSize: "25px"}} />
        <FontAwesomeIcon onClick={() => rateHandler(3)} icon={faStar} style={{fontSize: "25px"}} />
        <FontAwesomeIcon onClick={() => rateHandler(4)} icon={faStar} style={{fontSize: "25px"}} />
        <FontAwesomeIcon onClick={() => rateHandler(5)} icon={faStar} style={{fontSize: "25px"}} />
        </div>}

        {rated && <div className={classes["rate-stars"]}>

            {[...Array(rating)].map((n, index) => (
                <FontAwesomeIcon key={`rateStar${Math.random().toFixed(5)}`} onClick={() => rateHandler(index+1)} icon={faStarSolid} style={{fontSize: "25px"}} />
            ))}
            {[...Array(emptyStars)].map((n, index) => (
                <FontAwesomeIcon key={`rateStar${Math.random().toFixed(5)}`}onClick={() => rateHandler((rating + 1 + index) )} icon={faStar} style={{fontSize: "25px"}} />
            ))}
        </div>}
    </div>
  )
}

export default RateItem