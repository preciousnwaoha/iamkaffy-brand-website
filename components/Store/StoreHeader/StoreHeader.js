import React, { useState } from 'react'
import Menu from '../../UI/Menu'
import Cart from '../Cart/Cart'
import CartIcon from '../StoreUI/CartIcon'
import StoreLogo from '../StoreUI/StoreLogo'
import classes from "./StoreHeader.module.css"
import StoreNav from './StoreNav'

const StoreHeader = ({isLandingPage=false, collections}) => {
  const [showSideNav, setShowSideNav] = useState(false)
  const [showCart, setShowCart] = useState(false)

    const toggleShowingNav = () => {
        setShowSideNav(prevState => !prevState)
    }

    const toggleShowingCart = () => {
      setShowCart(prevState => !prevState)
    }

    const headerClasses = `${classes["store-header"]} ${isLandingPage ? classes["in-landing"] : ""}`



  return (
    <div className={headerClasses}>
        <Menu className={classes["store-menu-icon"]} onClick={toggleShowingNav} />
        <StoreLogo className={classes["store-header-logo"]}/>
        <StoreNav collections={collections} className={`${showSideNav ? "show-nav"  : "hide-nav"}`} padTopOrNot={`${isLandingPage ? "no-pad-top" : "yes-pad-top"}`} onExitNav={toggleShowingNav} />
        <CartIcon className={classes["store-header-cart"]} onClick={toggleShowingCart} />
        <Cart className={`${showCart ? "show-cart" : "hide-cart"}`} onHideCart={toggleShowingCart}  />
    </div>
  )
}

export default StoreHeader