import Head from "next/head";
// import Cookies from "js-cookie";
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import Services from "../components/Services/Services";
import SuccessStories from "../components/Impact/SuccessStories";
import GetInTouch from "../components/Contact/GetInTouch";
import Story from "../components/About/Story";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Landing from "../components/Landing";
import VaultVideos from "../components/Vault/VaultVideos";
import BrandsWorkedWith from "../components/Expressions/BrandsWorkedWith";
import Feature from "../components/Featured/Feature";
import Effect3 from "../components/UI/Effects/Effect3";
import styles from "../styles/Home.module.css";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const videosCollectionRef = collection(db, "videos")
const contactDetailsCollectionRef = collection(db, "contactDetails");
const successStoriesCollectionRef = collection(db, "successStories");
const featuredCollectionRef = collection(db, "featured");

export async function getStaticProps() {
  const videosDataFrb = await getDocs(videosCollectionRef);
  const contactDetailsData = await getDocs(contactDetailsCollectionRef);
  const successStoriesData = await getDocs(successStoriesCollectionRef);
  const featuredDataFrb = await getDocs(featuredCollectionRef);


  const videosData = videosDataFrb.docs.map(doc =>  {
    return {...doc.data(), id: doc.id}
  })

  const featuredData = featuredDataFrb.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });


  const contactDetails = contactDetailsData.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  const successStories = successStoriesData.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return {
    props: {
      videosData,
      contactDetails,
      successStories,
      featuredData,
    },
  };
}

export default function Home({
  featuredData,
  videosData,
  successStories,
  contactDetails,
}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | IAMKAFFY Brand</title>
        <meta name="description" content="Kaffy the Dance Queen's Personal Brand Official Website Homepage - IAMKAFFY" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Landing />
        <div style={{ position: "relative" }}>
          <Effect3 className={styles["effect-item"]} />
          <Feature feature={featuredData[0]} />
        </div>

        <SuccessStories successStories={successStories} />
        <Story />
        <VaultVideos videosData={videosData} />
        <Services inHome={true} />
        <BrandsWorkedWith />
        <GetInTouch data={contactDetails} />
        
      </main>
      <Footer />
    </div>
  );
}
