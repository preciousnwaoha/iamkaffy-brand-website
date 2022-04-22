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

  


  return (
    <div className={`${classes["google-pay-btn"]} ${className || ""}`}>
      <GooglePayButton
        environment="TEST"
        buttonSizeMode="fill"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY", // Payment Gateway Details
                parameters: {
                  gateway: "example", //
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "17613812255336763067",
            merchantName: "Demo Only (you will not be charged",
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
          history.pushState("/confirm");
        }}
      />
    </div>
  );
};

export default GooglePayBtn;
