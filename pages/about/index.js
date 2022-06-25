import React, { useContext } from 'react'
import Head from "next/head"
import Header from '../../components/Layout/Header'
import Story from '../../components/About/Story'
import MoreThanADancer from '../../components/About/MoreThanADancer'
import Accolades from '../../components/About/Accolades'
import Footer from '../../components/Layout/Footer'
import Effect5 from "../../components/UI/Effects/Effect5"
import styles from "../../styles/Home.module.css"


const About = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>About Dancer Kaffy Shatau</title>
        <meta name="description" content="About Dancer Kaffy Shatau aka Kaffy the Dancer Qween" />
        
      </Head>

      <main className={styles.main}>
        <Effect5 className={styles["effect5-in-about-page"]} />
       <Header />
       <Story />
       <MoreThanADancer />
       <Accolades />
       
      </main>
      <Footer />
    </div>
  )
}

export default About