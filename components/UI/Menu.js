import React from 'react'
import classes from "./Menu.module.css"

const Menu = ({classValue, toggleSideNav}) => {
    const menuClasses = `${classes.menu} ${classValue || " "}`
  return (
    <div className={menuClasses} onClick={toggleSideNav}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Menu