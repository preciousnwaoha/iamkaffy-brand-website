import React, {useEffect} from "react";
import Award from "./Award";
import UIBigTitle from "../UI/UIBigTitle";
import classes from "./Accolades.module.css";

const DEFAULT_AWARDS = [
  {
    id: "acco1",
    from: "AFRIMA",
    name: "",
    date: "",
    imgpath: "/images/awards/afrima-1.webp",
    imgw: "371",
    imgh: "136",
  },
  {
    id: "acco2",
    from: "MTV Base",
    name: "",
    date: "",
    imgpath: "/images/awards/mtvbase-1.jpg",
    imgw: "1280",
    imgh: "343",
  },
  {
    id: "acco3",
    from: "Degree",
    name: "Doctorate",
    date: "",
    imgpath: "/images/awards/doctorate-1.webp",
    imgw: "790",
    imgh: "430",
  },
  {
    id: "acco4",
    from: "Headies",
    name: "Special Recognition Award",
    date: "2018",
    imgpath: "/images/awards/heades-2.jpg",
    imgw: "1290",
    imgh: "853",
  },
  {
    id: "acco5",
    from: "AFRIMA",
    name: "",
    date: "",
    imgpath: "/images/awards/afrima-2.png",
    imgw: "371",
    imgh: "136",
  },
  {
    id: "acco6",
    from: "MTV Base",
    name: "",
    date: "2018",
    imgpath: "/images/awards/mtvbase-2.jpg",
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
    imgpath: "/images/awards/heades-4.jpg",
    imgw: "1290",
    imgh: "853",
  },


  {
    id: "acco9",
    from: "Zenith Bank",
    name: "Hero Award for Excellence",
    date: "2018",
    imgpath: "/images/awards/zenith_bank-1.jpg",
    imgw: "312",
    imgh: "162",
  },
  
  {
    id: "acco10",
    from: "MTV Base",
    name: "",
    date: "2018",
    imgpath: "/images/awards/mtvbase-3.webp",
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
    imgpath: "/images/awards/heades-1.jpg",
    imgw: "780",
    imgh: "598",
  },
  
  {
    id: "acco13",
    from: "Degree",
    name: "Doctorate",
    date: "",
    imgpath: "/images/awards/doctorate-1.webp",
    imgw: "790",
    imgh: "430",
  },
  {
    id: "acco14",
    from: "MTV Base",
    name: "",
    date: "2018",
    imgpath: "/images/awards/mtvbase-1.jpg",
    imgw: "1280",
    imgh: "243",
  },
  {
    id: "acco15",
    from: "Heades",
    name: "Special Recognition Award",
    date: "2018",
    imgpath: "/images/awards/heades-4.jpg",
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
    imgpath: "/images/awards/heades-3.jpg",
    imgw: "1290",
    imgh: "853",
  },
  {
    id: "acco19",
    from: "Eloy Awards",
    name: "Inspirational Lady in the Creative Industry",
    date: "",
    imgpath: "/images/awards/eloy-2.png",
    imgw: "700",
    imgh: "227",
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
  
];

const Accolades = () => {

  useEffect(() => {
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
    }

    shuffleArray(DEFAULT_AWARDS)
  })
  

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
