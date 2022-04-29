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
        <title>Kaffy 404 Error</title>
        <meta name="description" content="Page not found error 404" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Error type={"404"} />
      </main>
      <Footer />
    </div>
  );
};

export default Error404Page;
