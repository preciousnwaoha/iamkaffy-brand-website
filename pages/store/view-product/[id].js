import Head from "next/head";
import Header from "../../../components/Layout/Header";
import StoreHeader from "../../../components/Store/StoreHeader/StoreHeader";
import ViewProduct from "../../../components/Store/Product/ViewProduct/ViewProduct";
import ProductReviews from "../../../components/Store/ProductReview/ProductReviews";
import MailingList from "../../../components/Store/MailingList";
import Footer from "../../../components/Layout/Footer";
import styles from "../../../styles/Shop.module.css";

import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import ViewedProducts from "../../../components/Store/Product/ViewedProducts/ViewedProducts";

const collectionsCollectionRef = collection(db, "collections");
const productsCollectionRef = collection(db, "products");
const usersCollectionRef = collection(db, "users");

export const getStaticPaths = async () => {
  const data = await getDocs(productsCollectionRef);

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
  const reviewsRef = collection(db, "products", params.id, "reviews");

  const collectionsData = await getDocs(collectionsCollectionRef);
  const productsData = await getDocs(productsCollectionRef);
  const reviewsData = await getDocs(reviewsRef);

  const collectionsPropsData = collectionsData.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  const [product] = productsData.docs
    .filter((doc) => {
      return params.id === doc.id;
    })
    .map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

  const reviews = reviewsData.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  const propsData = {
    product: product,
    reviews,
    collections: collectionsPropsData,
  };

  return {
    props: {
      propsData,
    },
  };
};

const ViewProductPage = ({ propsData }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>KAFFY Store Product View | IAMKAFFY Brand</title>
        <meta name="description" content={`${propsData.product.name} in Kaffy Store from IAMKAFFY Brand`}/>
      </Head>

      <main className={styles.main}>
        <Header />
        <StoreHeader collections={propsData.collections} />
        <ViewProduct data={propsData} />
        {/* <ProductReviews product={propsData.product} /> */}
        <ProductReviews reviews={propsData.reviews} product={propsData.product} />

        <ViewedProducts newProduct={propsData.product} />
        <MailingList />
      </main>
      <Footer />
    </div>
  );
};

export default ViewProductPage;
