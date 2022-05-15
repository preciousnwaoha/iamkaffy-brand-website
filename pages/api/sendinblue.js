const SibApiV3Sdk = require("sib-api-v3-sdk");

require('dotenv').config()

const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SB_API_KEY;

export default function handler(req, res) {
  let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();


  sendSmtpEmail.subject = "My {{params.subject}}";
//   sendSmtpEmail.htmlContent =
//     "<html><body><h1>This is my first transactional email {{params.parameter}}</h1></body></html>";
sendSmtpEmail.textContent = "This is my first transactional email {{params.parameter}}"
  sendSmtpEmail.sender = { name: "Kaffy Store", email: "nwaohaprecious25@gmail.com" };
  sendSmtpEmail.to = [{ email: "nwaohaprecious04@gmail.com", name: "Precious" }];
  sendSmtpEmail.cc = [{ email: "example2@example2.com", name: "Janice Doe" }];
  sendSmtpEmail.bcc = [{ email: "John Doe", name: "example@example.com" }];
  sendSmtpEmail.replyTo = { email: "nwaohaprecious25@gmail.com", name: "Kaffy Store" };
  sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
  sendSmtpEmail.params = {
    parameter: "My param value",
    subject: "New Subject",
  };

  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log(
        "API called successfully. Returned data: " + JSON.stringify(data)
      );
    },
    function (error) {
      console.error(error);
    }
  );

}

// 3935254
