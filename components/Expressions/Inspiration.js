import React from "react";
import classes from "./Inspiration.module.css";
import Feature from "../Featured/Feature";
import Title from "./Title";

const Inspiration = ({featuredData}) => {

  const feature = featuredData[1]

  return (
    <div className={classes.inspire}>
      <Title className={classes["inspire-title"]}>
        <h2>Inspiration</h2>
      </Title>
      <div className={classes["text-wrapper"]}>
        <p>
          Based on her consistent and unique feats in the dance industry over
          the years, Kaffy has won her way into the hearts of her fans across
          several demographics - from the <span>Gen-Z, Millennials, and even to the
          Baby Boomers.</span> She is one personality that fits, is well-known, and can
          interact with individuals across various age groups.
        </p>
        <p>
          With her trans-generational influence and appeal, she continues to
          wield her story and platforms as an avenue for mind transformation and
          social reformation. Over the years, she has <span>partnered with health
          organizations, educational institutions, youth groups, communities,
          and brands</span> through several initiatives, some of which include
          DanceBoss Challenge, etc to showcase African talents, train and mentor
          dancers, provide access to funding, etc.
        </p>
        <p>
          She has also spoken at several events locally and globally, been
          featured as a guest judge for dance competitions, she has hosted
          industry conferences, and <span>has made special guest appearances</span> at live
          shows, and events organised by the government, brands, and
          non-governmental organisations. She continues to use her passion and
          voice to contribute to societal development.
        </p>
      </div>
      <Feature
        feature={feature}
      />
    </div>
  );
};

export default Inspiration;
