import React from 'react'
import Link from 'next/link'
import classes from "./Logo.module.css"

const Logo = ({ classValue }) => {
    const logoClasses = `${classes.logo} ${classValue || ""}`
  return (
    <Link href={"/"} >
        <a className={logoClasses}>IAMKAFFY</a>
        </Link>
  )
}

export default Logo