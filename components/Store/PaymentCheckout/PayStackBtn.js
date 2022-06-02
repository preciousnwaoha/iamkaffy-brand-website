import React, { useState, useEffect } from 'react'
import { PaystackButton } from 'react-paystack'
// import ContactShippingInfoContext from "../../../context/contact-shipping-info-context"
import classes from './PayStackBtn.module.css'

import { db } from "../../../firebase"
import { doc, getDoc } from 'firebase/firestore'
  

const PayStackBtn = ( { item, fromCart=false, onPaymentSuccess, CSIData }) => {
  const [paystackData, setPayStackData] = useState("")

  useEffect(() => {
    const getPaystackData = async () => {
      const payDataRef = doc(db, "admin", "paystack")
      const payData = await getDoc(payDataRef).then(data => {
        setPayStackData(data.data())
      }).catch(err => {
        console.log(err)
      })
    }

    getPaystackData()

  })
  

  let amountToPay;

  if (fromCart) {
    amountToPay = item.subtotal
  }
  else {
    amountToPay = item.price
  }


    const amount = amountToPay * 100  // Remember, set in kobo!
    const {name, email, phone, address, location} = CSIData

    const config = {
      publicKey: paystackData.PSK_PUB_KEY,
      reference: (new Date()).getTime(),
      email,
      amount,
    };



    const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.

        onPaymentSuccess(reference)
      };

      const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        alert("Wait! Sure you want to go!!!")
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