import React from "react";
import Social from "../Contact/Socials"
import Button from "../UI/Button";
import DareDanceLive from "../UI/DareDanceLive";
import Logo from "../UI/Logo";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <DareDanceLive />
      <div className={classes["footer-content"]}>
        <div className={classes["logo-wrapper"]}>
          <Logo classValue={classes.logo} />
        </div>
        <Social className={classes["footer-socials"]} />
        <div className={classes["btn-wrapper"]}>
          <Button className={classes["footer-btn"]}>
              Contact
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
