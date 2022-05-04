import React from "react";
import GooglePayButton from "@google-pay/button-react";

import classes from "./GooglePayBtn.module.css";

const GooglePayBtn = ({ item, fromCart=false, className }) => {

  let amountToPay;

  if (fromCart) {
    amountToPay = item.subtotal
  }
  else {
    amountToPay = item.price
  }

  const baseRequest = {
    apiVersion: 2,
    apiVersionMinor: 0
  };

  const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];
  const allowedCardNetworks = ["MASTERCARD", "VISA"];

  const tokenizationSpecification = {
    type: "PAYMENT_GATEWAY", // Payment Gateway Details
    parameters: {
      gateway: "example", //
      gatewayMerchantId: "exampleGatewayMerchantId",
    },
  }
  const baseCardPaymentMethod = {
    type: 'CARD',
    parameters: {
      allowedAuthMethods: allowedCardAuthMethods,
      allowedCardNetworks: allowedCardNetworks
    }
  };

  // const cardPaymentMethod = Object.assign(
  //   {tokenizationSpecification: tokenizationSpecification},
  //   baseCardPaymentMethod
  // );

  // const isReadyToPayRequest = Object.assign({}, baseRequest);
  // isReadyToPayRequest.allowedPaymentMethods = [baseCardPaymentMethod];


  return (
    <div className={`${classes["google-pay-btn"]} ${className || ""}`}>
      <GooglePayButton
        environment="TEST"
        buttonSizeMode="fill"
        paymentRequest={{
          ...baseRequest,
          allowedPaymentMethods: [
            {
              ...baseCardPaymentMethod,
              tokenizationSpecification: tokenizationSpecification,
            },
          ],
          merchantInfo: {
            merchantId: "BCR2DN4TWCAOF72I",
            merchantName: "Kaffy Store",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: amountToPay.toFixed(2),
            currencyCode: "NGN",
            countryCode: "NG",
          },
        }}
        onLoadPaymentData={(paymentData) => {
          console.log(
            "TODO: send order to server",
            paymentData.paymentMethodData
          );
          // history.pushState("/confirm");
        }}
      />
    </div>
  );
};

export default GooglePayBtn;
