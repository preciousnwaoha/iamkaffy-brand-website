import React from "react";
import Title from "./Title";
import Image from "next/image";
import classes from "./Business.module.css";
import Effect1 from "../UI/Effects/Effect1";

const Business = () => {
  return (
    <div className={classes.business}>
      <Effect1 className={classes["effect-item"]} />
      <Title>
        <h2>Business</h2>
      </Title>
      <div className={classes["business-content"]}>
        <p className={classes["subtitle"]}>
          I offer above-the-line marketing and influencer marketing services to
          brands and individuals. <span>Worked with top brands including Hennesy,
          Globacom, Tecno Mobile, Verve,</span> etc.
        </p>
        <div className={classes["business-image-div-split"]}>
          <div className={classes["split-image-wrapper"]}>
            <Image
              src={"/images/orange9.JPEG"}
              alt={"Kaffy Business Image"}
              width={"2500px"}
              height={"3125px"}
              layout="responsive"
              priority={true}
            />
          </div>
          <div className={classes["split-text-wrapper"]}>
          <p className={classes["split-text"]}>
          <span className={classes.quotes}>&ldquo;</span>I understand what the people want and leverage my superpower as a
            creative to curate compelling content, represent the brand in a
            manner that appeals to their market, and convert interaction to the
            bottom line. I pride myself on the badge ‘ First Female Nigerian
            Dancer to serve as Brand Ambassador/Influencer’ and continue to
            deliver sustainable value to my clients -both corporate and
            individuals.<span className={classes.quotes}>&rdquo;</span>
          </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Business;
