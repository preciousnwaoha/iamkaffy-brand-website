import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import classes from "./StoreCollectionsItem.module.css"



const StoreCollectionsItem = ({ img, name }) => {
  return (
    <div className={classes["collections-item"]}>
        <div className={classes["image-wrapper"]}>
            <div className={classes["image-wrapper-inner"]}>
                <Image src={img} alt={`kaffy store ${name} in the collection`} width={"100%"} height={"100%"} layout='responsive' className={"image"} />
            </div>
        </div>
        <div className={classes["collection-name-btn-wrapper"]}>
        <p className={classes["collection-name"]}>{name}</p>
        <Link href={"/"}>
            <a className={classes["shop-now-btn"]}>Shop Now</a>
        </Link>
        </div>
        
    </div>
  )
}

export default StoreCollectionsItem