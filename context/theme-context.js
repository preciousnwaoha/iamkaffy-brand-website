import React, { useState, useEffect, useContext } from "react";
import AuthContext from "./auth-context";

const ThemeContext = React.createContext({
  theme: {},
  onToggleTheme: () => {},
  onSetTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [themeState, setThemeState] = useState("");

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (themeState === "") {
      if (typeof window !== "undefined") {
        let themeFromLS = localStorage.getItem("theme");
        if (themeFromLS !== "") {
          setThemeState(themeFromLS);
          console.log("set from LS as", themeFromLS);
        }

        if (!themeFromLS) {
          setThemeState("light")
          console.log("had to set as light")
        }
      }
    }
  }, [authCtx, themeState])

  const toggleThemeHandler = () => {
    if (themeState === "light") {
      setThemeState("dark");
    } else {
      setThemeState("light");
    }
  };

  useEffect(() => {

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", themeState);
      console.log("theme", themeState);
    }
  }, [themeState]);

  return (
    <ThemeContext.Provider
      value={{
        theme: themeState,
        onToggleTheme: toggleThemeHandler,
        // onSetTheme: useTheme(themeState),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
