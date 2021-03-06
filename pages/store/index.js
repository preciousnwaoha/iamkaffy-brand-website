import Head from "next/head";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import styles from "../../styles/Shop.module.css";
import StoreLanding from "../../components/Store/StoreLanding";
import StoreCollections from "../../components/Store/StoreCollections/StoreCollections"
import CollectionInHome from "../../components/Store/StoreCollections/CollectionInHome";
import MailingList from "../../components/Store/MailingList";
import StoreHeader from "../../components/Store/StoreHeader/StoreHeader";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore"
import ViewedProducts from "../../components/Store/Product/ViewedProducts/ViewedProducts";



const productsCollectionRef = collection(db, "products")
const collectionsCollectionRef = collection(db, "collections")

export const getStaticProps = async () => {
  
  
  const collectionsData = await getDocs(collectionsCollectionRef);
  const productsData = await getDocs(productsCollectionRef);
 

  const collections = collectionsData.docs.map(doc =>  {
    
    return (
      {...doc.data(), id: doc.id}
    )
  })



  const products = productsData.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  const propsData = { collections: collections, products: products };


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
        <title>Kaffy Store | IAMKAFFY Brand</title>
        <meta name="description" content="Kaffy Store Homepage" />
      </Head>

      <main className={styles.main}>
        <Header />
        {/* <StoreLanding  /> */}
        <StoreHeader isLandingPage={false} collections={propsData.collections} />
        <StoreCollections collectionsData={propsData.collections} />
        <CollectionInHome data={ {collection: propsData.collections[0], products: propsData.products} } />
        <CollectionInHome data={ {collection: propsData.collections[1], products: propsData.products} } />
        <CollectionInHome data={ {collection: propsData.collections[2], products: propsData.products} }  />
       <ViewedProducts inStoreHome={true} />
        {/* <ProductReviews /> */}
        <MailingList />
      </main>
      <Footer />
    </div>
  );
};

export default Store;
