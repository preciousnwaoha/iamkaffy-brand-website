import React, { useEffect, useState, useContext, useRef } from 'react'
import Menu from '../../UI/Menu'
import Cart from '../Cart/Cart'
import CartIcon from '../StoreUI/CartIcon'
import StoreLogo from '../StoreUI/StoreLogo'
import ScrollContext from "../../../context/scroll-context"
import classes from "./StoreHeader.module.css"
import StoreNav from './StoreNav'

const StoreHeader = ({isLandingPage=false, collections}) => {
  const scrollCtx = useContext(ScrollContext)
  const [showSideNav, setShowSideNav] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showUpIcons, setShowUpIcons] = useState(false)

  

  const headerRef = useRef()

  const {scrollState} = scrollCtx

    const toggleShowingNav = () => {
        setShowSideNav(prevState => !prevState)
    }

    const toggleShowingCart = () => {
      setShowCart(prevState => !prevState)
    }

    const headerClasses = `${classes["store-header"]} ${isLandingPage ? classes["in-landing"] : ""}`

    useEffect(() => {
      if ( scrollState.curScrollPosY > (headerRef.current.clientHeight + 70)) {
        setShowUpIcons(true)
        if (!showUpIcons) {
          setShowUpIcons(true)
        }
      }
      if (scrollState.curScrollPosY < (headerRef.current.clientHeight + 70)) {
        
        if (showUpIcons) {
          setShowUpIcons(false)
        }
      }
    }, [scrollState, showUpIcons])


  return (
  <>
  <div className={headerClasses} ref={headerRef}>
        <Menu className={classes["store-menu-icon"]} onClick={toggleShowingNav} />
        <StoreLogo className={classes["store-header-logo"]}/>
        <StoreNav collections={collections} className={`${showSideNav ? "show-nav"  : "hide-nav"}`} padTopOrNot={`${isLandingPage ? "no-pad-top" : "yes-pad-top"}`} onExitNav={toggleShowingNav} />
        <CartIcon className={classes["store-header-cart"]} onClick={toggleShowingCart} />
        <Cart className={`${showCart ? "show-cart" : "hide-cart"}`} onHideCart={toggleShowingCart}  />
    </div>

    <div className={`${classes["menu-hover"]} ${showUpIcons ? classes["showup-left"] : classes["hide-left"]}`} >
    <Menu className={classes["menu-hover-icon"]} onClick={toggleShowingNav} />
    </div>

    <div className={`${classes["cart-hover"]} ${showUpIcons ? classes["showup-right"] : classes["hide-right"]}`}>
    <CartIcon className={classes["cart-hover-icon"]} iconSize={"1.25rem"} onClick={toggleShowingCart} />
    </div>

  </>
    
  )
}

export default StoreHeader