import React, { useState } from 'react'
import StoreButton from '../../StoreUI/StoreButton';
import classes from "./ViewProductInfo.module.css"

const {
    name,
    images,
    subCollections,
    description,
    specs,
    colors,
    sizes,
    sizeGuide,
    date,
    price,
    numberLeft,
    numSold,
  } = {
    name: "bruh",
    images: ["/images/fit-5.jpg", "/images/fit-3.jpg"],
    description:
      "Everyone need a cozy go-to hoodeie to curl up in, so go for one that's soft, smooth, and stylish. It's the perfect choice for cooler evenings!",
    specs: [
      "50% cotton, 50% polyester",
      "Double-lined hood",
      "Double-needle stiching throughout",
    ],
    subCollections: ["Unisex T-Shirts"],
    collections: ["T-Shirts"],
    colors: ["white", "black", "pink"],
    sizes: [
        {
            size: "S",
            numLeft: 4,
        },
        {
            size: "M",
            numLeft: 4,
        },
        {
            size: "L",
            numLeft: 4,
        },
        {
            size: "XL",
            numLeft: 4,
        },
        {
            size: "2XL",
            numLeft: 4,
        },
    ],
    reviews: [
        {
            rating: 3,
            name: "Precious Nwaoha",
            itemType: {
                color: "pink",
                size: "L"
            },

            itemName: "bruh",
            reviewMessage: "I like this sweater a lot",
        }

    ],
    sizeGuide: {
      small: [27, 20],
      medium: [28, 22],
      large: [29, 24],
      xlarge: [30, 26],
    },
    date: "2022-10-11",
    price: 500.453,
    numberLeft: 50,
    numSold: 10,
  };



const ViewProductInfo = () => {
       const [quantity, setQuantity] =  useState(1)

       const increaseQuantity = () => {
           setQuantity(prevQuantity => prevQuantity + 1)
       }
       const decreaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity - 1)
        }

        const addToCartHandler = () => {
            console.log("added to cart")
        }
        
        const buyNowHandler = () => {
            console.log("buy now handler")
        }

  return (
    <div className={classes["view-product-info"]}>
        <h4 className={classes["view-product-title"]}>{name}</h4>
        <div className={classes["color-section"]}>
            <p className={classes["color-title"]}>COLOR</p>
            <div className={classes["color-wrapper"]}>
            {colors.map(color => (
                <div key={`${name}${color}`} className={classes["color"]} style={{ background: color }}>
                    
                </div>
            ))}
            </div>
        </div>

        <div className={classes["size-section"]}>
            <p className={classes["size-title"]}>SIZE</p>
            <div className={classes["size-item"]}>
            {sizes.map(size => (
                <div key={`${size.name}${sizes.indexOf(size)}`} className={classes["size"]} >{size.size}</div>
            ))}
            </div>
            
        </div>

        <div className={classes["quantity-section"]}>
            <p className={classes["quantity-title"]}>QUANTITY</p>
            <div className={classes["quantity-setter"]}>
                <div className={classes["decrease-quantity"]} onClick={decreaseQuantity}>-</div>
                <div>{quantity}</div>
                <div className={classes["increase-quantity"]} onClick={increaseQuantity}>+</div>
            </div>
        </div>

        <p className={classes.price}>${price.toFixed(2)}</p>

        <StoreButton className={classes["add-to-cart-btn"]} onClick={addToCartHandler}>Add to Cart</StoreButton>
        <StoreButton className={classes["buy-now-btn"]} onClick={buyNowHandler}>Buy it now</StoreButton>

        <div className={classes["description-section"]}>
            <p className={classes["description"]} >{description}</p>
            <ul className={classes.specs}>
                {specs.map(spec => (
                    <li key={`name${spec}${specs.indexOf(spec)}`} className={classes.spec}>{spec}</li>
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

        <div className={classes["share"]}>
            SHARE
        </div>
    </div>
  )
}

export default ViewProductInfo