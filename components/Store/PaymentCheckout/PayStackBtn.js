import React, { useContext } from 'react'
import { PaystackButton } from 'react-paystack'
// import ContactShippingInfoContext from "../../../context/contact-shipping-info-context"
import classes from './PayStackBtn.module.css'



  

const PayStackBtn = ( { item, fromCart=false, onPaymentSuccess, CSIData }) => {

  

  let amountToPay;

  if (fromCart) {
    amountToPay = item.subtotal
  }
  else {
    amountToPay = item.price
  }

    const amount = amountToPay * 100  // Remember, set in kobo!
    const {name, email, phone, address, location} = CSIData

    const preConfig = {
      reference: (new Date()).getTime(),
      email,
      amount,
    };

    const config = fetch("/api/getPayStackConfig", {
      method: "post",
      body: JSON.stringify(preConfig),
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.

        onPaymentSuccess(reference)
      };

      const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        alert("Wait! You need this, don't go!!!!")
        console.log('closed')
      }
  
    

  const componentProps = {
    ...config,
    metadata: {
      name,
      phone,
      address,
      location,
    },
    text: "Buy Now",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  }

  // if(contactInfo.visibility)

  return (
    <div>
        <PaystackButton className={classes["paystack-button"]} {...componentProps} />
    </div>
  )
}

export default PayStackBtn