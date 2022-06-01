import React from 'react'
import Nav from './Nav'
import Logo from '../UI/Logo'
import ScrollLine from '../UI/ScrollLine'
import classes from "./Header.module.css"


const Header = () => {
  return (
    <header className={classes.header}>
        <Logo classValue={classes.logo} />
        <Nav />
        <ScrollLine />
    </header>
  )
}

export default Header