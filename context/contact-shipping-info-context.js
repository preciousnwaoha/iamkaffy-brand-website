import React, { useReducer, useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, doc, updateDoc, getDoc } from "firebase/firestore";
import AuthContext from "./auth-context";

const usersCollectionRef = collection(db, "users");

const ContactShippingInfoContext = React.createContext({
  contactInfo: {},
  updateContactInfo: (contactInfo) => {},
});

const DEFAULT_CSI = {
  firstName: '',
  lastName: '',
  country: '',
  state: '',
  city: '',
  address: '',
  zipCode: '',
  phone: '',
  contactEmail: '',
  validity: false,
}

export const ContactShippingInfoContextProvider = ({ children }) => {
  const [contactInfo, setContactInfo] = useState(DEFAULT_CSI);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const getCart = async (id) => {
      const userRef = doc(usersCollectionRef, id);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data();
        setContactInfo(userData.contactShippingInfo);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };

    if (authCtx.isLoggedIn) {
      getCart(authCtx.userId);
    } else {
      console.log("not logged in: get local storage");
    }
  }, [authCtx]);


  const updateContactInfoDB = async (newContactInfo) => {
    const userRef = doc(usersCollectionRef, authCtx.userId);

    await updateDoc(userRef, {
      contactShippingInfo: newContactInfo,
    });
    console.log("updateContactInfoDB")
    
  };


  const updateContactInfo = (newContactInfo) => {
      
    if (authCtx.isLoggedIn) {
      updateContactInfoDB(newContactInfo);
    }
     
      setContactInfo(newContactInfo);
      console.log("updateContactInfoState")
  };

  console.log("contactInfo: ", contactInfo)


  return (
    <ContactShippingInfoContext.Provider
      value={{
        contactInfo: contactInfo,
        updateContactInfo: updateContactInfo,
      }}
    >
      {children}
    </ContactShippingInfoContext.Provider>
  );
};

export default ContactShippingInfoContext;
