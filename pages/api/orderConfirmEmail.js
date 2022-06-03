const SibApiV3Sdk = require("sib-api-v3-sdk");

require("dotenv").config();

const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
const apiKey = defaultClient.authentications["api-key"];
// apiKey.apiKey = process.env.SB_API_KEY;

import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function handler(req, res) {
  const docRef = doc(db, "admin", "envs");
  const docData = await getDoc(docRef);

  const envs = docData.data();

  apiKey.apiKey = envs.SB_API_KEY;


  const { order_id, order_date, orders, CSIData, subtotal, currency } =
    req.body;

  let orders_text = "";

  for (let order in orders) {
    let { name, price, quantity, id } = orders[order];
    orders_text +=
      `${Number(order) + 1}. ${name} - ${quantity} - ${currency}${price},` +
      "\n";
  }

  const { name, email, phone, address, location } = CSIData;

  let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.to = [
    { email: envs.ORDER_CONFIRM_TO_EMAIL, name: envs.ORDER_CONFIRM_TO_NAME },
    { email: `${email.trim()}`, name: `${name}` },
  ];
  sendSmtpEmail.templateId = 3;
  // sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
  sendSmtpEmail.headers = { "Some-Custom-Name": order_id };
  sendSmtpEmail.params = {
    order_date,
    order_id,
    orders_text,
    to_name: name,
    to_email: email,
    phone,
    address,
    location,
    subtotal,
    currency,
  };

  await apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log(
        "API called successfully. Returned data: " + JSON.stringify(data)
      );
      res.status(200).json(data);
      return true;
    },
    function (error) {
      console.error(error);
      res.status(500);

      return false;
    }
  );
}

// sendSmtpEmail.subject = "My {{params.subject}}";
//   sendSmtpEmail.htmlContent =
//     "<html><body><h1>This is my first transactional email {{params.parameter}}</h1></body></html>";
// // sendSmtpEmail.textContent = "This is my first transactional email {{params.parameter}}"
//   sendSmtpEmail.sender = { name: "Kaffy Store", email: "nwaohaprecious25@gmail.com" };
//   sendSmtpEmail.to = [{ email: "guidetophone@gmail.com", name: "Precious" }];
//   // sendSmtpEmail.cc = [{ email: "example2@example2.com", name: "Janice Doe" }];
//   // sendSmtpEmail.bcc = [{ email: "John Doe", name: "example@example.com" }];
//   sendSmtpEmail.replyTo = { email: "nwaohaprecious25@gmail.com", name: "Kaffy Store" };
//   sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
//   sendSmtpEmail.params = {
//     parameter: "My param value",
//     subject: "New Subject",
//     to_name: name,
//     to_email: email,
//     address,
//     location,
//   };
