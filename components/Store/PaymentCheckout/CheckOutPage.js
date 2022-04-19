import React, {useState} from 'react'
import classes from "./CheckOutPage.module.css"
import ExpressCheckout from './ExpressCheckout'

const price = 1501.343

const items = [

]

const CheckOutPage = () => {
    const [showSummary, setShowSummary] = useState(false)

  return (
    <div className={classes["checkout"]}>
        <h1 className={classes.title}>Kaffy Store</h1>
        <div className={classes["order-summary"]}>
            <div className={classes["short-order-summary"]}>
                <button>{showSummary ? "Hide" : "Show" } order summary</button>
                <p className={classes["summary-total-price"]}>{price}</p>
            </div>
            <div className={classes["express-checkout"]}>
                <p className={classes["express-checkout"]}>Express checkout</p>
                <ExpressCheckout />
            </div>
            <div className={classes["OR-line"]}>
                OR
            </div>

        </div>
    </div>
  )
}

export default CheckOutPage