import React from "react";
import Image from "next/image";
import classes from "./Landing.module.css";


const Landing = () => {

  return (
    <section className={classes.landing}>
      
      <div className={classes["hero-bg"]}>
        {/* <Image src={"/images/kaffy-culture-2.jpeg"} objectFit={"cover"} alt={"Kaffy official website with Kaffy the dancer"} priority width={"853"} height={"1280"} layout="responsive" /> */}
      </div>
      <div className={classes.circle}></div>
      <div className={classes["landing-text-side"]}>
        <div className={classes["hero-text"]}>
          <h1 className={classes.tagline}>
            I EXPLORE MY <br />
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
            I believe dance is more than movements – it is a tool to reform and
            activate the human minds for personal discovery, societal
            transformation and exploring humanity.
          </p>
          <p className={classes["p-last"]}>
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
    </section>
  );
};

export default Landing;
