import React from "react";
import Effect3 from "../../UI/Effects/Effect3";
import Effect5 from "../../UI/Effects/Effect5";
import classes from "./ContactLanding.module.css";
import ContactOption from "./ContactOption";

const DEFAULT_OPTIONS = [
  {
    id: "copt1",
    optionText: "Business",
    linkText: "Connect",
    optionId: "contact-1",
  },
  {
    id: "copt2",
    optionText: "Management",
    optionId: "contact-1",
  },
  {
    id: "copt3",
    optionText: "Partneship",
    optionId: "contact-1",
  },
  {
    id: "copt4",
    optionText: "Speaking Engagements",
    optionId: "contact-1",
  },
  {
    id: "copt5",
    optionText: "Meesage Kaffy",
    optionId: "contact-2",
  },
];



const ContactLanding = () => {

  return (
    <div className={classes["contact-landing"]}>
      <Effect3 className={classes["effect-item-3"]} />
      <Effect5 className={classes["effect-item-5"]}/>
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
            optionId={option.optionId}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactLanding;
