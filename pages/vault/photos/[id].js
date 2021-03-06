import Head from "next/head";
import Header from "../../../components/Layout/Header";
import Footer from "../../../components/Layout/Footer";
import styles from "../../../styles/Home.module.css";
import FeaturedSection from "../../../components/Featured/FeaturedSection";
import VaultLanding from "../../../components/Vault/VaultLanding";
import VaultVideos from "../../../components/Vault/VaultVideos";
import VaultPhotos from "../../../components/Vault/VaultPhotos";

import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

// const videosCollectionRef = collection(db, "videos")
const photosCollectionRef = collection(db, "photos");
const featuredCollectionRef = collection(db, "featured");

export const getStaticPaths = async () => {
  const data = await getDocs(photosCollectionRef);

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

export async function getStaticProps({ params }) {
  // const videosDataFrb = await getDocs(videosCollectionRef);
  const photosDataFrb = await getDocs(photosCollectionRef);
  const featuredDataFrb = await getDocs(featuredCollectionRef);

  const featuredData = featuredDataFrb.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  const videosData = [
    { id: "Yq99FyfnGxA", type: "landscape", from: "youtube" },
    { id: "41FLPJ5_Qwk", type: "portrait", from: "youtube" },
  ];

  const photosData = photosDataFrb.docs.map(doc =>  {
    return (
      {...doc.data(), id: doc.id}
    )
  })

  // const videosData = videosDataFrb.docs.map(doc =>  {
  //   return (
  //     {...doc.data(), id: doc.id}
  //   )
  // })

  // const [photoData] = photosData.docs
  //   .filter((doc) => {
  //     return params.id === doc.id;
  //   })
  //   .map((doc) => {
  //     return { ...doc.data(), id: doc.id };
  //   });

  const [photoData] = photosData.filter(photo => {
    return params.id === photo.id
  })

  return {
    props: {
      photoData,
      featuredData,
      videosData,
      photosData: photosData,
    },
  };
}

const Vault = ({ photoData, featuredData, videosData, photosData }) => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Kaffy Photo | IAMKAFFY Brand</title>
        <meta name="description" content={`${photoData.desc} from IAMKAFFY Brand Website"`} />
      </Head>

      <main className={styles.main}>
        <Header />
        <VaultLanding />
        <VaultVideos videosData={videosData} />
        <VaultPhotos photosData={photosData} photoData={photoData} inPhotosRoute={true} />
        <FeaturedSection featuredData={featuredData} />
      </main>

      <Footer />
    </div>
  );
};

export default Vault;
