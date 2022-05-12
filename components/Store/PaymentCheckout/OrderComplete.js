import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import classes from "./OrderComplete.module.css"

const contactUsEmail = "kaffysupport@gmail.com"

const OrderComplete = () => {
    return(
        <div className={classes["order-complete"]}>
          <div className={classes["order-complete-inner"]}>
           <h1>Thank you</h1>
           <h2>Order Successful</h2>
           <p className={classes.mails}>{"You'll recieve emails on this order's details and any new updates regarding your order"}</p>

           <p className={classes.contact}>{`If you run have any issues make sure to contact us at ${contactUsEmail}`}</p>

           
           <Link href="/store">
            <a className={classes["explore"]}>
                <FontAwesomeIcon icon={faArrowRight} className={classes["explore-icon"]} />
                Explore Store
            </a>
           </Link>
         

           
          </div>
        </div>
      )
}

export default OrderComplete