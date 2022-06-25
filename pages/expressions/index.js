import React from "react";
import Head from "next/head";
import Header from "../../components/Layout/Header";
import HealthAndWellness from "../../components/Expressions/HealthAndWellness";
import Inspiration from "../../components/Expressions/Inspiration";
import Arts from "../../components/Expressions/Arts";
import ExpressionsLanding from "../../components/Expressions/ExpressionsLanding";
import Entertainment from "../../components/Expressions/Entertainment";
import Business from "../../components/Expressions/Business";
import Footer from "../../components/Layout/Footer";
import styles from "../../styles/Home.module.css";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const programsCollectionRef = collection(db, "programs");

const featuredCollectionRef = collection(db, "featured");

const videosCollectionRef = collection(db, "videos")
export async function getStaticProps() {
  //   // const videosDataFrb = await getDocs(videosCollectionRef);
  const videosDataFrb = await getDocs(videosCollectionRef);

  const programsData = await getDocs(programsCollectionRef);

  const featuredDataFrb = await getDocs(featuredCollectionRef);

  const featuredData = featuredDataFrb.docs.map(doc =>  {
    return (
      {...doc.data(), id: doc.id}
    )
  })


  const programs = programsData.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  const videosData = videosDataFrb.docs.map(doc =>  {
    return {...doc.data(), id: doc.id}
  })


  return {
    props: {
      videosData,
      featuredData,
      programs,
    },
  };
}

const Expressions = ({videosData, featuredData, programs}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Expressions | IAMKAFFY Brand</title>
        <meta name="description" content="Expressions of Kaffy the Dance Qween" />
      </Head>

      <main className={styles.main}>
        <Header />
        <ExpressionsLanding />
        <HealthAndWellness programs={programs} />
        <Inspiration featuredData={featuredData} />
        <Arts />
        <Entertainment videosData={videosData} />
        <Business />
      </main>
      <Footer />
    </div>
  );
};

export default Expressions;
