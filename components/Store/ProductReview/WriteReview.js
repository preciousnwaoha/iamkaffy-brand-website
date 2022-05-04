import React, { useContext, useState, useRef, useEffect } from 'react'
import Link from "next/link"
import AuthContext from '../../../context/auth-context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import classes from './WriteReview.module.css'
import RateItem from './RateItem'

import { db } from "../../../firebase"
import { collection, doc, updateDoc, arrayUnion } from "firebase/firestore";
import AuthPopUp from '../../Auth/AuthPopUp'


const WriteReview = ({product}) => {
    const authCtx = useContext(AuthContext)
    const [isShowingAuthPopUp, setIsShowingAuthPopUp] = useState(false)
    const [rating, setRating] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [nameIsValid, setNameIsValid] = useState(true)
    const [ratingIsValid, setRatingIsValid] = useState(true)
    const [messageIsValid, setMessageIsValid] = useState(true)

    
    useEffect(() => {
        setIsShowingAuthPopUp(false)
    }, [])
    

    const nameRef = useRef()
    const messageRef = useRef()
    const colorRef = useRef()
    const sizeRef = useRef()

    const showAuthPopUpHandler = () => {
        setIsShowingAuthPopUp((prevState) => {
            return !prevState
        })
    }
    

    const getRatingHandler = (rating) => {
        setRating(rating)
    }

    const submitHandler = async (event) => {
        event .preventDefault()

        setIsLoading(true)
        

        const name = nameRef.current.value
        const message = messageRef.current.value
        const color =  colorRef.current.value || ""
        const size =  sizeRef.current.value || ""

        if ((name === '') || (name.length <= 1)) {
            setNameIsValid(false)
            setIsLoading(false)
            return
        }

        if ((message === '') || (message.length <= 1)) {
            setMessageIsValid(false)
            setIsLoading(false)
            return
        }

        if ((rating < 1) || (rating > 5)) {
            setRatingIsValid(false)
            setIsLoading(false)
            return
        }


        setMessageIsValid(true)
        setNameIsValid(true)
        setRatingIsValid(true)


        const productReviewData = {
            date: new Date().getDate(),
            itemType: {
                color: color,
            size: size
            },
            rating: rating,
            reviewerName: name,
            message: message,
            
        }

        const productRef = doc(db, 'products', product.id)

        await updateDoc(productRef, {
            reviews: arrayUnion(productReviewData)
        });
        

        // await setDoc(productRef, {reviews: [productReviewData]}, {merge: true})

        setIsLoading(false)
    }

  return (
    <div className={classes["write-review"]}>
        <h2>Write a review</h2>

        <div className={classes["content"]}>
        {!authCtx.isLoggedIn && <div>
            
                <p className={classes["sorry-login"]} onClick={showAuthPopUpHandler}>You&apos;ll have to login to post a valid review <span>(LOGIN)</span></p>
            </div>}
        <form onSubmit={submitHandler}>
            <label htmlFor='name'>Your Name</label>
            <input  type="text" id="name" placeholder='Your Name' ref={nameRef} />
            {!nameIsValid && <p className={classes.error}>please enter your name!</p>}
            <RateItem onGetRating={getRatingHandler} />
            {!ratingIsValid && <p className={classes.error}>tap star to add your rating</p>}
            
            <div className={classes["color-size-wrapper"]}>
            <label htmlFor='color'>Color</label>
            <input type="text" id="color" placeholder='Color (optional)' ref={colorRef} />
            <label htmlFor='size'>Size</label>
            <input type="text" id="size" placeholder='Size (optional)' ref={sizeRef} />
            </div>
           
            <textarea ref={messageRef} placeholder="Review Message..." ></textarea>
            {!messageIsValid && <p className={classes.error}>help others by adding a message</p>}
            <div className={classes["verified-post-btn-wrapper"]}>
                {authCtx.isLoggedIn && <p className={classes.verified}>verified user <FontAwesomeIcon className={classes['verified-mark']} icon={faCheckCircle} style={{ fontSize: '1.5rem' }} /> </p>}
                {!authCtx.isLoggedIn && <p className={classes["login-first"]} onClick={showAuthPopUpHandler}><span>(LOGIN)</span> first!</p>}
            <button type='submit' disabled={!authCtx.isLoggedIn} className={classes['post-btn']} >{
            isLoading ? 'In a sec...' : 'POST REVIEW'}</button>
            </div>
            
        </form>
        </div>
       {(!authCtx.isLoggedIn && isShowingAuthPopUp) && <AuthPopUp onExitAuthPopUp={showAuthPopUpHandler} />}

       
        
    </div>
  )
}

export default WriteReview