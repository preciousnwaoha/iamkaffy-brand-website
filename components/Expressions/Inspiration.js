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
        imgPath="/images/kaffy-photo-4.jpg"
        imgW="640"
        imgH="517"
        name="CNN"
        description="Featured on News Channel CNN"
        featuredLink={"https://www.instagram.com/reel/CI_HfTXBwEv/?utm_source=ig_web_copy_link"}
        className={classes["cnn-feature"]}
      />
    </div>
  );
};

export default Inspiration;
