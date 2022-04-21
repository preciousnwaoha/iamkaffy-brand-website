import React from 'react'
import UIBigTitle from '../../UI/UIBigTitle'
import classes from "./StoreCollections.module.css"
import StoreCollectionsItem from './StoreCollectionsItem'






const StoreCollections = ( { collectionsData }) => {
  return (
    <div className={classes.collections}>
        <UIBigTitle className={classes["collections-title"]} titleText={"Collections"} />
        <div className={classes["collections-content"]}>
        {collectionsData.map(collection => (
            <StoreCollectionsItem
            key={collection.id}
            id={collection.id}
            image={collection.image}
            name={collection.name}
            />
        ))}
        </div>
        
    </div>
  )
}

export default StoreCollections