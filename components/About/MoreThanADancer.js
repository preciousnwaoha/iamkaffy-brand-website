import React from "react";
import Image from "next/image";
import classes from "./MoreThanADancer.module.css";
import UIBigTitle from "../UI/UIBigTitle";
import Effect1 from "../UI/Effects/Effect1";

const DEFAULT_MTAD_DATA = [
  {
    id: "mtad1",
    imgpath: "/images/kaffy-photo-11.jpg",
    imgw: "400",
    imgh: "324",
    title: "Creative",
    description:
      "Lays out the characters of horizontal scripts naturally (upright), as well as the glyphs for vertical scripts",
  },
  {
    id: "mtad2",
    imgpath: "/images/orange9.JPEG",
    title: "Entrepreneur",
    imgw: "2299",
    imgh: "3128",
    description:
      "Lays out the characters of horizontal scripts naturally (upright), as well as the glyphs for vertical scripts",
  },
  {
    id: "mtad3",
    imgpath: "/images/kaffy-photo-6.webp",
    title: "Coach",
    imgw: "768",
    imgh: "768",
    description:
      "Lays out the characters of horizontal scripts naturally (upright), as well as the glyphs for vertical scripts",
  },
  {
    id: "mtad4",
    imgpath: "/images/kaffy-photo-15.JPEG",
    imgw: "2800",
    imgh: "2240",
    title: "Influencer",
    description:
      "Lays out the characters of horizontal scripts naturally (upright), as well as the glyphs for vertical scripts",
  },
  // {
  //   id: "mtad4",
  //   imgpath: "/images/orange4.JPEG",
  //   imgw: "2299",
  //   imgh: "3218",
  //   title: "Creative",
  //   description:
  //     "Lays out the characters of horizontal scripts naturally (upright), as well as the glyphs for vertical scripts",
  // },
];
// <Effect1 className={classes["effect-item-1"]}/>
const MoreThanADancer = () => {
  return (
    <div className={classes.more}>
    <Effect1 className={classes["effect-item-2"]}/>
      <UIBigTitle
        titleText={"More Than A Dancer"}
        className={classes["more-title"]}
      />
      <div className={classes["more-content"]}>
        {DEFAULT_MTAD_DATA.map((item) => (
          <div key={item.id} className={classes["more-content-inner"]}>
            <div className={classes["more-content-inner-image-wrapper"]}>
              <Image
                priority
                src={item.imgpath}
                className={classes.fader}
                alt={`${item.title} side of kaffy`}
                width={item.imgw}
                height={item.imgh}
                layout="responsive"
              />
            </div>

            <div className={classes["more-content-inner-text"]}>
              <h3>{item.title}</h3>
              {/* <p>{item.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreThanADancer;
