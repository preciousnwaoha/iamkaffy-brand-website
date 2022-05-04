import React, { useReducer, useContext, useEffect } from "react";
import { db } from "../firebase";
import { collection, doc, updateDoc, getDoc } from "firebase/firestore";
import AuthContext from "./auth-context";



const CartContext = React.createContext({
  items: [],
  subtotal: 0,
  onAddToCart: (item) => {},
  onRemoveFromCart: (id) => {},
});

const DEFAULT_CART_STATE = {
    items: [],
    subtotal: 0,
}

const cartReducer = (state, action) => {
    if (action.type === "ADD_CART_ITEM") {
        const updatedSubtotal = state.subtotal + (action.item.price * action.item.quantity) 

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)

        const existingCartItem = state.items[existingCartItemIndex]

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + action.item.quantity,
                selectedSizes: [...existingCartItem.selectedSizes, ...action.item.selectedSizes ],
                selectedColors: [...existingCartItem.selectedColors, ...action.item.selectedColors ]
            };

            console.log(updatedItem.selectedColors)

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }



        return {
            items: updatedItems,
            subtotal: updatedSubtotal
        }
    }

    if  (action.type === "REMOVE_CART_ITEM") {
         

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)

        const existingCartItem = state.items[existingCartItemIndex]
        const updatedSubtotal = state.subtotal - existingCartItem.price
        let updatedItems

        if (existingCartItem.quantity === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)

        } else {
            const updatedItem = {...existingCartItem, 
            quantity: existingCartItem.quantity - 1,
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem
        }

        return {
            items: updatedItems,
            subtotal: updatedSubtotal
        }

    }
    if  (action.type === "REMOVE_WHOLE_CART_ITEM") {
         

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)

        const existingCartItem = state.items[existingCartItemIndex]
        const updatedSubtotal = state.subtotal - (existingCartItem.price * existingCartItem.quantity)
        let updatedItems = state.items.filter(item => item.id !== action.id)

        

        return {
            items: updatedItems,
            subtotal: updatedSubtotal
        }

    }

    if (action.type === "MERGE_WITH__DB") {
      const newSubtotal = state.subtotal + action.cart.subtotal

      const newCartItems = [...state.items, ...action.cart.items]

      return {
        items: newCartItems,
        subtotal: newSubtotal,
      }
    }

    return DEFAULT_CART_STATE
}


export const CartContextProvider = ({ children }) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, DEFAULT_CART_STATE)
    const authCtx = useContext(AuthContext)

    const {isLoggedIn, userId } = authCtx

    // useEffect(() => {
    //   const getCart = async () => {
    //     const userRef = collection(db, 'users', userId);
    //     const userSnap = await getDoc(userRef);
    //     if (userSnap.exists()) {

    //       const userData = userSnap.data()


    //       // dispatchCartAction({type: "MERGE_WITH_DB", cart: userData.cart })

    //       console.log("Document data:", userData);


    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log("No such document!");
    //     }
    //   }

    //   if (isLoggedIn) {
    //    getCart()
    //   } else {
    //     console.log("from: local storage")
    //   }
      
    // }, [isLoggedIn, userId])

    // useEffect(() => {
    //   const updateDBCart = async () => {
    //     const userRef = doc(db, "users", userId);
    //     await updateDoc(userRef, {
    //       'cart': cartState,
    //   });
    //   }

    //   if (isLoggedIn) {
    //     updateDBCart()
    //     console.log("updated doc")
    //   }
      
    // }, [cartState, userId, isLoggedIn])

  const addToCartHandler = (item) => {
    dispatchCartAction({type: "ADD_CART_ITEM", item: item })
  };

  const removeFromCartHandler = (id, whole=false) => {
    if (whole) {
        dispatchCartAction({type: "REMOVE_WHOLE_CART_ITEM", id: id })
    } else {
        dispatchCartAction({type: "REMOVE_CART_ITEM", id: id })
    }

    
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        subtotal: cartState.subtotal,
        onAddToCart: addToCartHandler,
        onRemoveFromCart: removeFromCartHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
