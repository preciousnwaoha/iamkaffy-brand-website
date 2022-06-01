import { db } from "../../firebase";
import { collection, setDoc, doc } from "firebase/firestore";

const ordersCollectionRef = collection(db, "orders");

export default async function handler(req, res) {
    const orderData = JSON.parse(req.body)
    
    // Send order to database
    await setDoc(doc(ordersCollectionRef, order_id), orderData).then((data) => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(500)
    })
    
}
