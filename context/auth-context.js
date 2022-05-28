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
    const storedUserId = localStorage.getItem("userId");
    const storedExpirationDate = localStorage.getItem("expirationTime");

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if (remainingTime <= 300000) {
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        return null;
    }

    return {
        token: storedToken,
        userId: storedUserId,
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
            localStorage.removeItem('userId');
            localStorage.removeItem('expirationTime');

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
             localStorage.setItem('userId', userId);
            localStorage.setItem('expirationTime', expirationTime)
        }

        const remainingTime = calculateRemainingTime(expirationTime)
        logoutTimer = setTimeout(logoutHandler, remainingTime)
    }
  
    useEffect(() => {
      const tokenData = retrieveStoredToken();
      if (tokenData) {
        setUserIdState(tokenData.userId)
        setToken(tokenData.token);
        // console.log("remainingTime", tokenData.remainingTime)
        logoutTimer = setTimeout(logoutHandler, tokenData.remainingTime)
      }
    }, [logoutHandler]);
  
    useEffect(() => {
      if (token !== initialToken) {
        localStorage.setItem("token", token);
        localStorage.setItem('userId', userIdState)
      }
    }, [token, initialToken]);


    const userIsLoggedIn = !!token;

    
    // console.log("userId", userIdState)

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
