import React from 'react'
import Link from 'next/link'
import classes from "./StoreLogo.module.css"

const StoreLogo = ({ className }) => {
    const storeLogoClasses = `${classes["store-logo"]} ${className || ""}`
  return (
    <Link href={"/"} >
        <a className={storeLogoClasses}>KAFFY<br />STORE</a>
        </Link>
  )
}

export default StoreLogo