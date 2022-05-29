import { db } from "../../firebase"
import { collection, doc, updateDoc, arrayUnion, getDocs } from "firebase/firestore";



export default async function handler(req, res) {
    const reviewData = JSON.parse(req.body)

    const {message, itemType, rating, reviewerId, reviewerName, isEdit, productId, id} = reviewData

    let inputsAreValid = true
    
    if (reviewerName === "" || reviewerName.trim().length <= 1) {
        inputsAreValid = false
    }
  
    if (message === "" || message.trim().length <= 1) {
        inputsAreValid = false
    }
  
    if ((typeof rating === 'number') && (rating < 1 || rating > 5)) {
        inputsAreValid = false
    }

    if (reviewerId === "" || reviewerId.trim().length <= 1) {
        inputsAreValid = false
    }

    if (!inputsAreValid) {
        res.status(500)
        return
    }


    const reviewRef = collection(db, "products", productId, "reviews");
    const date = new Date(Date.now()).toLocaleDateString().replace(/\/+/g, "-")

    const reviewDataToSend = {
        date,
        message,
        reviewerId,
        reviewerName,
        itemType,
        productId,
        rating,
    }

    if (isEdit) {
        await updateDoc(doc(reviewRef, id), reviewDataToSend).then( async (data) => {
            
            
            res.status(200).json(data)
        }).catch((err) => {
            res.status(500)
        });
    } else {
        await addDoc(reviewRef, reviewDataToSend).then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(500)
        });;
    }
}
