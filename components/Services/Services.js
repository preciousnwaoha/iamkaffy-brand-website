import React from "react";
import Effect3 from "../UI/Effects/Effect3";
import UITitle from "../UI/UITitle";
import Service from "./Service";
import classes from "./Services.module.css";

const DEFAULT_SERVICES = [
  {
    id: "service1",
    name: "Creative Design",
    description: "Service Description in many many words",
  },
  {
    id: "service2",
    name: "Directing",
    description: "Service Description in many many words",
  },
  {
    id: "service3",
    name: "Choreography",
    description: "Service Description in many many words",
  },
  {
    id: "service4",
    name: "Performing Artiste",
    description: "Service Description in many many words",
  },
  {
    id: "service5",
    name: "Creative Consultation",
    description: "Service Description in many many words",
  },
  {
    id: "service6",
    name: "Custome Design",
    description: "Service Description in many many words",
  },
];

const Services = ({inHome=false}) => {
  return (
    <div className={classes.services}>
      <Effect3 className={classes["effect-item"]} />
      <UITitle titleText={"Her Range of Tunkey Services Include"} className={`${classes.title} ${inHome ? "" : classes["title-sm"]}`} />
      <ul className={classes["services-items-wrapper"]}>
        {DEFAULT_SERVICES.map((service) => (
          <Service key={service.id} name={service.name} />
        ))}
      </ul>
      <p className={classes["services-text"]}>
        Kaffy offers her clients the experience of being involved in her
        creative process as much (or as little) as they’d like to.
      </p>
    </div>
  );
};

export default Services;
