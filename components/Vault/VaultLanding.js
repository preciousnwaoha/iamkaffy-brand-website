import React from "react";
import Image from "next/image";
import classes from "./VaultLanding.module.css";

const DEFAULT_VL_IMAGES = [
  {
    id: "vault1",
    img: "/images/ijoda-1.jpg",
  },
  {
    id: "vault2",
    img: "/images/ijoda-1.jpg",
  },
  {
    id: "vault3",
    img: "/images/ijoda-1.jpg",
  },
  {
    id: "vault4",
    img: "/images/ijoda-1.jpg",
  },
];

const VaultLanding = () => {
  return (
    <div className={classes["vault-landing"]}>
      <div className={classes["colored-side"]}></div>
      
      <div className={classes["image-wrapper"]}>
        <div className={classes["image-wrapper-inner"]}>
          <Image
            src="/images/kaffy-photo-3.jpg"
            priority={true}
            alt="Kaffy the dancers media's photos and videos place"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
      </div>
      <h1 className={classes.title}>Kaffy&apos;s Media House</h1>
    </div>
  );
};

export default VaultLanding;
