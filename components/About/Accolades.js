import React from "react";
import classes from "./Accolades.module.css";
import Award from "./Award";

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
  
  
  
  
  
];

const Accolades = () => {

  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
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
          {shuffle(DEFAULT_AWARDS).map((award) => (
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
        <h2>Accolades</h2>
        <h3>
          Hall of Fame:
        </h3>
        <h4>Awards and Accomplishments</h4>
      </div>
    </div>
  );
};

export default Accolades;
