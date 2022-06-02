import emailjs from "@emailjs/browser";

export default async function handler(req, res) {
    const templateParams = {...req.body}
    

    await emailjs.send('service_fqrip8p', 'template_6x7qmjt', templateParams, process.env.MJ_PUB_KEY)
    then(function(data) {
        res.status(200).json(data)
     }, function(error) {
         res.status(500)
     });
}
