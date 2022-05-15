import Head from "next/head";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

import MailingList from "../../components/Store/MailingList";
import StoreHeader from "../../components/Store/StoreHeader/StoreHeader";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore"

import styles from "../../styles/Shop.module.css";
import Login from "../../components/Auth/Login";

const collectionsCollectionRef = collection(db, "collections")

export const getStaticProps = async () => {
  
  
  const collectionsData = await getDocs(collectionsCollectionRef);

  const collections = collectionsData.docs.map(doc =>  {
    
    return (
      {...doc.data(), id: doc.id}
    )
  })

  const propsData = { collections: collections, };

  return {
    props: {
      propsData
    }
  }
}




const LoginPage = ({ propsData }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>IAMKAFFY Brand Store Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <Header />
        <StoreHeader isLandingPage={false} collections={propsData.collections} />
        <Login />   
        <MailingList />
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;