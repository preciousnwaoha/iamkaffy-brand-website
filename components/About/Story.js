import React, { useState } from "react";
import Image from "next/image";
import Button from "../UI/Button";
import Scroll from "../UI/Scroll";
import classes from "./Story.module.css";
import UIBigTitle from "../UI/UIBigTitle";
import UITitle from "../UI/UITitle";

const Story = () => {
  const [showingMore, setShowingMore] = useState(false);

  const readMoreHandler = () => {
    setShowingMore((prevState) => {
      return !prevState
    });
  };

  return (
    <div className={classes.story}>
      <UIBigTitle titleText={"Kaffy's Story"} className={classes["story-title"]} />
      <div className={classes["story-content"]}>
        <div className={classes["story-image-case"]}>
          <Image
            src="/images/orange1.JPEG"
            alt="About Kaffy"
            width="2299"
            height="3218"
            layout="responsive"
            className={classes.image}
          />
          <div className={classes["story-image-grid"]}>
            <div
              className={`${
                classes["grid-item"] +
                " " +
                classes["grid-col-span-1"] +
                " " +
                classes["grid-row-span-2"]
              }`}
            ></div>
            <div
              className={`${
                classes["grid-item"] +
                " " +
                classes["grid-col-span-2"] +
                " " +
                classes["grid-row-span-2"]
              }`}
            ></div>
            <div
              className={`${
                classes["grid-item"] +
                " " +
                classes["grid-col-span-2"] +
                " " +
                classes["grid-row-span-4"]
              }`}
            ></div>
            <div
              className={`${
                classes["grid-item"] +
                " " +
                classes["grid-col-span-2"] +
                " " +
                classes["grid-row-span-2"]
              }`}
            ></div>
            <div
              className={`${
                classes["grid-item"] +
                " " +
                classes["grid-col-span-1"] +
                " " +
                classes["grid-row-span-4"]
              }`}
            ></div>

            <div
              className={`${
                classes["grid-item"] +
                " " +
                classes["grid-col-span-3"] +
                " " +
                classes["grid-row-span-3"]
              }`}
            ></div>
            <div
              className={`${
                classes["grid-item"] +
                " " +
                classes["grid-col-span-2"] +
                " " +
                classes["grid-row-span-4"]
              }`}
            ></div>
            <div
              className={`${
                classes["grid-item"] +
                " " +
                classes["grid-col-span-2"] +
                " " +
                classes["grid-row-span-2"]
              }`}
            ></div>
            <div
              className={`${
                classes["grid-item"] +
                " " +
                classes["grid-col-span-1"] +
                " " +
                classes["grid-row-span-2"]
              }`}
            ></div>

            <div
              className={`${
                classes["grid-item"] +
                " " +
                classes["grid-col-span-1"] +
                " " +
                classes["grid-row-span-2"]
              }`}
            ></div>
            <div
              className={`${
                classes["grid-item"] +
                " " +
                classes["grid-col-span-2"] +
                " " +
                classes["grid-row-span-3"]
              }`}
            ></div>
            <div
              className={`${
                classes["grid-item"] +
                " " +
                classes["grid-col-span-2"] +
                " " +
                classes["grid-row-span-2"]
              }`}
            ></div>
            <div
              className={`${
                classes["grid-item"] +
                " " +
                classes["grid-col-span-2"] +
                " " +
                classes["grid-row-span-1"]
              }`}
            ></div>
            <div
              className={`${
                classes["grid-item"] +
                " " +
                classes["grid-col-span-1"] +
                " " +
                classes["grid-row-span-1"]
              }`}
            ></div>
            <div
              className={`${
                classes["grid-item"] +
                " " +
                classes["grid-col-span-1"] +
                " " +
                classes["grid-row-span-1"]
              }`}
            ></div>
            <div
              className={`${
                classes["grid-item"] +
                " " +
                classes["grid-col-span-1"] +
                " " +
                classes["grid-row-span-1"]
              }`}
            ></div>
            <div
              className={`${
                classes["grid-item"] +
                " " +
                classes["grid-col-span-2"] +
                " " +
                classes["grid-row-span-1"]
              }`}
            ></div>
          </div>
        </div>
        <div className={classes["story-text"]}>
          <UITitle titleText={"A Brief Inspirational Synopsis of Kaffy’s Life"} className={classes["sub-title"]} />
          <div className={"story-text-shown"}>
            <p>
              The Self-taught Dance Queen rose, to a World Guinness Record
              Breaker and choreographing hip-hop on MTV Stage; authoring a
              best-selling memoir,books, training over a thousand 1,000 dancers
              & celebrities, featuring on CNN, and to founding a fitness
              companyies.
            </p>
            <p>
              Kaffy Shafau is the perfect example of never stop, never settle,
              and is proof that the human potential is limitless.
            </p>
            <p>
              Kaffy Shafau popularly known as <b>Kaffy</b>, is a renown
              award-winning dancer, business magnate, and true inspiration to
              individuals across the world.
            </p>
            <p>
              <b>Nigerian-born and raised</b>, Kaffy had a dream just like
              every child of becoming an Aeronautical Engineer, until she
              discovered her passion for dance. Against all odds and opposition
              from her loved ones, she successfully pioneered the African dance
              industry and started a revolution to inspire and empower
              individuals
               
            </p>
            <p>
              In 2006, she broke a <b>World Guinness Record</b> for the longest dance
              party with a record time of 55hrs 40 minutes. This singular feat
              was the game-changer that carved her unique journey, brought her
              to the limelight, and earned her a seat amongst iconic
              entertainment in Africa. <b>...</b>
            </p>
          </div>
          {showingMore && (
            <div className={classes["story-text-hidden"]}>
              
              <p>
                Her reach is felt worldwide with over <b>2 million followers</b> across
                social media. Her iconic choreography is synonymous with passion
                and authenticity and widely accepted by individuals across
                different age groups, races, and colors.
              </p>
              <p>
                She has worked with international A-list artistes including{" "}
                <b>
                  Davido, PSsquare, 2Face, Tiwa Savage, Kelly Rowland, and Banky
                  W
                </b>{" "}
                on numerous dance performances and choreography for music
                productions. Some of her producing credits across TV,
                Productions and Events include Love like a Movie with Kim
                Kardashian(2013), Kelly Rowland(2014) and Ciara(2016), MTV Base
                Awards, Hip-Hop World Award, One African Music Fest (Dubai,
                Houston, New York), V-Mobile Basketball Championship, Big
                Brother(South Africa & Nigeria), MTN Project Fame Seasons 3 - 7
                (Performance Instructor), and Malta Guinness Street Dance.
              </p>

              <p>
                As <b>Africa’s Foremost Dance Queen</b>, Kaffy continues to be
                celebrated and has been awarded with several accolades and
                recognitions for masterful performances and contributions to the
                industry over the years. Her Award Walls include The
                Inspirational Lady in the Creative Industry Award, Tribhal Women
                of the Year Awards: Women of The Year in Entertainment (2018) to
                mention a few. Recently, she received an <b>honorary doctorate</b> from
                Escae Benin University in recognition as a ‘pioneer in the
                business of dance in Africa’.
              </p>
            </div>
          )}

          <Button className={classes["story-btn"]} clickAction={readMoreHandler}>
            {showingMore ? "SHOW LESS" : "READ MORE"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Story;
