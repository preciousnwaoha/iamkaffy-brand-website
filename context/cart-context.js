import React, { useReducer, useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, doc, updateDoc, getDoc } from "firebase/firestore";
import AuthContext from "./auth-context";

const usersCollectionRef = collection(db, "users");

const CartContext = React.createContext({
  items: [],
  subtotal: 0,
  onAddToCart: (item) => {},
  onRemoveFromCart: (id) => {},
  onClearCart: () => {},
});

const DEFAULT_CART_STATE = {
  items: [],
  subtotal: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const updatedSubtotal =
      state.subtotal + action.item.price * action.item.quantity;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
        selectedSizes: [
          ...existingCartItem.selectedSizes,
          ...action.item.selectedSizes,
        ],
        selectedColors: [
          ...existingCartItem.selectedColors,
          ...action.item.selectedColors,
        ],
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      subtotal: updatedSubtotal,
    };
  }

  if (action.type === "REMOVE_CART_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    const updatedSubtotal = state.subtotal - existingCartItem.price;
    let updatedItems;

    if (existingCartItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      subtotal: updatedSubtotal,
    };
  }
  if (action.type === "REMOVE_WHOLE_CART_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    const updatedSubtotal =
      state.subtotal - existingCartItem.price * existingCartItem.quantity;
    let updatedItems = state.items.filter((item) => item.id !== action.id);

    return {
      items: updatedItems,
      subtotal: updatedSubtotal,
    };
  }

  if (action.type === "ADD_CART") {
    let updatedItems = [...state.items];
    let updatedSubtotal = state.subtotal;

    action.cart.items.forEach((item) => {
      const existingCartItemIndex = state.items.findIndex(
        (itema) => itema.id === item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      if (!!existingCartItem === false) {
        updatedSubtotal += item.price * item.quantity;
        updatedItems = updatedItems.concat(item);
      }
    });


    return {
      items: updatedItems,
      subtotal: updatedSubtotal,
    };
  }

  if (action.type === "CLEAR_CART") {
    

    return DEFAULT_CART_STATE;
  }

  return DEFAULT_CART_STATE;
};

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    DEFAULT_CART_STATE
  );
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const getCart = async (id) => {
      const userRef = doc(usersCollectionRef, id);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data();
        dispatchCartAction({ type: "ADD_CART", cart: userData.cart });
      } else {
        // doc.data() will be undefined in this case
      }
    };

    if (authCtx.isLoggedIn) {
      getCart(authCtx.userId);
    } else {
      // "not logged in: get local storage"
      if (typeof window !== "undefined") {
        let cartInLS = JSON.parse(localStorage.getItem("cart"));
        if (cartInLS) {
          dispatchCartAction({ type: "ADD_CART", cart: cartInLS });
        }
      }
    }
  }, [authCtx]);

  useEffect(() => {
    const updateDBCart = async (id) => {
      const userRef = doc(usersCollectionRef, id);
      await updateDoc(userRef, {
        cart: cartState,
      });
    };

    if (authCtx.isLoggedIn) {
      updateDBCart(authCtx.userId);
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cartState));
    }
  }, [cartState]);

  const addToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_CART_ITEM", item: item });
  };

  const removeFromCartHandler = (id, whole = false) => {
    if (whole) {
      dispatchCartAction({ type: "REMOVE_WHOLE_CART_ITEM", id: id });
    } else {
      dispatchCartAction({ type: "REMOVE_CART_ITEM", id: id });
    }
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        subtotal: cartState.subtotal,
        onAddToCart: addToCartHandler,
        onRemoveFromCart: removeFromCartHandler,
        onClearCart: clearCartHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
