import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import classes from "./StoreCollectionsItem.module.css"


import { storage } from '../../../firebase'
import { ref } from 'firebase/storage'

// const imagesRef = ref(storage, 'store-images');


const StoreCollectionsItem = ({ image, name, id }) => {


  // const colName = name.replace(/\s+/g, "+")



  return (
    <div className={classes["collections-item"]}>
        <div className={classes["image-wrapper"]}>
            <div className={classes["image-wrapper-inner"]}>
                <Image priority={true} src={image} alt={`kaffy store ${name} in the collection`} width={"100%"} height={"100%"} layout='responsive' className={"image"} />
            </div>
        </div>
        <div className={classes["collection-name-btn-wrapper"]}>
        <p className={classes["collection-name"]}>{name}</p>
        <Link href={`/store/collection/${id}`}>
            <a className={classes["shop-now-btn"]}>Shop Now</a>
        </Link>
        </div>
        
    </div>
  )
}

export default StoreCollectionsItem