import { useState, useContext, useLayoutEffect } from "react";
import ThemeContext from "../../context/theme-context";
import classes from "./ThemeButton.module.css"



// Usage
const themeLight = {
  "--primary": "#e6a071",
  "--secondary": "#a67453",
  "--primary-trans": "rgba(230, 160, 113, 0.424)",
  "--secondary-trans": "rgba(166, 116, 83, 0.471)", 
  "--black": "#000000",
  "--white": "#fffaf7",
  "--text-black-1": "#000000",
  "--text-white-1": "#fffaf7",
  "--shadow-1": "rgba(255, 102, 0, 0.12)",
  "--shadow-2": "rgba(79, 79, 79, 0.15)",
  "--shadow-3": "rgba(0, 0, 0, 0.15)",
}

const themeDark = {
  "--primary": "#a67453",
  "--secondary": "#e6a071",
  "--primary-trans": "rgba(166, 116, 83, 0.471)",
  "--secondary-trans": "rgba(230, 160, 113, 0.424)", 
  "--black": "#fffaf7",
  "--white": "#000000",
  "--text-black-1": "#fffaf7",
  "--text-white-1": "#000000",
  "--shadow-1": "rgba(255, 102, 0, 0.12)",
  "--shadow-2": "rgba(0, 0, 0, 0.15)",
  "--shadow-3": "rgba(79, 79, 79, 0.15)",
}
if (typeof window !== "undefined") {
  const root = document.querySelector(":root")
}


// Hook
const useTheme = (theme) => {
  useLayoutEffect(
    () => {
      // Iterate through each value in theme object
      
      for (const key in theme) {
        // Update css variables in document's root element
        root.style.setProperty(`${key}`, theme[key]);
      }
    },
    [theme] // Only call again if theme object reference changes
  );
}



const ThemeButton = () => {
  const themeCtx = useContext(ThemeContext)

    const themeChangeHandler = () => {
      themeCtx.onToggleTheme()
    }

    let themeValue;
    if (themeCtx.theme === "light") {
      themeValue = themeLight  
    }

    if (themeCtx.theme === "dark") {
        themeValue = themeDark
    }

    useTheme(themeValue)

    

  return (
    <div className={classes["theme-button"]} onClick={themeChangeHandler}>
    </div>
  )
}

export default ThemeButton