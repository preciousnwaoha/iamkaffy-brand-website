import Head from "next/head";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import styles from "../../styles/Home.module.css";
import FeaturedSection from "../../components/Featured/FeaturedSection";
import VaultLanding from "../../components/Vault/VaultLanding";
import VaultVideos from "../../components/Vault/VaultVideos";
import VaultPhotos from "../../components/Vault/VaultPhotos";

import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const videosCollectionRef = collection(db, "videos")
const photosCollectionRef = collection(db, "photos");
const featuredCollectionRef = collection(db, "featured");

export async function getStaticProps() {
  const videosDataFrb = await getDocs(videosCollectionRef);
  const photosDataFrb = await getDocs(photosCollectionRef);
  const featuredDataFrb = await getDocs(featuredCollectionRef);

  const featuredData = featuredDataFrb.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  const photosData = photosDataFrb.docs.map(doc =>  {
    return (
      {...doc.data(), id: doc.id}
    )
  })

  const videosData = videosDataFrb.docs.map(doc =>  {
    return (
      {...doc.data(), id: doc.id}
    )
  })

  return {
    props: {
      featuredData,
      videosData,
      photosData: photosData,
    },
  };
}

const Vault = ({ featuredData, videosData, photosData }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Videos, Photos &and; Features | IAMKAFFY Brand</title>
        <meta name="description" content="Kaffy's Videos, Photos and Featured Content at IAMKAFFY Brand Website" />
      </Head>

      <main className={styles.main}>
        <Header />
        <VaultLanding />
        <VaultVideos videosData={videosData} />
        <VaultPhotos photosData={photosData} />
        <FeaturedSection featuredData={featuredData} />
      </main>

      <Footer />
    </div>
  );
};

export default Vault;
