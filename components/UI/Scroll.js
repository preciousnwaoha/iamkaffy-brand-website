import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import classes from "./Scroll.module.css"
import ScrollContext from '../../context/scroll-context'

function Scroll({className, scrollType}) { 
  const scrollCtx = useContext(ScrollContext)
  const scrollClasses = `${classes.scroll} ${className || ""}`
  // const [hideScroll, setHideScroll] = useState(false)

  const { scrollState } = scrollCtx;
  // let hideScroll = false;


  
  

  
  // useEffect(() => {

  //   const listenToScroll = () => {
  //     // let body = document.body;
  //     // let html = document.documentElement;
  //     // let heightLimit = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight)
      
  //     // let scrollLimit = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)
      

  //     let hideLimit = (0.65 / 100 * window.innerHeight)
      
  //     if ((hideLimit > window.scrollY) && (hideScroll === false)) {
  //       // setHideScroll(true)
  //       // hideScroll = true;
  //     }

  //     if ((hideLimit < window.scrollY) && (hideScroll === true)) {
  //       setHideScroll(false)
  //       // hideScroll = false;
  //     }
  //   }

  // }, [scrollState])

  // console.log(hideScroll)



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smooth scrolling
    })
  }

  const scrollToDown = () => {
    const document = 
    window.scrollTo({
      top: window.innerHeight - 60,
      behavior: 'smooth' // for smooth scrolling
    })
  }

  // if (scrollType === "scroll-down" ) {
  //   return (
  //     <div onClick={scrollToDown} className={`${scrollClasses} ${classes.bounceDown} ${hideScroll && classes.hide}`}>
  //       <FontAwesomeIcon icon={faArrowDown} style={{fontSize: "25px"}}>
      
  //       </FontAwesomeIcon>
  //       </div>
  //   )
  // }

  if (scrollType === "scroll-down" ) {
    return (
      <>
      {!scrollState.passed && <div onClick={scrollToDown} className={`${scrollClasses} ${classes.bounceDown}`}>
        <FontAwesomeIcon icon={faArrowDown} style={{fontSize: "25px"}}>
      
        </FontAwesomeIcon>
        </div>}
      </>
      
    )
  }


  return (
    <div onClick={scrollToTop} className={`${scrollClasses} ${classes.bounceUp}`}>
      <FontAwesomeIcon icon={faArrowUp} style={{fontSize: "25px"}}>

      </FontAwesomeIcon>
    </div>
  )
}

export default Scroll