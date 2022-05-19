import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FRB_API_KEY,
  authDomain: "iamkaffy-brand-site.firebaseapp.com",
  projectId: "iamkaffy-brand-site",
  storageBucket: "iamkaffy-brand-site.appspot.com",
  messagingSenderId: "320110998977",
  appId: "1:320110998977:web:0d529054a1e5cd30d3eb40",
  measurementId: "G-RKDY64P25G",
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(app);
