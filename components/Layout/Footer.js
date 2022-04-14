import React from "react";
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
        <div className={classes.socials}>

        </div>
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
