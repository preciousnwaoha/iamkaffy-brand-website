import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faPhone,
  faHome,
  faLocation,
  faTag,
  faAddressCard,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./ContactInfoSummary.module.css";

const ContactInfoSummary = ({ contactInfo, onToggleEdit }) => {
  const {
    firstName,
    lastName,
    contactEmail,
    address,
    city,
    state,
    country,
    phone,
    zipCode,
    validity,
  } = contactInfo;

  const addCSIHandler = () => {
    onToggleEdit();
  };

  return (
    <div className={classes["contact-info"]}>
      <h3>Contact and Shipping Details</h3>
      {!validity && (
        <div className={classes.add}>
          <button className={classes["add-btn"]} onClick={addCSIHandler}>
            Add Shipping Address
            <FontAwesomeIcon icon={faPlus} className={classes["add-icon"]} />
          </button>
        </div>
      )}

      {validity && (
        <>
          <div>
            <FontAwesomeIcon icon={faTag} className={classes.icon} />
            <p className={classes.name}> {`${firstName} ${lastName}`} </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faMessage} className={classes.icon} />
            <p className={classes.email}>{contactEmail}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faHome} className={classes.icon} />
            <p className={classes.address}>{address}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faLocation} className={classes.icon} />
            <p className={classes.location}>
              {`${zipCode ? "ZIP/Postal Code - [" + zipCode + "] " : ""}${city ? city + ", " : ""}${
                state ? state + ", " : ""
              }${country}`}
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faPhone} className={classes.icon} />
            <p className={classes.phone}>{phone}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactInfoSummary;
