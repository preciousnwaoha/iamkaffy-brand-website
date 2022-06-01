import React from 'react'
import Nav from './Nav'
import Logo from '../UI/Logo'
import classes from "./Header.module.css"
import ScrollLine from '../UI/ScrollLine'

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