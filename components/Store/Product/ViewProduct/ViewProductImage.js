import React, { useState } from "react";
import Image from "next/image";
import Button from "../../../UI/Button";
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
            src={`https://firebasestorage.googleapis.com/v0/b/iamkaffy-brand-site.appspot.com/o/products%2F${images[imageIndex]}?alt=media`}
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
          &lt;
        </Button>
        <Button className={classes["prev-btn"]} clickAction={backwardsHandler}>
          &gt;
        </Button>
      </div>
    </div>
  );
};

export default ViewProductImage;
