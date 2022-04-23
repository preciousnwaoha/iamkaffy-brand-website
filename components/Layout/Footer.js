import React from "react";
import Link from "next/link"
import Social from "../Contact/Socials"
import Button from "../UI/Button";
import DareDanceLive from "../UI/DareDanceLive";
import Logo from "../UI/Logo";
import Scroll from "../UI/Scroll";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Scroll className={classes["scroll-up"]} scrollType={"scroll-up"} />
      <DareDanceLive />
      <div className={classes["footer-content"]}>
        <div className={classes["logo-wrapper"]}>
          <Logo classValue={classes.logo} />
        </div>
        <Social className={classes["footer-socials"]} />
        <div className={classes["btn-wrapper"]}>
          <Link href={"/contact"}>
          <a className={classes["footer-btn"]}>
              Contact
          </a>
          </Link>
          
        </div>
      </div>
      <div className={classes["footer-footer"]}>
      <p>&copy; 2022, iamkaffy brand</p>
      {" | "}
      <p>Built in the Spirit of Dance</p>
      </div>
      
    </footer>
  );
};

export default Footer;
