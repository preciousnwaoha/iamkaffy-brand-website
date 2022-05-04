import React, { useState, useEffect, useCallback } from "react";



const ItemsContext = React.createContext({
  viewedItems: [],
  addItem: (item) => {},
//   updateBought: (item) => {}
});




export const ItemsContextProvider = ({ children }) => {
    const [viewedItems, setViewedItems] = useState([])

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
