import React from 'react'
import Head from "next/head"
import Header from '../../components/Layout/Header'
import Story from '../../components/Layout/About/Story'
import MoreThanADancer from '../../components/Layout/About/MoreThanADancer'
import Accolades from '../../components/Layout/About/Accolades'
import Footer from '../../components/Layout/Footer'
import styles from "../../styles/Home.module.css"


const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Dancer Kaffy Shatau</title>
        <meta name="description" content="About popular Dancer Kaffy Shatau aka KAFFY DANCE" />
        
      </Head>

      <main className={styles.main}>
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