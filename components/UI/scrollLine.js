import React, { useEffect, useState, useLayoutEffect, useContext } from 'react'
import ScrollContext from '../../context/scroll-context'
import classes from "./ScrollLine.module.css"

const ScrollLine = () =>  { 
  // const [lineWidth, setLineWidth] = useState(0)

  const scrollCtx = useContext(ScrollContext)


  const { scrollState } = scrollCtx
  
  // useEffect(() => {

        
  //     setLineWidth(scrollState.scrollYPercent)


    
  // }, [scrollState])

  return (
    <div className={classes["scroll-line"]}>
      <div className={classes["scroll-line-inner"]} style={{ width: `${scrollState.scrollYPercent}%` }}></div>
    </div>
  )
}

export default ScrollLine