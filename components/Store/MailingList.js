import React from "react";
import Button from "../UI/Button";
import classes from "./MailingList.module.css";

const MailingList = () => {
    const submitHanlder = () => {
        console.log("mailing list submited")
    }

  return (
    <div className={classes["mailing-list"]}>
      <div>
      <h3>Join kaffy&apos;s mailing list</h3>
      <form className={classes["mailing-list-form"]} onSubmit={submitHanlder}>
        <label htmlFor="email-list-email">Email</label>
        <input id="email-list-id" type="email" placeholder="Enter email" />
        <button type="submit">
            &gt;
        </button>
      </form>
      </div>
      
    </div>
  );
};

export default MailingList;
