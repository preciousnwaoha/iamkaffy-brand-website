import React, { useState, useRef, useContext, useEffect } from "react";
import useInput from "../../../hooks/use-input";
import ContactShippingInfoContext from "../../../context/contact-shipping-info-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

import classes from "./SetContactAndShippingInfo.module.css";

const emailRegex =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const phoneRegex = /^\+([0-9]+)([0-9]{10})$/;

const COUNTRIES = CountryRegionData.map((c) => c[0]);

const SetContactAndShippingInfo = ({ onToggleEdit }) => {
  const contactShippingInfoCtx = useContext(ContactShippingInfoContext);

  const { contactInfo } = contactShippingInfoCtx;

  // const curValuesIsValid = contactInfo.validity;
  const curValuesIsValid = false;

  const [isLoading, setIsLoading] = useState(false);
  const [showInvalidForm, setShowInvalidForm] = useState(false);

  const {
    value: enteredFName,
    isValid: fNameIsValid,
    hasError: fNameHasError,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: fNameResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLName,
    isValid: lNameIsValid,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: lNameResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailResetHandler,
  } = useInput((value) => emailRegex.test(value));

  const {
    value: enteredPhone,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: phoneResetHandler,
  } = useInput((value) => value.trim().length > 8);

  const {
    value: enteredAddress,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: addressResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCity,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: cityResetHandler,
  } = useInput((value) => true);

  const {
    value: enteredCountry,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: countryResetHandler,
  } = useInput((value) => COUNTRIES.includes(value));

  const {
    value: enteredState,
    isValid: stateIsValid,
    hasError: stateHasError,
    valueChangeHandler: stateChangeHandler,
    inputBlurHandler: stateBlurHandler,
    reset: stateResetHandler,
  } = useInput((value) => value !== "" && value !== "State");

  const {
    value: enteredZipCode,
    isValid: zipCodeIsValid,
    hasError: zipCodeHasError,
    valueChangeHandler: zipCodeChangeHandler,
    inputBlurHandler: zipCodeBlurHandler,
    reset: zipCodeResetHandler,
  } = useInput((value) => value.trim().length <= 6);

  let formIsValid = false;

  if (
    fNameIsValid &&
    lNameIsValid &&
    emailIsValid &&
    phoneIsValid &&
    addressIsValid &&
    cityIsValid &&
    countryIsValid &&
    zipCodeIsValid &&
    stateIsValid
  ) {
    formIsValid = true;
  }

  if (curValuesIsValid) {
    formIsValid = true;
  }

  let formHasError = false;

  if (
    fNameHasError ||
    lNameHasError ||
    emailHasError ||
    phoneHasError ||
    addressHasError ||
    countryHasError ||
    stateHasError
  ) {
    formHasError = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    setIsLoading(true);

    if (!formIsValid || formHasError) {
      setIsLoading(false);
      return;
    }

    const newContactInfo = {
      firstName: enteredFName,
      lastName: enteredLName,
      contactEmail: enteredEmail,
      country: enteredCountry,
      phone: enteredPhone,
      address: enteredAddress,
      city: enteredCity,
      state: enteredState,
      validity: formIsValid,
    };

    contactShippingInfoCtx.updateContactInfo(newContactInfo);

    fNameResetHandler();
    lNameResetHandler();
    emailResetHandler();
    phoneResetHandler();
    addressResetHandler();
    countryResetHandler();
    stateResetHandler();
    cityResetHandler();
    zipCodeResetHandler();
    setIsLoading(false);
    onToggleEdit();
  };

  return (
    <div className={classes["set-contact-info"]}>
      <div className={classes.cancel} onClick={() => onToggleEdit()}>
        <FontAwesomeIcon icon={faXmark} className={classes["cancel-icon"]} />
      </div>
      <h4>{`${contactInfo.validity ? "Update Info" : "Add Info"}`}</h4>
      <form onSubmit={submitHandler}>
        <div className={classes["contact-info"]}>
          <h3 className={classes["contact-info-title"]}>Contact Information</h3>
          <label htmlFor="email"></label>
          <input
            id="email"
            type="email"
            placeholder="Contact Email"
            defaultValue={curValuesIsValid ? contactInfo.contactEmail : ""}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className={classes.error}>please enter a valid email address</p>
          )}
          <label htmlFor="phone"> Phone</label>
          <input
            id="phone"
            type="text"
            placeholder="Phone"
            defaultValue={curValuesIsValid ? contactInfo.phone : ""}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
          />
          <p className={`${!phoneHasError ? classes["phone-instruct"] : classes["phone-error"]}`}>{'Example: +2349037583927 - starts by a \'+\', followed by the country code and the phone number without space or dash.'}</p>
          {phoneHasError && (
            <p className={classes.error}>please enter a valid phone number</p>
          )}
        </div>
        <div className={classes["shipping-address"]}>
          <h3 className={classes["shipping-address-title"]}>
            Shipping Address
          </h3>
          <div className={classes["first-last-name-wrapper"]}>
            <div>
              <label htmlFor="firstname">First Name </label>
              <input
                id="firstname"
                type="text"
                placeholder="First Name"
                defaultValue={curValuesIsValid ? contactInfo.firstName : ""}
                onChange={fNameChangeHandler}
                onBlur={fNameBlurHandler}
              />
              {fNameHasError && (
                <p className={classes.error}>first name cannot be empty</p>
              )}
            </div>

            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                id="lastname"
                type="text"
                placeholder="Last Name"
                defaultValue={curValuesIsValid ? contactInfo.lastName : ""}
                onChange={lNameChangeHandler}
                onBlur={lNameBlurHandler}
              />
              {lNameHasError && (
                <p className={classes.error}>last name cannot be empty</p>
              )}
            </div>
          </div>

          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            placeholder="Street Address"
            onChange={addressChangeHandler}
            defaultValue={curValuesIsValid ? contactInfo.address : ""}
            onBlur={addressBlurHandler}
          />
          {addressHasError && (
            <p className={classes.error}>please enter a your address</p>
          )}

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            placeholder="City"
            defaultValue={curValuesIsValid ? contactInfo.city : ""}
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
          />
          {cityHasError && (
            <p className={classes.error}>please enter your city</p>
          )}

          <CountryDropdown
            classes={classes["country-dropdown"]}
            showDefaultOption={true}
            defaultOptionLabel="Country"
            value={curValuesIsValid ? contactInfo.country : enteredCountry}
            onChange={(val, e) => countryChangeHandler(e)}
            onBlur={countryBlurHandler}
          />
          {countryHasError && (
            <p className={classes.error}>please enter your country</p>
          )}

          <div className={classes["state-zip-wrapper"]}>
            <RegionDropdown
              classes={classes["state-dropdown"]}
              showDefaultOption={true}
              defaultOptionLabel="State"
              country={enteredCountry}
              value={curValuesIsValid ? contactInfo.state : enteredState}
              onChange={(val, e) => stateChangeHandler(e)}
              onBlur={stateBlurHandler}
            />
            <label htmlFor="Country">ZIP or Postal Code</label>
            <input
              id="zip-code"
              type="text"
              placeholder="ZIP/Postal Code"
              defaultValue={curValuesIsValid ? contactInfo.zipCode : ""}
              onChange={zipCodeChangeHandler}
              onBlur={zipCodeBlurHandler}
            />
          </div>
          {stateHasError && !countryHasError && (
            <p className={classes.error}>please enter your pickup state</p>
          )}
          {zipCodeHasError && (
            <p className={classes.error}>
              that&apos;s an invalid zip/postal code
            </p>
          )}

          <div className={classes["update-info"]}>
            {!isLoading ? (
              <button
                type="submit"
                className={`${classes["update-info-btn"]} ${
                  !formIsValid ? classes["update-info-btn-disabled"] : ""
                }`}
              >
                {`${contactInfo.validity ? "Update" : "Add"} Contact & Shipping Info`}
              </button>
            ) : (
              <p className={classes.isloading}>In a sec...</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SetContactAndShippingInfo;
