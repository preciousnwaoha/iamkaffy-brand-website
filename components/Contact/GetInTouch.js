import React from "react";
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone, faLocation } from "@fortawesome/free-solid-svg-icons";
import UIBigTitle from "../UI/UIBigTitle";
import classes from "./GetInTouch.module.css";




const GetInTouch = ({data}) => {
  const { email, address, phones } = data[0]
  return (
    <div className={classes["get-in-touch"]} id="contact-2">
      <div className={classes["curve-div"]}>
       
      </div>
      <div className={classes["image-wrapper"]}>
            <div className={classes["image-wrapper-inner"]}>
          <Image src="/images/get-in-touch.jpg" alt="Get In touch with Kaffy the dancer" width={"400px"} height={"400px"} layout="responsive" />
        </div>
        </div>
        
      <UIBigTitle titleText={"Get In Touch"} className={classes.title} />
      <div className={classes["GIT-text-wrapper"]}>
        <p className={classes["GIT-text"]}>
          This is the get in touch cool message space
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