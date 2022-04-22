import React from 'react'
import Link from "next/link"
import classes from "./BuyNowLink.module.css"

const BuyNowLink = ({productId, className}) => {


  return (
    <div className={`${classes["buy-now"]} ${className || ""}`}>
        <Link href={`/store/checkout/${productId}`}>
            <a> Buy it now</a>
        </Link>
    </div>
  )
}

export default BuyNowLink