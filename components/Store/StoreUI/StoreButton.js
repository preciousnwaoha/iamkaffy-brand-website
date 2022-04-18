import React from 'react'
import classes from "./StoreButton.module.css"

const StoreButton = ({ children, className, onClick}) => {
  return (
    <button type="button" onClick={onClick} className={`${classes["store-btn"]} ${className || ""}`}>
        {children}
    </button>
  )
}

export default StoreButton