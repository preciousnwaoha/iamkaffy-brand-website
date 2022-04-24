import React from "react";
import Image from "next/image";
import classes from "./Inspiration.module.css";
import Featured from "./Featured";
import Title from "./Title";

const Inspiration = () => {
  return (
    <div className={classes.inspire}>
      <Title className={classes["inspire-title"]}>
        <h2>Inspiration</h2>
      </Title>
      <div className={classes["text-wrapper"]}>
        <p>
          Based on her consistent and unique feats in the dance industry over
          the years, Kaffy has won her way into the hearts of her fans across
          several demographics - from the Gen-Z, Millennials, and even to the
          Baby Boomers. She is one personality that fits, is well-known, and can
          interact with individuals across various age groups.
        </p>
        <p>
          With her trans-generational influence and appeal, she continues to
          wield her story and platforms as an avenue for mind transformation and
          social reformation. Over the years, she has partnered with health
          organizations, educational institutions, youth groups, communities,
          and brands through several initiatives, some of which include
          DanceBoss Challenge, etc to showcase African talents, train and mentor
          dancers, provide access to funding, etc.
        </p>
        <p>
          She has also spoken at several events locally and globally, been
          featured as a guest judge for dance competitions, she has hosted
          industry conferences, and has made special guest appearances at live
          shows, and events organised by the government, brands, and
          non-governmental organisations. She continues to use her passion and
          voice to contribute to societal development.
        </p>
      </div>
      <Featured 
        img="/images/orange9.JPEG"
        name="CNN"
        title={"Nigerian choreographer is all about health"}
        description="Kaffy has brought up some of the best dancers in Nigeria and now she's giving back to her community through a healthcare partnership."
        featuredLink={"https://edition.cnn.com/videos/tv/2020/12/18/african-voices-choreographers-kaffy-tileh-pacbro-spc-intl.cnn"}
       />
    </div>
  );
};

export default Inspiration;
