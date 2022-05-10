import React, { useState, useContext } from "react";
// import { useRouter } from 'next/router';
import Link from "next/link";
import classes from "./CreateAccountComp.module.css";
import AuthContext from "../../context/auth-context";
import { db } from "../../firebase"
import { collection, doc, setDoc } from "firebase/firestore";



const passChecker = /[\+\*/\\!?]/;
const emailRegex =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const CreateAccountComp = () => {
    // const router = useRouter();
    const authCtx = useContext(AuthContext)

    // server states
    const [authError, setAuthError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

  // values state defs
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredCPassword, setEnteredCPassword] = useState("");

  // values validity state defs

  // touched state defs
  const [firstNameIsTouched, setFirstNameIsTouched] = useState(false);
  const [lastNameIsTouched, setLastNameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const [cPasswordIsTouched, setCPasswordIsTouched] = useState(false);

  const enteredFistNameIsValid = enteredFirstName.trim() !== "";
  const enteredLastNameIsValid = enteredLastName.trim() !== "";
  const enteredEmailIsValid = emailRegex.test(enteredEmail);
  const enteredPasswordIsValid =
    enteredPassword.trim().length >= 8 && !passChecker.test(enteredPassword);
  const passwordMatch = enteredPassword === enteredCPassword;

  // invalid values defs
  const firstNameInputIsInvalid = !enteredFistNameIsValid && firstNameIsTouched;
  const lastNameInputIsInvalid = !enteredLastNameIsValid && lastNameIsTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && emailIsTouched;
  const passwordInputIsInvalid = !enteredPasswordIsValid && passwordIsTouched;
  const passwordMatchIsInvalid =
    !passwordMatch && (passwordIsTouched || cPasswordIsTouched);

  let formIsValid = false;

  if (
    enteredFistNameIsValid &&
    enteredLastNameIsValid &&
    enteredPasswordIsValid &&
    enteredEmailIsValid &&
    passwordMatch
  ) {
    formIsValid = true;
  }

  const firstNameInputChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const firstNameInputBlurHandler = (event) => {
    setFirstNameIsTouched(true);
  };

  const lastNameInputChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const lastNameInputBlurHandler = (event) => {
    setLastNameIsTouched(true);
  };

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

  const cPasswordInputChangeHandler = (event) => {
    setEnteredCPassword(event.target.value);
  };
  const cPasswordInputBlurHandler = (event) => {
    setCPasswordIsTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setEmailIsTouched(true);
    setPasswordIsTouched(true);
    setFirstNameIsTouched(true);
    setLastNameIsTouched(true);
    setCPasswordIsTouched(true);

    if (!enteredFistNameIsValid) {
      return;
    }

    if (!enteredLastNameIsValid) {
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }

    if (!passwordMatch) {
      return;
    }

    if (!enteredPasswordIsValid) {
      return;
    }

    setIsLoading(true)

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnj2w_rt19ZcaC5erHb7KKbbEp9B8pCHc",
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
        console.log("create", data)
        
        const userData = {
          firstName: enteredFirstName,
          lastName: enteredLastName,
          email: data.email,
          contactShippingInfo: {
            firstName: '',
            lastName: '',
            country: '',
            state: '',
            city: '',
            address: '',
            zipCode: '',
            phone: '',
            contactEmail: data.email,
            validity: false,
          },
          viewedItems: [],
          boughtItems: [],
          cart: {
            items: [],
            subtotal: 0,
          }
        }
        const userRef = doc(db, 'users', data.localId)
        setDoc(userRef, userData)

        const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000))
        authCtx.login(data.idToken, expirationTime.toISOString(), data.localId)
        // router.push('/store')
      }).catch(err => {
          setAuthError(err.message);
      });

    // setEnteredFirstName("");
    // setEnteredLastName("");
    // setEnteredEmail("");
    // setEnteredPassword("");
    // setEnteredCPassword("");

    // setFirstNameIsTouched(false);
    // setLastNameIsTouched(false);
    // setEmailIsTouched(false);
    // setPasswordIsTouched(false);
    // setCPasswordIsTouched(false);
  };

  if (authCtx.isLoggedIn) {
    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>You&apos;re logged In</h1>
        </div>
    )
}

  return (
    <div className={classes["create-acc"]}>
      <h1>Create Account</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">First Name</label>
        <input
          type="text"
          id="firstname"
          placeholder="First Name"
          onChange={firstNameInputChangeHandler}
          onBlur={firstNameInputBlurHandler}
        />
        {firstNameInputIsInvalid && (
          <p className={classes.error}>first name field can not be empty</p>
        )}
        <label htmlFor="email">Last Name</label>
        <input
          type="text"
          id="lastname"
          placeholder="Last Name"
          onChange={lastNameInputChangeHandler}
          onBlur={lastNameInputBlurHandler}
        />
        {lastNameInputIsInvalid && (
          <p className={classes.error}>last name field cannot be empty</p>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className={classes.error}>enter a valid email address</p>
        )}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={passwordInputChangeHandler}
          onBlur={passwordInputBlurHandler}
        />

        <label htmlFor="cpassword">Confirm Password</label>
        <input
          type="password"
          id="cpassword"
          placeholder="Confirm Password"
          onChange={cPasswordInputChangeHandler}
          onBlur={cPasswordInputBlurHandler}
        />
        {passwordMatchIsInvalid && (
          <p className={classes.error}>comfirm password does not match</p>
        )}
        {passwordInputIsInvalid && (
          <p className={classes.error}>
            password must be 8 characters or more and not contain [+\/()!?*]
          </p>
        )}
        {!isLoading && <button disabled={!formIsValid} type="submit">
          Create
        </button>}
        {isLoading && <p className={classes.loading}>In a sec...</p>}
      </form>
     {authError && <p className={classes.error}>{authError}</p>}
     
    
    </div>
  );
};

export default CreateAccountComp;
