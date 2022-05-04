import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  userId: '',
  login: (token) => {},
  logout: () => {}
});

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingTime = adjExpirationTime - currentTime;

    return remainingTime;
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem("token");
    const storedExpirationDate = localStorage.getItem("expirationTime");

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if (remainingTime <= 300000) {
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        return null;
    }

    return {
        token: storedToken,
        remainingTime: remainingTime,
    }
}

export const AuthContextProvider = ({ children }) => {
    const [userIdState, setUserIdState] = useState('')

    let initialToken = null;
    const [token, setToken] = useState(initialToken);

    const logoutHandler = useCallback(() => {
      setUserIdState('')
      
        setToken(null);
        if (typeof window !== "undefined") {
            localStorage.removeItem('token');
            localStorage.removeItem('expirationTime')
        }

        if(logoutTimer) {
            clearTimeout(logoutTimer)
        }
        
    }, [])

    const loginHandler = (token, expirationTime, userId) => {
      setUserIdState(userId)
      
        setToken(token)
        if (typeof window !== "undefined") {
            localStorage.setItem('token', token);
            localStorage.setItem('expirationTime', expirationTime)
        }

        const remainingTime = calculateRemainingTime(expirationTime)
        logoutTimer = setTimeout(logoutHandler, remainingTime)
    }
  
    useEffect(() => {
      const tokenData = retrieveStoredToken();
      if (tokenData) {
        setToken(tokenData.token);
        // console.log("remainingTime", tokenData.remainingTime)
        logoutTimer = setTimeout(logoutHandler, tokenData.remainingTime)
      }
    }, [logoutHandler]);
  
    useEffect(() => {
      if (token !== initialToken) {
        localStorage.setItem("token", token);
      }
    }, [token, initialToken]);


    const userIsLoggedIn = !!token;

    



  return (
    <AuthContext.Provider
      value={{
        token: token,
        isLoggedIn: userIsLoggedIn,
        userId: userIdState,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
