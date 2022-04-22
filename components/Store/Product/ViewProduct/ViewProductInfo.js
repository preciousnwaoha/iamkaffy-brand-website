import React, { useState, useContext } from "react";
import Size from "./Size";
import Color from "./Color";
import StoreButton from "../../StoreUI/StoreButton";
import CartContext from "../../../../context/cart-context";
import classes from "./ViewProductInfo.module.css";
import AddedProductToCartPopUp from "./AddedProductToCartPopUp";
import BuyNowLink from "../../StoreUI/BuyNowLink";
import GooglePayBtn from "../../PaymentCheckout/GooglePayBtn";

const ViewProductInfo = ({ product }) => {
  const cartCtx = useContext(CartContext);

  const {
    name,
    images,
    subCollections,
    id,
    description,
    specs,
    colors,
    sizes,
    sizeGuide,
    date,
    price,
    numberLeft,
    numSold,
  } = product;

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [showSelectSizeMessage, setShowSelectSizeMessage] =  useState(false)
  const [selectedColor, setSelectedColor] = useState("");
  const [showSelectColorMessage, setShowSelectColorMessage] =  useState(false)

  const selectColorHandler = (color) => {
    setSelectedColor(color);
    setShowSelectColorMessage(false)
  };

  const selectSizeHandler = (size) => {
    setSelectedSize(size);
    setShowSelectSizeMessage(false)
  };

  const increaseQuantity = () => {
    if (quantity < numberLeft) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCartHandler = () => {
      if (selectedSize && selectedColor) {
        cartCtx.onAddToCart({ ...product, quantity: quantity, selectedSizes: [selectedSize], selectedColors: [selectedColor] });
      }
      else {
        if (selectedSize === "") {
            setShowSelectSizeMessage(true)
        }
        if (selectedColor === "" ) {
            setShowSelectColorMessage(true)
        }
      }
      
  };

  const buyNowHandler = () => {
    console.log("buy now handler");
  };


  return (
    <div className={classes["view-product-info"]}>
      <h4 className={classes["view-product-title"]}>{name}</h4>
      <div className={classes["color-section"]}>
        <p className={classes["color-title"]}>COLOR</p>
        {showSelectColorMessage && <p className={classes["please-select-color"]}>please select a color</p>}
        <div className={classes["color-wrapper"]}>
          {colors.map((color) => (
            <Color
              key={`${id}${color}${Math.random().toFixed(5)}`}
              color={color}
              onGetColor={selectColorHandler}
            />
          ))}
          <div>{selectedColor}</div>
        </div>
        
      </div>

      <div className={classes["size-section"]}>
        <p className={classes["size-title"]}>SIZE</p>
        {showSelectSizeMessage && <p className={classes["please-select-size"]}>please select a size</p>}
        <div className={classes["size-item"]}>
          {sizes.map((size) => (
            <Size
              key={`${id}size${sizes.indexOf(size)}`}
              onGetSize={selectSizeHandler}
              size={size}
            />
          ))}
        </div>
        {selectedSize && <div className={classes["selected-size"]}>{selectedSize}</div>}
      </div>

      <div className={classes["quantity-section"]}>
        <p className={classes["quantity-title"]}>QUANTITY</p>
        <div className={classes["quantity-setter"]}>
          <div
            className={classes["decrease-quantity"]}
            onClick={decreaseQuantity}
          >
            -
          </div>
          <div>{quantity}</div>
          <div
            className={classes["increase-quantity"]}
            onClick={increaseQuantity}
          >
            +
          </div>
        </div>
      </div>

      <p className={classes.price}>₦{price.toFixed(2)}</p>
        <AddedProductToCartPopUp />
      <StoreButton
        className={classes["add-to-cart-btn"]}
        onClick={addToCartHandler}
      >
        Add to Cart
      </StoreButton>
      <GooglePayBtn item={product} className={classes["buy-now-btn"]} />
      {/* <BuyNowLink productId={product.id} className={"buy-now-btn"} /> */}

      <div className={classes["description-section"]}>
        <p className={classes["description"]}>{description}</p>
        <ul className={classes.specs}>
          {specs.map((spec) => (
            <li
              key={`${id}name${spec}${specs.indexOf(spec)}`}
              className={classes.spec}
            >
              {spec}
            </li>
          ))}
        </ul>
      </div>

      {/* <table className={classes["size-guide"]}>
            <td className={classes[""]}>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
            </td>
        </table> */}

      <div className={classes["share"]}>SHARE</div>
    </div>
  );
};

export default ViewProductInfo;
