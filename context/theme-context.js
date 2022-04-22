import React, { useState } from "react"

const ThemeContext = React.createContext({
    theme: "",
    onSetTheme: () => {},
    onToggleTheme: () => {},
})


export const ThemeContextProvider = () => {
    const [theme, setTheme] = useState("light")

    const setThemeHandler = () => {
        console.log("set theme")
    }

    const toggleThemeHandler = () => {
        console.log("toggleTheme")
    }

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            onSetTheme: setThemeHandler,
            onToggleTheme: toggleThemeHandler,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;