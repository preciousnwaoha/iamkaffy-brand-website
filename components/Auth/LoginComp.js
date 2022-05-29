import React, { useState, useContext } from "react";
// import { useRouter } from 'next/router';
import Link from "next/link";
import classes from "./LoginComp.module.css";
import AuthContext from "../../context/auth-context";

const passChecker = /[\+\*/\\!?]/;
const emailRegex =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const LoginComp = () => {
    // const router = useRouter();
    const authCtx = useContext(AuthContext)

  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // values state defs
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  // values validity state defs

  // touched state defs
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);

  const enteredEmailIsValid = emailRegex.test(enteredEmail);
  const enteredPasswordIsValid =
    enteredPassword.trim().length >= 8 && !passChecker.test(enteredPassword);

  let formIsValid = false;

  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailInputBlurHandler = (event) => {
    setEmailIsTouched(true);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const passwordInputBlurHandler = (event) => {
    setPasswordIsTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setEmailIsTouched(true);
    setPasswordIsTouched(true);

    if (!enteredEmailIsValid) {
      return;
    }

    if (!enteredPasswordIsValid) {
      return;
    }

    setIsLoading(true)

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnj2w_rt19ZcaC5erHb7KKbbEp9B8pCHc",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then( res => {
      setIsLoading(false);
      if (res.ok) {
        setAuthError("")
        return res.json();
      } else {
        return res.json().then((data) => {
          // show an error modal
          let errorMessage = "Authentication failed";
          if (data && data.error && data.error.message) {
            if (data.error.message === "EMAIL_EXISTS") {
              errorMessage = "An account with this email already exists";
            } else {
              errorMessage = data.error.message;
            }
          }
          
          throw new Error(errorMessage);
        });
      }
    }).then( data => {
        console.log("login", data)
        const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000))
        authCtx.login(data.idToken, expirationTime.toISOString(), data.localId)

    }).catch(err => {
        setAuthError(err.message);
    });

    // setEnteredEmail("");
    // setEnteredPassword("");

    // setEmailIsTouched(false);
    // setPasswordIsTouched(false);
  };

  return (
    <div className={classes.login}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {/* {emailInputIsInvalid && (
          <p className={classes.error}>enter a valid email address</p>
        )} */}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={passwordInputChangeHandler}
          onBlur={passwordInputBlurHandler}
        />

        {!isLoading && (
          <button disabled={!formIsValid} type="submit">
            Login
          </button>
        )}
        {isLoading && <p className={classes.loading}>In a sec...</p>}
      </form>
      {authError && <p className={classes.error}>{authError}</p>}

      
    </div>
  );
};

export default LoginComp;
