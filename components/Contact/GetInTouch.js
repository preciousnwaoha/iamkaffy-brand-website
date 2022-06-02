import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone, faLocation } from "@fortawesome/free-solid-svg-icons";
import UIBigTitle from "../UI/UIBigTitle";
import classes from "./GetInTouch.module.css";
import Effect1 from "../UI/Effects/Effect1";




const GetInTouch = ({data}) => {
  const GITRef = useRef()

  const { email, address, phones } = data[0]
  return (
    <div className={`${classes["get-in-touch"]} contact-1`} ref={GITRef}>
      <Effect1 className={classes["effect-item"]} />
      <div className={classes["bg-div"]}>
       
      </div>
      {/* <div className={classes["image-wrapper"]}>
            
        </div> */}
        
      <UIBigTitle titleText={"Get In Touch"} className={classes.title} />
      <div className={classes["GIT-text-wrapper"]}>
        <p className={classes["GIT-text"]}>
          you connect to kaffy from here
        </p>
        <p className={classes["GIT-email"]}>
        <FontAwesomeIcon
            icon={faMessage}
            style={{ fontSize: "1rem" }}
            className={classes["GIT-icon"]}
          ></FontAwesomeIcon>
          {email}</p>
        {phones.map((phone) => (
          <p
            key={`phone${phones.indexOf(phone)}`}
            className={classes["GIT-phone"]}
          >
            <FontAwesomeIcon
            icon={faPhone}
            style={{ fontSize: "1rem" }}
            className={classes["GIT-icon"]}
          ></FontAwesomeIcon>
            {phone}
          </p>
        ))}

        {address && <p className={classes["GIT-address"]}>
        <FontAwesomeIcon
            icon={faLocation}
            style={{ fontSize: "1rem" }}
            className={classes["GIT-icon"]}
          ></FontAwesomeIcon>{address}</p>}
      </div>
    </div>
  );
};

export default GetInTouch;
