
import React, { useState, useLayoutEffect } from "react";


const ThemeContext = React.createContext({
    theme: {},
    onToggleTheme: () => {},
    onSetTheme: () => {},
  });

// Usage
{/*
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
};

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
};


if (typeof window !== "undefined") {
    const root = document.querySelector(":root")
}


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
 */}

 

  
  



export const ThemeContextProvider = ({children}) => {
    
    const [themeState, setThemeState] = useState("light")
    
    

    const toggleThemeHandler = () => {
      if (themeState === "light") {
        setThemeState("dark")
      }
      else {
        setThemeState("light")
      }
    }

    // useTheme(themeState)  

    return (
        <ThemeContext.Provider value={{
            theme: themeState,
            onToggleTheme: toggleThemeHandler,
            // onSetTheme: useTheme(themeState),
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;