import React from 'react'
import Image from 'next/image'
import classes from "./Award.module.css"

const Award = ( { id, from, name, date, imgpath, imgw, imgh } ) => {
  return (
        <div className={classes.award}>
          <Image priority src={imgpath} alt={`${name} award from ${from}`} layout="fill" className={classes["award-img"]}/>
              <div className={classes["award-text"]}>
              <h4 className={classes["award-from"]}>{from}</h4>
              <p className={classes["award-name"]}>{name}</p>
              <p className={classes["award-date"]}>{date}</p>
              </div>
              
          </div>
  )
}

export default Award