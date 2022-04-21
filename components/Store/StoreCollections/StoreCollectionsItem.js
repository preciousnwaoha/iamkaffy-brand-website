import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import classes from "./StoreCollectionsItem.module.css"


import { storage } from '../../../firebase'
import { ref } from 'firebase/storage'

// const imagesRef = ref(storage, 'store-images');


const StoreCollectionsItem = ({ image, name, id }) => {


  const colName = name.replace(/\s+/g, "")

  const collectionImageRef = ref(storage, `https://firebasestorage.googleapis.com/v0/b/kaffy-website-e7e63.appspot.com/o/collections%2F${image}`)


  return (
    <div className={classes["collections-item"]}>
        <div className={classes["image-wrapper"]}>
            <div className={classes["image-wrapper-inner"]}>
                <Image src={img} alt={`kaffy store ${name} in the collection`} width={"100%"} height={"100%"} layout='responsive' className={"image"} />
            </div>
        </div>
        <div className={classes["collection-name-btn-wrapper"]}>
        <p className={classes["collection-name"]}>{name}</p>
        <Link href={`/store/collection/${colName}`}>
            <a className={classes["shop-now-btn"]}>Shop Now</a>
        </Link>
        </div>
        
    </div>
  )
}

export default StoreCollectionsItem