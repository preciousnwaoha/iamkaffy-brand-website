import Image from 'next/image'
import React from 'react'
import UIBigTitle from '../UI/UIBigTitle'
import classes from "./BrandsWorkedWith.module.css"

/*BWW - Brands Worked With*/
const DEFAULT_BRANDS = [
    {
        id: "brand1",
        name: "Access Bank Company",
        logoImgPath: "/images/bww_logos/bww5.png",
        logoImgW: "1280",
        logoImgH: "1280",
    },
    {
        id: "brand2",
        name: "GoldMyneTV Company",
        logoImgPath: "/images/bww_logos/bww6.png",
        logoImgW: "1280",
        logoImgH: "1280",
    },
    {
        id: "brand3",
        name: "Interswitch Company",
        logoImgPath: "/images/bww_logos/bww1.png",
        logoImgW: "1280",
        logoImgH: "1280",
    },
    {
        id: "brand4",
        name: "Arise Women Organization",
        logoImgPath: "/images/bww_logos/bww4.png",
        logoImgW: "1280",
        logoImgH: "1280",
    },
    {
        id: "brand5",
        name: "Pepsodent Company",
        logoImgPath: "/images/bww_logos/bww2.png",
        logoImgW: "1280",
        logoImgH: "1280",
    },
    {
        id: "brand6",
        name: "Three Crowns Company",
        logoImgPath: "/images/bww_logos/bww3.png",
        logoImgW: "1280",
        logoImgH: "1280",
    },
]

const BrandsWorkedWith = ({inExpressionsPage, inHome=true}) => {
  return (
    <div className={classes.brands}>
        <UIBigTitle titleText={"Brands I've worked with"} className={`${classes["title"]} ${inHome ? "" : classes["title-sm"]}`} />
        {inExpressionsPage && <p>Kaffy hass also worked with several brands, promoting wellness and health. Some of these brands include:</p>}
        <div className={classes["list-wrapper"]}>
        <ul className={classes["list-of-brands"]}>
            {DEFAULT_BRANDS.map(brand => (
                <li key={brand.id}>
                    <Image src={brand.logoImgPath} alt={`Kaffy has worked with ${brand.name} and brand`} width={brand.logoImgW} height={brand.logoImgH} layout="responsive" />
                </li>
            ))}
        </ul>
        <ul className={classes["list-of-brands"]}>
            {DEFAULT_BRANDS.map(brand => (
                <li key={`${brand.id}par`}>
                    <Image src={brand.logoImgPath} alt={`Kaffy has worked with ${brand.name} and brand`} width={brand.logoImgW} height={brand.logoImgH} layout="responsive" />
                </li>
            ))}
        </ul>
        </div>
        
    </div>
  )
}

export default BrandsWorkedWith