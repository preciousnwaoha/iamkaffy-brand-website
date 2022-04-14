import Image from 'next/image'
import React from 'react'
import classes from "./Service.module.css"

const Service = ({ name }) => {
  return (
    <li className={classes.service}>
        {name}
    </li>
  )
}

export default Service