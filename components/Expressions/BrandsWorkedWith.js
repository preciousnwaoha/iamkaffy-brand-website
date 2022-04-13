import Image from 'next/image'
import React from 'react'
import UITitle from '../UI/UITitle'
import classes from "./BrandsWorkedWith.module.css"

/*BWW - Brands Worked With*/
const DEFAULT_BRANDS = [
    {
        id: "brand1",
        name: "Access Bank Company",
        logoImgPath: "/images/bww_logos/access-bank.png",
        logoImgW: "700",
        logoImgH: "175"
    },
    {
        id: "brand2",
        name: "GoldMyneTV Company",
        logoImgPath: "/images/bww_logos/goldmynetv.jpg",
        logoImgW: "960",
        logoImgH: "538"
    },
    {
        id: "brand3",
        name: "Interswitch Company",
        logoImgPath: "/images/bww_logos/interswitch.webp",
        logoImgW: "400",
        logoImgH: "400"
    },
    {
        id: "brand4",
        name: "Arise Women Organization",
        logoImgPath: "/images/bww_logos/arise-women.jpeg",
        logoImgW: "228",
        logoImgH: "115"
    },
    {
        id: "brand5",
        name: "Pepsodent Company",
        logoImgPath: "/images/bww_logos/pepsodent.png",
        logoImgW: "700",
        logoImgH: "394"
    },
    {
        id: "brand6",
        name: "Three Crowns Company",
        logoImgPath: "/images/bww_logos/three-crowns.jpg",
        logoImgW: "400",
        logoImgH: "400"
    },
]

const BrandsWorkedWith = ({inExpressionsPage}) => {
  return (
    <div className={classes.brands}>
        <UITitle titleText={"Brands I've worked with"} className={classes["brands-title"]} />
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