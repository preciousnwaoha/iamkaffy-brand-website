import React from "react";
import classes from "./ContactLanding.module.css";
import ContactOption from "./ContactOption";

const DEFAULT_OPTIONS = [
  {
    id: "copt1",
    optionText: "Business",
    linkText: "Connect",
    linkURL: "/contact/#contact-2",
  },
  {
    id: "copt2",
    optionText: "Management",
    linkURL: "/contact/#contact-2",
  },
  {
    id: "copt3",
    optionText: "Partneship",
    linkURL: "/contact/#contact-2",
  },
  {
    id: "copt4",
    optionText: "Speaking Engagements",
    linkURL: "/contact/#contact-2",
  },
  {
    id: "copt5",
    optionText: "For Fans",
    linkURL: "/contact/#contact-1",
  },
];

const ContactLanding = () => {
  return (
    <div className={classes["contact-landing"]}>
      <div className={classes["cut-div"]}></div>
      <div className={classes["title-wrapper"]}>
        <h1>Would Love to Hear From You</h1>
        <h3>Connect to kaffy for any of these...</h3>
      </div>
      <div className={classes["contact-options-wrapper"]}>
        {DEFAULT_OPTIONS.map((option) => (
          <ContactOption
            key={option.id}
            optionText={option.optionText}
            linkURL={option.linkURL}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactLanding;
