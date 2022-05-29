import React, { useState } from "react";
import Image from "next/image";
import Button from "../../../UI/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import classes from "./ViewProductImage.module.css";





const ViewProductImage = ({ product }) => {
  const {name, images} = product;
  const imagesMaxIndex = images.length - 1;


  const [imageIndex, setImageIndex] = useState(0);

  const forwardsHandler = () => {
    if (imageIndex === imagesMaxIndex) {
      setImageIndex(0);
      return;
    } else {
      setImageIndex((prevIndex) => {
        return prevIndex + 1;
      });
    }
  };

  const backwardsHandler = () => {
    if (imageIndex === 0) {
      setImageIndex(imagesMaxIndex);
      return;
    } else {
      setImageIndex((prevIndex) => {
        return prevIndex - 1;
      });
    }
  };

  return (
    <div className={classes["view-product-image"]}>
      <div className={classes["product-image-wrapper"]}>
        <div className={classes["product-image-wrapper-inner"]}>
          <Image
            src={images[imageIndex]}
            alt={`${name} product in kaffy store`}
            priority={true}
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
      </div>
      <div className={classes["actions"]}>
        <Button className={classes["next-btn"]} clickAction={forwardsHandler}>
        <FontAwesomeIcon icon={faAngleLeft} style={{fontSize: "1.125rem"}} />
        </Button>
        <Button className={classes["prev-btn"]} clickAction={backwardsHandler}>
        <FontAwesomeIcon icon={faAngleRight} style={{fontSize: "1.125rem"}} />
        </Button>
      </div>
    </div>
  );
};

export default ViewProductImage;
