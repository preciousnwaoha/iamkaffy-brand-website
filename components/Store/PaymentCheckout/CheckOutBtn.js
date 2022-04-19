import React from 'react'
import Link from "next/link"
import classes from "./CheckOutBtn.module.css"

const CheckOutBtn = ({className}) => {
  return (
      <Link href="/store/checkout">
        <a className={`${classes["check-out-btn"]} ${className || ""}`}>
            Check Out
        </a>
      </Link>
    
  )
}

export default CheckOutBtn