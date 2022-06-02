import emailjs from "@emailjs/browser";

import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function handler(req, res) {
    const templateParams = {...req.body}
    
    const docRef = doc(db, "admin", "envs");
  const docData = await getDoc(docRef);

  const envs = docData.data();


    await emailjs.send(envs.MJ_SERVICE_ID_SUPPORT, envs.MJ_TEMPLATE_ID_SUPPORT, templateParams, envs.MJ_PUB_KEY).then(function(data) {
        return res.status(200).json(data)
     }, function(error) {
        return res.status(500)
     });
}
