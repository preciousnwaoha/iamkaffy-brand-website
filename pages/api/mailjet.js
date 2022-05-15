const mailjet = require("node-mailjet").connect(
    process.env.MJ_SECRET_KEY,
  process.env.MJ_API_KEY,
);

export default function handler(req, res) {
  const data = {
    Messages: [
      {
        From: {
          Email: "nwaohaprecious04@gmail.com",
          Name: "Support",
        },
        To: [
          {
            Email: "nwaohaprecious04@gmail.com",
            Name: "Precious",
          },
        ],
        Subject: "Greetings from Kaffy",
        TextPart: "Order Successful",
        HTMLPart:
          "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
        CustomID: "AppGettingStartedTest",
      },
    ],
  };

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
            // support@kaff
          Email: "nwaohaprecious04@gmail.com",
          Name: "Kaffy Store",
        },
        To: [
          {
            Email: "nwaohaprecious25@example.com",
            Name: "passenger 1",
          },
        ],
        TemplateID: 3935254,
        TemplateLanguage: true,
        Subject: "Order Confirmed",
        Variables: {
          firstname: "Precious",
          total_price: "Default value",
          order_date: "Default value",
          order_id: "Default value",
        },
      },
    ],
  });
  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });

}

// 3935254

/**
 *
 * This call sends a message to the given recipient with vars and custom vars.
 *
 */
