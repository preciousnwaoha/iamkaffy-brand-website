import React, { useState, useContext, useEffect, useCallback } from "react";
import AuthContext from "./auth-context"
import { db } from "../firebase";
import { collection, doc, updateDoc, getDoc } from "firebase/firestore";



const usersCollectionRef = collection(db, "users");

const ItemsContext = React.createContext({
  viewedItems: [],
  addItem: (item) => {},
//   updateBought: (item) => {}
});





export const ItemsContextProvider = ({ children }) => {
    const [viewedItems, setViewedItems] = useState([])
    const authCtx = useContext(AuthContext)

    const addItemHandler = (product) => {
        
      const existingItemIndex = viewedItems.findIndex(item => item.id === product.id)

      const existingItem = viewedItems[existingItemIndex]

      let updatedItems;

      if (existingItem) {
          return  
      } else {
          updatedItems = viewedItems.concat(product);
          setViewedItems(updatedItems)
      }
  }

        

  


    useEffect(() => {
      const getViewedItems = async (id) => {
        const userRef = doc(usersCollectionRef, id);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const userData = userSnap.data();

          const viewedItemsFromDB = [...userData.viewedItems]

          console.log('viewedItemsFromDB', viewedItemsFromDB)

          let updatedItems = [...viewedItems];

          viewedItemsFromDB.forEach( product => {
            const existingItemIndex = viewedItems.findIndex(item => item.id === product.id)
      
            const existingItem = viewedItems[existingItemIndex]
      
            if (existingItem) {
                return  
            } else {
                updatedItems = updatedItems.concat(product);
                
            }
          })
      
          setViewedItems(updatedItems)
  
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      };
  
      if (authCtx.isLoggedIn) {
        getViewedItems(authCtx.userId);
      } else {
        console.log("not logged in: get local storage");
      }
    }, [authCtx,]);
  
  
    console.log("viewedItems: ", viewedItems)
  
    useEffect(() => {
      const updateDBCart = async (id) => {
        const userRef = doc(usersCollectionRef, id);
        await updateDoc(userRef, {
          viewedItems: viewedItems,
        });
        
      };
  
      if (authCtx.isLoggedIn) {
        updateDBCart(authCtx.userId);
      } else {
        console.log("Send to LS cos not logged in");
      }
    }, [viewedItems]);

    

  return (
    <ItemsContext.Provider
      value={{
        viewedItems: viewedItems,
        addItem: addItemHandler,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;
