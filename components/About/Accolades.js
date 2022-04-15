import React from "react";
import Award from "./Award";
import UIBigTitle from "../UI/UIBigTitle";
import classes from "./Accolades.module.css";

const DEFAULT_AWARDS = [
  {
    id: "acco1",
    from: "AFRIMA",
    name: "",
    date: "",
    imgpath: "/images/awards/afrima_show.png",
    imgw: "371",
    imgh: "136",
  },
  {
    id: "acco2",
    from: "MTV Base",
    name: "",
    date: "",
    imgpath: "/images/awards/mtvbase_show.png",
    imgw: "1280",
    imgh: "343",
  },
  {
    id: "acco3",
    from: "Degree",
    name: "Doctorate",
    date: "",
    imgpath: "/images/awards/doctorate_show.webp",
    imgw: "790",
    imgh: "430",
  },
  {
    id: "acco4",
    from: "Headies",
    name: "Special Recognition Award",
    date: "2018",
    imgpath: "/images/awards/heades_show-1.jpg",
    imgw: "1290",
    imgh: "853",
  },
  {
    id: "acco5",
    from: "AFRIMA",
    name: "",
    date: "",
    imgpath: "/images/awards/afrima_show.png",
    imgw: "371",
    imgh: "136",
  },
  {
    id: "acco6",
    from: "MTV Base",
    name: "",
    date: "2018",
    imgpath: "/images/awards/mtvbase_show.png",
    imgw: "1280",
    imgh: "243",
  },
  {
    id: "acco7",
    from: "Tribal Women of the year Awards",
    name: "Women of the Year in Entertainment",
    date: "2018",
    imgpath: "/images/kaffy-culture-1.jpeg",
    imgw: "896",
    imgh: "505",
  },
  
  {
    id: "acco8",
    from: "Heades",
    name: "Special Recognition Award",
    date: "2018",
    imgpath: "/images/awards/heades_show-1.jpg",
    imgw: "1290",
    imgh: "853",
  },


  {
    id: "acco9",
    from: "Zenith Bank",
    name: "Hero Award for Excellence",
    date: "2018",
    imgpath: "/images/awards/zenith_show-1.jpg",
    imgw: "312",
    imgh: "162",
  },
  
  {
    id: "acco10",
    from: "MTV Base",
    name: "",
    date: "2018",
    imgpath: "/images/awards/mtvbase_show.png",
    imgw: "1280",
    imgh: "343",
  },

  {
    id: "acco11",
    from: "Tribal Women of the year Awards",
    name: "Women of the Year in Entertainment",
    date: "2018",
    imgpath: "/images/kaffy-culture-1.jpeg",
    imgw: "896",
    imgh: "505",
  },
  {
    id: "acco12",
    from: "Heades",
    name: "Special Recognition Award",
    date: "2018",
    imgpath: "/images/awards/heades_show-2.jpg",
    imgw: "780",
    imgh: "598",
  },
  
  {
    id: "acco13",
    from: "Degree",
    name: "Doctorate",
    date: "",
    imgpath: "/images/awards/doctorate_show.webp",
    imgw: "790",
    imgh: "430",
  },
  {
    id: "acco14",
    from: "MTV Base",
    name: "",
    date: "2018",
    imgpath: "/images/awards/mtvbase_show.png",
    imgw: "1280",
    imgh: "243",
  },
  {
    id: "acco15",
    from: "Tribal Women of the year Awards",
    name: "Women of the Year in Entertainment",
    date: "2018",
    imgpath: "/images/kaffy-culture-1.jpeg",
    imgw: "896",
    imgh: "505",
  },
  
  {
    id: "acco16",
    from: "Degree",
    name: "Doctorate",
    date: "",
    imgpath: "/images/awards/doctorate_show.webp",
    imgw: "790",
    imgh: "430",
  },
  {
    id: "acco17",
    from: "MTV Base",
    name: "",
    date: "2018",
    imgpath: "/images/awards/mtvbase_show.png",
    imgw: "1280",
    imgh: "243",
  },
  {
    id: "acco18",
    from: "Tribal Women of the year Awards",
    name: "Women of the Year in Entertainment",
    date: "2018",
    imgpath: "/images/kaffy-culture-1.jpeg",
    imgw: "896",
    imgh: "505",
  },
  {
    id: "acco19",
    from: "Degree",
    name: "Doctorate",
    date: "",
    imgpath: "/images/awards/doctorate_show.webp",
    imgw: "790",
    imgh: "430",
  },
  {
    id: "acco20",
    from: "MTV Base",
    name: "",
    date: "2018",
    imgpath: "/images/awards/mtvbase_show.png",
    imgw: "1280",
    imgh: "243",
  },
  {
    id: "acco21",
    from: "AFRIMA",
    name: "",
    date: "",
    imgpath: "/images/awards/afrima_show.png",
    imgw: "371",
    imgh: "136",
  },
  {
    id: "acco22",
    from: "MTV Base",
    name: "",
    date: "",
    imgpath: "/images/awards/mtvbase_show.png",
    imgw: "1280",
    imgh: "343",
  },
  {
    id: "acco23",
    from: "Degree",
    name: "Doctorate",
    date: "",
    imgpath: "/images/awards/doctorate_show.webp",
    imgw: "790",
    imgh: "430",
  },
  {
    id: "acco24",
    from: "Headies",
    name: "Special Recognition Award",
    date: "2018",
    imgpath: "/images/awards/heades_show-1.jpg",
    imgw: "1290",
    imgh: "853",
  },
  {
    id: "acco25",
    from: "AFRIMA",
    name: "",
    date: "",
    imgpath: "/images/awards/afrima_show.png",
    imgw: "371",
    imgh: "136",
  },
  {
    id: "acco26",
    from: "MTV Base",
    name: "",
    date: "2018",
    imgpath: "/images/awards/mtvbase_show.png",
    imgw: "1280",
    imgh: "243",
  },
  {
    id: "acco27",
    from: "Tribal Women of the year Awards",
    name: "Women of the Year in Entertainment",
    date: "2018",
    imgpath: "/images/kaffy-culture-1.jpeg",
    imgw: "896",
    imgh: "505",
  },
  
  {
    id: "acco28",
    from: "Heades",
    name: "Special Recognition Award",
    date: "2018",
    imgpath: "/images/awards/heades_show-1.jpg",
    imgw: "1290",
    imgh: "853",
  },


  {
    id: "acco29",
    from: "Zenith Bank",
    name: "Hero Award for Excellence",
    date: "2018",
    imgpath: "/images/awards/zenith_show-1.jpg",
    imgw: "312",
    imgh: "162",
  },
  
  {
    id: "acco30",
    from: "MTV Base",
    name: "",
    date: "2018",
    imgpath: "/images/awards/mtvbase_show.png",
    imgw: "1280",
    imgh: "343",
  },

  {
    id: "acco31",
    from: "Tribal Women of the year Awards",
    name: "Women of the Year in Entertainment",
    date: "2018",
    imgpath: "/images/kaffy-culture-1.jpeg",
    imgw: "896",
    imgh: "505",
  },
  {
    id: "acco32",
    from: "Heades",
    name: "Special Recognition Award",
    date: "2018",
    imgpath: "/images/awards/heades_show-2.jpg",
    imgw: "780",
    imgh: "598",
  },
  
  {
    id: "acco33",
    from: "Degree",
    name: "Doctorate",
    date: "",
    imgpath: "/images/awards/doctorate_show.webp",
    imgw: "790",
    imgh: "430",
  },
  {
    id: "acco34",
    from: "MTV Base",
    name: "",
    date: "2018",
    imgpath: "/images/awards/mtvbase_show.png",
    imgw: "1280",
    imgh: "243",
  },
  {
    id: "acco35",
    from: "Tribal Women of the year Awards",
    name: "Women of the Year in Entertainment",
    date: "2018",
    imgpath: "/images/kaffy-culture-1.jpeg",
    imgw: "896",
    imgh: "505",
  },

  {
    id: "acco36",
    from: "MTV Base",
    name: "",
    date: "2018",
    imgpath: "/images/awards/mtvbase_show.png",
    imgw: "1280",
    imgh: "243",
  },
  {
    id: "acco37",
    from: "Tribal Women of the year Awards",
    name: "Women of the Year in Entertainment",
    date: "2018",
    imgpath: "/images/kaffy-culture-1.jpeg",
    imgw: "896",
    imgh: "505",
  },
  {
    id: "acco38",
    from: "Degree",
    name: "Doctorate",
    date: "",
    imgpath: "/images/awards/doctorate_show.webp",
    imgw: "790",
    imgh: "430",
  },
  {
    id: "acco39",
    from: "MTV Base",
    name: "",
    date: "2018",
    imgpath: "/images/awards/mtvbase_show.png",
    imgw: "1280",
    imgh: "243",
  },
  {
    id: "acco40",
    from: "Tribal Women of the year Awards",
    name: "Women of the Year in Entertainment",
    date: "2018",
    imgpath: "/images/kaffy-culture-1.jpeg",
    imgw: "896",
    imgh: "505",
  },
    
  
];

const Accolades = () => {

  
  return (
    <div className={classes.accolades}>
      

      <div className={classes.content}>
        <div className={classes.awards}>
          {DEFAULT_AWARDS.map((award) => (
            <Award
              key={`${award.id}`}
              from={award.from}
              name={award.name}
              date={award.date}
              imgpath={award.imgpath}
              imgw={award.imgw}
              imgh={award.imgh}
            />
          ))}
        </div>
        <div className={classes.awards}>
          {DEFAULT_AWARDS.map((award) => (
            <Award
              key={`${award.id}par`}
              from={award.from}
              name={award.name}
              date={award.date}
              imgpath={award.imgpath}
              imgw={award.imgw}
              imgh={award.imgh}
            />
          ))}
        </div>
      </div>
      <div className={classes.title}>
        <UIBigTitle titleText={"Accolades"} className={classes["acco-title"]} />
        <h3>
          Hall of Fame:
        </h3>
        <h4>Awards and Accomplishments</h4>
      </div>
    </div>
  );
};

export default Accolades;
