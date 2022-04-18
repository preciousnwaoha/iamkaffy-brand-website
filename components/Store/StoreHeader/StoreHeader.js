import React, { useState } from 'react'
import Menu from '../../UI/Menu'
import Cart from '../StoreUI/Cart'
import StoreLogo from '../StoreUI/StoreLogo'
import classes from "./StoreHeader.module.css"
import StoreNav from './StoreNav'

const StoreHeader = () => {
  const [showSideNav, setShowSideNav] = useState(false)
    

    const toggleShowingNav = () => {
        setShowSideNav(prevState => !prevState)
    }



  return (
    <div className={classes["store-header"]}>
        <Menu className={classes["store-menu-icon"]} onClick={toggleShowingNav} />
        <StoreLogo className={classes["store-header-logo"]}/>
        <StoreNav className={`${showSideNav ? "show-nav"  : "hide-nav"}`} onExitNav={toggleShowingNav} />
        <Cart className={classes["store-header-cart"]} />
    </div>
  )
}

export default StoreHeader