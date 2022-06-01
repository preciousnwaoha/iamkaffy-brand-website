import React, { useState, useEffect, useContext } from "react";
import AuthContext from "./auth-context";

const ScrollContext = React.createContext({
  scrollState: {},
//   onGetScroll: () => {},
//   onSetTheme: () => {},
});

export const ScrollContextProvider = ({ children }) => {
    const [scrollState, setScrollState] = useState({
      scrollLimit: 0,
            curScrollPosY: 0,
            passed: false,
            scrollYPercent : 0,
    })

  

  
    useEffect(() => {
      
      // let hasPassed;

      const listenToScroll = () => {
        // let body = document.body;
        // let html = document.documentElement;
        // let heightLimit = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight)
        
        let scrollLimit = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)

        let hideLimit = (0.35 * window.innerHeight)

        
        let scrollYPercent = (window.scrollY / scrollLimit * 100)
        
        if (( window.scrollY > hideLimit )) {
          setScrollState({
            scrollLimit,
            curScrollPosY: window.scrollY,
            passed: true,
            scrollYPercent,
        })
        }
  
        if ((window.scrollY < hideLimit)) {
          
          setScrollState({
            scrollLimit,
            curScrollPosY: window.scrollY,
            passed: false,
            scrollYPercent,
        })
        }

       
      }
  
      if ( typeof window !== "undefined") {
        window.addEventListener('scroll', listenToScroll)
  
      }
    }, [])



  return (
    <ScrollContext.Provider
      value={{
        scrollState,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;
