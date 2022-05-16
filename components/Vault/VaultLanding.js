import React from "react";
import Image from "next/image";

import Effect2 from "../UI/Effects/Effect2"
import Effect3 from "../UI/Effects/Effect3"
import Effect5 from "../UI/Effects/Effect5"
import classes from "./VaultLanding.module.css";

const VaultLanding = () => {
  return (
    <div className={classes["vault-landing"]}>
      <Effect2 className={classes["effect-item-2"]} />
      <Effect3 className={classes["effect-item-3"]} />
      <Effect5 className={classes["effect-item-5"]} />
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
