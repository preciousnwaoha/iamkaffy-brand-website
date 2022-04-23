import React from "react";
import Image from "next/image";
import Scroll from "./UI/Scroll";
import classes from "./Landing.module.css";

const LANDDING_IMAGES = [
  {
    id: "landimg1",
    path: "/images/kaffyballet1.jpg",
    width: "406",
    height: "612",
  },
];

const Landing = () => {
  return (
    <div className={classes.landing}>
      {/* <div className={classes["image-case"]}>
        {LANDDING_IMAGES.map((image) => (
          <Image
            key={image.id}
            src={image.path}
            alt="Kaffy Dance"
            width={image.width}
            height={image.height}
            layout="responsive"
            priority={true}
            className={classes.image}
          />
        ))}
      </div> */}
      <div className={classes["hero-bg"]}>
        
      </div>
      <div className={classes.circle}></div>
      <div className={classes["landing-text-side"]}>
        <div className={classes["hero-text"]}>
          <h1 className={classes.tagline}>
            I EXPOLORE MY <br />
            <span>FULL HUMANITY</span>
            <br /> - Through Dance
          </h1>
          <h3 className={classes["dare-dance-live"]}>DARE. DANCE. LIVE</h3>
          <h2 className={classes["sub-tagline"]}>
            LIVE PURPOSEFULLY <span>THROUGH</span> <span>WITH</span> DANCE
          </h2>
        </div>
        <div className={classes["p-tags"]}>
          <p>
            <b>Hello! I am Kaffy - I am MORE THAN A DANCER.</b> A multi-faceted
            personality & ardent believer that you can rise above status-quo, be
            your own celebrity (the person you most want to be) and do more for
            society.
          </p>
          <p className={classes["p-yellow"]}>
            I believe dance is more than movements – iIt is a tool to reform and
            activate the human minds for personal discovery, societal
            transformation and exploring humanity.
          </p>
          <p>
            You can BE and DO MORE – Just Dance. DANCE WITH ME – I am passionate
            about who you can truly become.
          </p>
        </div>
      </div>
      <div className={classes["record-image-side"]}>
        <div className={classes.record}>
          <h4>Africa’s Foremost Dance Queen, Kaffy Shafau making history…</h4>
          <p>
            A Guinness Book World record breaker with one of the most impressive
            dance and choreography careers of all times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
