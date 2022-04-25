import Link from "next/link";
import { useState } from "react";
import Menu from "../UI/Menu";
import ThemeButton from "../UI/ThemeButton";
import Button from "../UI/Button";
import classes from "./Nav.module.css";
import Effect3 from "../UI/Effects/Effect3";
import Effect4 from "../UI/Effects/Effect4";
import Effect5 from "../UI/Effects/Effect5";

const Nav = () => {
  const [showingSideNav, setShowingSideNav] = useState(false);

  const toggleSideNavHandler = () => {
    setShowingSideNav((prevState) => {
      return !prevState;
    });
  };

  const sideNavClasses = `${classes["side-nav-ul"]} ${
    showingSideNav ? classes["show-side-nav"] : classes["hide-side-nav"]
  }`;

  return (
    <nav className={classes.nav}>
      {!showingSideNav && (
        <ul className={classes["top-nav-ul"]}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/expressions">
              <a>Expresions</a>
            </Link>
          </li>

          <li className={classes["hidden-nav-item"]}>
            <Link href="/impact">
              <a>Impact</a>
            </Link>
          </li>
          <li className={classes["hidden-nav-item"]}>
            <Link href="/vault">
              <a>Media</a>
            </Link>
          </li>
          <li>
            <Link href="/store">
              <a>Store</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      )}

      <ul className={sideNavClasses}>
        {/* <Effect className={classes["effect"]}/> */}
        <Effect3 className={classes["effect-item-1"]} />
        <Effect4 className={classes["effect-item-2"]} />
        <Effect5 className={classes["effect-item-5"]} />
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        
        <li>
          <Link href="/expressions">
            <a>Expresions</a>
          </Link>
        </li>
        <li>
          <Link href="/impact">
            <a>Impact</a>
          </Link>
        </li>
        <li>
          <Link href="/vault">
            <a>The Vault (Media)</a>
          </Link>
        </li>
        <li>
            <Link href="/store">
              <a>Store</a>
            </Link>
          </li>
          <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <div
          className={classes["exit-side-nav-btn"]}
          onClick={toggleSideNavHandler}
        >
          &times;
        </div>
      </ul>
      <div className={classes["theme-btn-wrapper"]}>
        <ThemeButton />
        <div className={classes.theme}></div>
        <Menu className={classes["menu-icon"]} onClick={toggleSideNavHandler} />
      </div>
    </nav>
  );
};

export default Nav;
