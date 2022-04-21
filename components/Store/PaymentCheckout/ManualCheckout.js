import React from "react";
import Link from "next/link";
import classes from "./ManualCheckout.module.css";

const submitHandler = () => {
  console.log("info submit");
};

const ManualCheckout = () => {
  return (
    <div className={classes["manual-checkout"]}>
      <form>
        <div className={classes["contact-info"]}>
          <h3 className={classes["contact-info-title"]}>Contact Information</h3>
          <label htmlFor="email"></label>
          <input id="email" type="email" placeholder="Email" required />
        </div>
        <div className={classes["shipping-address"]}>
          <h3 className={classes["shipping-address-title"]}>
            Shipping Address
          </h3>
          <div className={classes["first-last-name-wrapper"]}>
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              type="text"
              placeholder="First Name"
              required
            />
            <label htmlFor="lastname">Last Name</label>
            <input id="lastname" type="text" placeholder="Last Name" required />
          </div>

          <label htmlFor="address">Address</label>
          <input id="address" type="text" placeholder="Address" required />
          <label htmlFor="city">City</label>
          <input id="city" type="text" placeholder="City" required />

          <div className={classes["country-state-zip-wrapper"]}>
            <label htmlFor="Country">Country</label>
            <input
              id="country"
              type="text"
              value="Nigeria"
              placeholder="Nigeria"
              required
            />

            <label htmlFor="state">State</label>
            <input id="state" type="text" placeholder="State" required />
            <label htmlFor="Country">ZIP Code</label>
            <input id="zip-code" type="text" placeholder="ZIP Code" />
          </div>

          <label htmlFor="phone"> Phone</label>
          <input id="phone" type="text" placeholder="Phone" required />

          <button type="submit" className={classes["continue-to-shipping-btn"]}>
            Continue to Shipping
          </button>
          <Link href="/store/cart">
            <a className={classes["return-to-cart-link"]}>Return to cart</a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ManualCheckout;
