import React, { useState, useRef} from "react";
import Button from "../UI/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import classes from "./MailingList.module.css";
import { db } from '../../firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'

const mailingListCollectionRef = collection(db, "mailingList");

const emailRegex =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const MailingList = () => {
  
  const [emailIsValid, setEmailIsValid] = useState(true)
  const [isAlreadyInList, setIsAlreadyInList] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isAddedToMailingList, setIsAddedToMailingList] = useState(false)
  const emailRef = useRef()

 


    const submitHanlder = async (event) => {
      event.preventDefault();

      const enteredEmail = emailRef.current.value

      setIsLoading(true)

      if (!emailRegex.test(enteredEmail)) {
        setEmailIsValid(false)
        setIsLoading(false)
        return
      }

      setEmailIsValid(true)

      const mailingListData = await getDocs(mailingListCollectionRef);

      const mailingList = mailingListData.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      })


      const existingEmailIndex = mailingList.findIndex(doc => doc.email === enteredEmail)

      const isAlreadyInMailingList = existingEmailIndex > -1
      
      if (isAlreadyInMailingList) {
        setIsAlreadyInList(true)
      } else {
        setIsAlreadyInList(false)
        await addDoc(mailingListCollectionRef, { email: enteredEmail})
        setIsAddedToMailingList(true)
      }
      
      setIsLoading(false)
    }

  return (
    <div className={classes["mailing-list"]}>
      <div>
      <h3>Join kaffy&apos;s mailing list</h3>
      <form className={classes["mailing-list-form"]} onSubmit={submitHanlder}>
        <label htmlFor="email-list-email">Email</label>
        <input ref={emailRef} id="email-list-id" type="email" placeholder="Enter email"  />
        
        <button type="submit">
        <FontAwesomeIcon className={classes["submit-arrow"]} icon={faAngleRight} style={{fontSize: "1.125rem"}} />
        </button>
      </form>
      {(isAlreadyInList && !isLoading) && <p className={classes.error}>This email is already in Kaffy&apos;s mailing list!</p>}
        {(!emailIsValid && !isLoading) && <p className={classes.error}>Invalid email address</p>}
        {isLoading && <p className={classes.error}>In a sec...</p>}
        {isAddedToMailingList && <p className={classes.success}>You&apos;re now in kaffy&apos;s mailing list!</p>}
      </div>
      
    </div>
  );
};

export default MailingList;
