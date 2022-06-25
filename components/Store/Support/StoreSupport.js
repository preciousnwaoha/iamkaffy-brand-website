import React, { useEffect, useState } from "react";
import Link from "next/link";
import UIBigTitle from "../../UI/UIBigTitle";
import ContactForm from "../../Contact/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMessage } from "@fortawesome/free-solid-svg-icons";
import classes from "./StoreSupport.module.css";

const StoreSupport = () => {
  const [supportDetails, setSupportDetails] = useState({});

  useEffect(() => {
    const getSupportDetails = async () => {
      setSupportDetails({
        email: "ask@iamkaffy.com",
      });
    };

    getSupportDetails()
  });

  return (
    <div className={`${classes["store-support"]} store-support`}>
      {/* <Effect3 className={classes["effect-item"]} /> */}
      <div className={classes["store-support-inner"]}>
        <div className={classes["content-side"]}>
          <UIBigTitle
            titleText={"Kaffy Store Support"}
            className={classes.title}
          />
          <h4 className={classes["sub-title"]}>
            Contact Customer Service fro any Issues in Kaffy Store
          </h4>
          <ContactForm toEmail={supportDetails.email} />
        </div>

        <div className={classes["side"]}>

        <div className={classes["support-details"]}>
          <h5>Support Mediums</h5>
            <p className={classes["GIT-email"]}>
              <FontAwesomeIcon
                icon={faMessage}
                style={{ fontSize: "1rem" }}
                className={classes["GIT-icon"]}
              ></FontAwesomeIcon>
              {supportDetails.email}
            </p>
          </div>

          <Link href="/store">
            <a className={classes["explore"]}>
              <FontAwesomeIcon
                icon={faArrowRight}
                className={classes["explore-icon"]}
              />
              Explore Store
            </a>
          </Link>

          
        </div>
      </div>
    </div>
  );
};

export default StoreSupport;
