import Head from "next/head";
import Header from "../../components/Layout/Header";
import ContactLanding from "../../components/Contact/ContactLanding/ContactLanding";
import Footer from "../../components/Layout/Footer";
import styles from "../../styles/Home.module.css";
import GetInTouch from "../../components/Contact/GetInTouch";
import FansConnect from "../../components/Contact/FansConnect";

import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";



const contactDetailsCollectionRef = collection(db, "contactDetails")


export const getStaticProps = async () => {
  
  
  
  const contactDetailsData = await getDocs(contactDetailsCollectionRef);

  const contactDetails = contactDetailsData.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  


  return {
    props: {
      propsData: contactDetails,
    }
  }
}

const Contact = ({ propsData }) => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>IAMKAFFY Brand Contact Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <Header />
        <ContactLanding />
        <GetInTouch data={propsData} />
        <FansConnect />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
