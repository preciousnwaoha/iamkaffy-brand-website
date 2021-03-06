import Head from "next/head";
import Header from "../../../components/Layout/Header";
import StoreHeader from "../../../components/Store/StoreHeader/StoreHeader";
import Collection from "../../../components/Store/StoreCollections/Collection";
import MailingList from "../../../components/Store/MailingList";
import Footer from "../../../components/Layout/Footer";
import styles from "../../../styles/Shop.module.css";

import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import ViewedProducts from "../../../components/Store/Product/ViewedProducts/ViewedProducts";

const collectionsCollectionRef = collection(db, "collections");
const productsCollectionRef = collection(db, "products");

export const getStaticPaths = async () => {
  const data = await getDocs(collectionsCollectionRef);

  const listOfIds = data.docs.map((doc) => {
    return {
      params: {
        id: doc.id,
      },
    };
  });

  return {
    paths: listOfIds,
    fallback: false,
  };
};


export const getStaticProps = async ({ params }) => {
  const collectionsData = await getDocs(collectionsCollectionRef);
  const productsData = await getDocs(productsCollectionRef);

  const collections = collectionsData.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  })

  const [collection] = collectionsData.docs
    .filter((doc) => {
      return params.id === doc.id;
    })
    .map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

  const productsList = productsData.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  const filteredProductsList = productsList.filter((product) =>
    product.collections.includes(collection.name)
  );

  const propsData = { collections: collections, collection: collection, products: filteredProductsList };

  return {
    props: {
      propsData,
    },
  };
};



const CollectionPage = ({ propsData }) => {

  console.log(propsData)
  return (
    <div className={styles.container}>
      <Head>
        <title>Kaffy Store {propsData.collection.name} Collection | IAMKAFFY Brands</title>
        <meta name="description" content="Cookie Process" />
      </Head>

      <main className={styles.main}>
        <Header />
        <StoreHeader collections={propsData.collections} />
        <Collection data={propsData} />
        <ViewedProducts />
        <MailingList />
      </main>
      <Footer />
    </div>
  );
};

export default CollectionPage;
