import React, { useState} from 'react'
import StoreLogo from '../StoreUI/StoreLogo'
import classes from "./StoreNav.module.css"

const DEFAULT_STORE_DATA = {
    collections: [
        {
            name: "T-Shirts",
            subCollections: ["Unisex T-Shirts", "Native"]
        },
        {
            name: "T-Shirts",
            subCollections: []
        },
        {
            name: "T-Shirts",
            subCollections: ["Unisex T-Shirts"]
        },
        {
            name: "T-Shirts",
            subCollections: ["Unisex T-Shirts", "Native"]
        }
    ],
    items: [
        {
            name: "bruh",
            img: "/images/fit-5.jpg",
            subCollections: ["Unisex T-Shirts"],
            collections: ["T-Shirts"],
            price: "500",
            numberLeft: "50",
            numSold: "10",
        },
        {
            name: "bruh",
            img: "/images/fit-5.jpg",
            subCollections: ["Unisex T-Shirts"],
            collections: ["T-Shirts"],
            price: "500",
            numberLeft: "50",
            numSold: "10",
        },
        {
            name: "bruh",
            img: "/images/fit-5.jpg",
            subCollections: ["Unisex T-Shirts"],
            collections: ["T-Shirts"],
            price: "500",
            numberLeft: "50",
            numSold: "10",
        },
        {
            name: "bruh",
            img: "/images/fit-5.jpg",
            subCollections: ["Unisex T-Shirts"],
            collections: ["T-Shirts"],
            price: "500",
            numberLeft: "50",
            numSold: "10",
        },
    ]
}

const { collections, items} = DEFAULT_STORE_DATA


        

const StoreNav = ({className, onExitNav} ) => {

    const hideNavHandler = () => {
        onExitNav()
    }

    const storeNavClasses = `${classes["store-nav"]} ${classes[className]}`

  return (
    <div className={storeNavClasses}>
        <StoreLogo className={classes["store-nav-logo"]} />
        <div className={classes["store-exit-icon"]} onClick={hideNavHandler}>&times;</div>
        <ul className={classes["store-nav-collection-list"]}>
            {collections.map(collection => (
                <li key={`${collection.name}${collections.indexOf(collection)}`} className={classes["store-nav-collection-item"]}>
                    <p className={classes["collection-name"]}>{collection.name}</p>
                    {(collection.subCollections.length > 0) && <p className={classes["sub-collection-arrow"]}>&gt;</p>}
                </li>
            ))}
        </ul>
        <div className={classes["store-nav-acc"]}>
            <div className={classes["store-nav-acc-head"]}>ACCOUNT</div>
            <div className={classes["store-nav-acc_item"]}>Login</div>
            <div className={classes["store-nav-acc_item"]}>Logout</div>
        </div>

    </div>
  )
}

export default StoreNav