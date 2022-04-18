import React from 'react'
import classes from "./Menu.module.css"

const Menu = ({className, onClick}) => {
    const menuClasses = `${classes.menu} ${className || " "}`
  return (
    <div className={menuClasses} onClick={onClick}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Menu