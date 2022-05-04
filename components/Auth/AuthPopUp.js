import React, { useState } from 'react'
import CreateAccountComp from './CreateAccountComp'
import classes from "./AuthPopUp.module.css"
import LoginComp from './LoginComp'

const AuthPopUp = ({ onExitAuthPopUp }) => {
  const [isLogIn, setIsLogIn] = useState(true)

  const exitPopUpHandler = () => {
    onExitAuthPopUp()
  }

  const toggleIsLogIn = () => {
    setIsLogIn((prevState) => {
      return !prevState
    })
  }

  return (
    <div className={classes['auth-pop-up']}>
      {!isLogIn && <CreateAccountComp />}
      {isLogIn && <LoginComp />}

      <p className={classes["return-to-store"]} onClick={toggleIsLogIn}>{isLogIn ? 'Don\'t have an account? Create' : 'Already have an account? Login'}</p>
      <div className={classes["exit"]} onClick={exitPopUpHandler}>
        &times;
      </div>
    </div>
  )
}

export default AuthPopUp