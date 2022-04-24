import React from "react";
import Image from "next/image";
import StoreHeader from "./StoreHeader/StoreHeader";
import classes from "./StoreLanding.module.css"

const bannerLink = "https://media.giphy.com/media/LQw8aaSIBgDeQURojh/giphy.gif"
// /images/kaffy-photo-5.jpg"

const StoreLanding = () => {
  return (
    <div className={classes["store-landing"]}>
      <div className={classes["store-banner"]}>
        <div className={classes["store-banner-inner"]}>
          <Image
            src={bannerLink}
            priority={true}
            alt="kaffy dance online store"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            className={classes["banner-image"]}
          />
        </div>
      </div>
    </div>
  );
};

export default StoreLanding;
