import Head from "next/head";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import styles from "../../styles/Shop.module.css";
import MailingList from "../../components/Store/MailingList";
import StoreHeader from "../../components/Store/StoreHeader/StoreHeader";

import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore"
import StoreSupport from "../../components/Store/Support/StoreSupport";

const collectionsCollectionRef = collection(db, "collections")

export const getStaticProps = async () => {
  
  const collectionsData = await getDocs(collectionsCollectionRef);

  const collections = collectionsData.docs.map(doc =>  {
    return (
      {...doc.data(), id: doc.id}
    )
  })


  const propsData = { collections: collections};


  return {
    props: {
      propsData
    }
  }
}




const Store = ({ propsData }) => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Support - Store | IAMKAFFY Brand</title>
        <meta name="description" content="Contact Support at IAMKAFFY Brand" />
      </Head>

      <main className={styles.main}>
        <Header />
        {/* <StoreLanding  /> */}
        <StoreHeader isLandingPage={false} collections={propsData.collections} />
        <StoreSupport />
        
        <MailingList />
      </main>
      <Footer />
    </div>
  );
};

export default Store;
