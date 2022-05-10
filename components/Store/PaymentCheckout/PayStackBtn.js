import React, { useState } from 'react'
import { PaystackButton } from 'react-paystack'
import classes from './PayStackBtn.module.css'



  

const PayStackBtn = ( { item, fromCart=false }) => {
  let amountToPay;

  if (fromCart) {
    amountToPay = item.subtotal
  }
  else {
    amountToPay = item.price
  }

    const publicKey = "pk_test_03a5461f993e37655bf14816546e8cc873cb8103"
    const amount = amountToPay * 100  // Remember, set in kobo!
    const name = 'precious'
    const email = 'precious@gmail.com'
    const phone = '09030238390'
    const address = 'My special test street'

    const config = {
        reference: (new Date()).getTime(),
        email,
        amount,
        publicKey,
      };


    const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
      };

      const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        alert("Wait! You need this oil, don't go!!!!")
        console.log('closed')
      }
  
    

  const componentProps = {
    ...config,
    metadata: {
      name,
      phone,
      address,
    },
    text: "Buy Now",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  }

  return (
    <div>
        <PaystackButton className={classes["paystack-button"]} {...componentProps} />
    </div>
  )
}

export default PayStackBtn