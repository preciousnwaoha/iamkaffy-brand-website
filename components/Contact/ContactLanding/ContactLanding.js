import React from "react";
import classes from "./ContactLanding.module.css";
import ContactOption from "./ContactOption";

const DEFAULT_OPTIONS = [
  {
    id: "copt1",
    optionText: "Business",
    linkText: "Connect",
  },
  {
    id: "copt2",
    optionText: "Management",
    linkText: "Connect",
  },
  {
    id: "copt3",
    optionText: "Partneship",
    linkText: "Connect",
  },
  {
    id: "copt4",
    optionText: "Speaking Engagements",
    linkText: "Connect",
  },
  {
    id: "copt5",
    optionText: "For Fans",
    linkText: "Connect",
  },
];

const ContactLanding = () => {
  return (
    <div className={classes["contact-landing"]}>
      <div className={classes["cut-div"]}></div>
      <div className={classes["title-wrapper"]}>
        <h1>Would Love to Hear From You</h1>
        <h3>Connect to kaffy thwought these mediums</h3>
      </div>
      <div className={classes["contact-options-wrapper"]}>
        {DEFAULT_OPTIONS.map((option) => (
          <ContactOption
            key={option.id}
            optionText={option.optionText}
            linkText={option.linkText}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactLanding;
