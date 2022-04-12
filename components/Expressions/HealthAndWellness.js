import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImportantMessage from "../UI/ImportantMessage";
import classes from "./HealthAndWellness.module.css";

const HealthAndWellness = () => {
  return (
    <div className={classes.HAW}>
      {" "}
      {/* HAW - Health and Wellness */}
      <div className={classes.title}>
        <h2>Health & Wellness</h2>
        <h3>
          I strive to live in communities with stronger, healthier, and happier
          humans.
        </h3>
      </div>
      <h4 className={classes["sub-title"]}>
        Fitness is no longer a nice- to- have, but of utmost necessity for long
        and healthy living.{" "}
      </h4>
      <div className={classes["message-wrapper"]}>
        <div className={classes["message-item"]}>
          <div className={classes["message-item_image-wrapper"]}>
            <Image
              src="/images/fit-1.jpg"
              alt="Ijoda Fitness and Wellness by Kaffy"
              width="5568"
              height="3712"
              layout="responsive"
              className={classes["message-item_image"]}
            />
            <p className={classes["message-item_image-ref"]}>UNSPLASH</p>
          </div>
          <p className={classes["message-text"]}>
            Through{" "}
            <Link href={"/"}>
              <a className={classes["ijoda-link"]}>Ijoda Fitness & Wellness,</a>
            </Link>{" "}
            KaffyI creates fitness solutions that are customised and best suited
            for a wide range of clientelle. Whether you are trying to treat a
            health condition, improve body fitness & wellbeing, or experience
            soul therapy, Kaffy understands the art and science of fitness - and
            can work with you as a coach, instructor, and consultant.
          </p>
        </div>
        <div className={classes["message-item"]}>
        <p className={classes["message-text"]}>
            From A-List celebrities to women who desire to reconnect with their
            bodies, from High Networth Individuals NIs to middle-class working
            professionals, Kaffy works with individuals to improve their health
            - using dance as a tool for fitness and wellness
          </p>
          <div className={classes["message-item_image-wrapper"]}>
            <Image
              src="/images/fit-3.jpg"
              alt="Ijoda Fitness and Wellness by Kaffy"
              width="5760"
              height="3561"
              layout="responsive"
              className={classes["message-item_image"]}
            />
            <p className={classes["message-item_image-ref"]}>UNSPLASH</p>
          </div>
        </div>
      </div>
      <ImportantMessage classValue={classes["take-test-wrapper"]}>
        <p><span>Take This Text </span>to determine where to start your fitness journey.</p>
      </ImportantMessage>
    </div>
  );
};

export default HealthAndWellness;
