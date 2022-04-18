import React from 'react'
import UIBigTitle from '../../UI/UIBigTitle'
import classes from "./StoreCollections.module.css"
import StoreCollectionsItem from './StoreCollectionsItem'

const DEFAULT_STORE_DATA = {
    collections: [
        {
            name: "T-Shirts",
            subCollections: ["Unisex T-Shirts", "Native"],
            collectionImage: "/images/kaffy-photo-5.jpg",
        },
        {
            name: "T-Shirts",
            subCollections: ["Unisex T-Shirts", "Native"],
            collectionImage: "/images/kaffy-photo-5.jpg",
        },
        {
            name: "T-Shirts",
            subCollections: [],
            collectionImage: "/images/kaffy-photo-5.jpg",

        },
        {
            name: "T-Shirts",
            subCollections: ["Unisex T-Shirts"],
            collectionImage: "/images/kaffy-photo-5.jpg",
        },
        {
            name: "T-Shirts",
            subCollections: ["Unisex T-Shirts", "Native"],
            collectionImage: "/images/kaffy-photo-5.jpg",
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

const {collections } = DEFAULT_STORE_DATA

const StoreCollections = () => {
  return (
    <div className={classes.collections}>
        <UIBigTitle className={classes["collections-title"]} titleText={"Collections"} />
        <div className={classes["collections-content"]}>
        {collections.map(collection => (
            <StoreCollectionsItem
            key={`colitem${collections.indexOf(collection)}`}
            img={collection.collectionImage}
            name={collection.name}
            />
        ))}
        </div>
        
    </div>
  )
}

export default StoreCollections