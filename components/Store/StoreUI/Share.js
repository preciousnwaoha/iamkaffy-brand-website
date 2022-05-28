import React, { useState } from 'react'

import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons'
import classes from "./Share.module.css"

const Share = () => {
    const  {asPath, pathname} = useRouter()
    const [showLink, setShowLink] = useState(false)
    const [copied, setCopied] = useState(false)

    let path = `${asPath}`

    if (typeof window !== "undefined") {
        origin = window.location.origin
        path = `${origin}${path}`
    }

    const shareHandler = () => {
        setShowLink((prevState) => {
            return !prevState
        })
    }

    const copyHandler = () => {
        navigator.clipboard.writeText(path);
            setCopied(true)
    
            const timer = setTimeout(() => {
                      setCopied(false)
            }, 2000);
      }

  return (
      <>
      <div className={classes["share"]} onClick={shareHandler}>{showLink ? 'SHARE LINK' : 'SHARE' }</div>
    {showLink && <div className={classes["copy-link"]}>
        <p>{path}</p>
        <div className={classes["copy-btn"]} title={"copy"} onClick={copyHandler}>
            {!copied && <FontAwesomeIcon className={classes['copy-icon']}  icon={faCopy} style={{fontSize: "1.5rem"}} />}
            {copied && <FontAwesomeIcon icon={faCheck} className={classes["copy-icon"]} style={{fontSize: "1.5rem"}} />}
        </div>
    </div>}
      </>
    
  )
}

export default Share