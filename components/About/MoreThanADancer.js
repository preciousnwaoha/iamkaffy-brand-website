import React from "react";
import Image from "next/image";
import classes from "./MoreThanADancer.module.css";

const DEFAULT_MTAD_DATA = [
  {
    id: "mtad1",
    imgpath: "/images/orange1.JPEG",
    imgw: "2299",
    imgh: "3218",
    title: "Creative",
    description:
      "Lays out the characters of horizontal scripts naturally (upright), as well as the glyphs for vertical scripts",
  },
  {
    id: "mtad2",
    imgpath: "/images/orange2.JPEG",
    title: "Entrepreneur",
    imgw: "2299",
    imgh: "3218",
    description:
      "Lays out the characters of horizontal scripts naturally (upright), as well as the glyphs for vertical scripts",
  },
  {
    id: "mtad3",
    imgpath: "/images/orange3.JPEG",
    title: "Coach",
    imgw: "2299",
    imgh: "3218",
    description:
      "Lays out the characters of horizontal scripts naturally (upright), as well as the glyphs for vertical scripts",
  },
  {
    id: "mtad4",
    imgpath: "/images/orange4.JPEG",
    imgw: "2299",
    imgh: "3218",
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

const MoreThanADancer = () => {

  

  return (
    <div className={classes.more}>
      <h2 className={classes["more-title"]}>More Than A Dancer</h2>
      <div className={classes["more-content"]}>
      <div className={classes["title-2-wrapper"]}>
          <h4 className={classes["title-2"]}>
            More Than A Dancer
          </h4>
        </div>
        <div className={classes["more-show"]}>
          {DEFAULT_MTAD_DATA.map((item) => (
            <div key={item.id} className={classes["more-show-inner"]}>
              <div className={classes["more-inner-image-wrapper"]}>
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

             <div className={classes["more-show-inner-text"]}>
               <h3>{item.title}</h3>
              <p>{item.description}</p>
             </div>

              
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default MoreThanADancer;
