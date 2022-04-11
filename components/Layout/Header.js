import React from 'react'
import Nav from './Nav'
import Logo from '../UI/Logo'
import classes from "./Header.module.css"

const Header = () => {
  return (
    <header className={classes.header}>
        <Logo />
        <Nav />
    </header>
  )
}

export default Header