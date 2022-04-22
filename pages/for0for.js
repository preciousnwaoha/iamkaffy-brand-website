import Head from 'next/head'
import Error404 from '../components/error404'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import styles from '../styles/Home.module.css'


export default function Home( { videosData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kaffy Brand 404 pAGE</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>

      <main className={styles.main}>
       <Header />
       
       <Error404 />
      </main>
      <Footer />
    </div>
  )
}