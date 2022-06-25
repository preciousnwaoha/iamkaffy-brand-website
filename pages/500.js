import React from "react";
import Head from "next/head";
import Error from "../components/Error";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/Home.module.css";

const Error404Page = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Internal Server Error | IAMKAFFY Brand</title>
        <meta name="description" content="Internal Server Error - something went wrong error 500 at IAMKAFFY Brand Website" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Error type={"500"} />
      </main>
      <Footer />
    </div>
  );
};

export default Error404Page;
