import Head from 'next/head'
import Foundation from '../../components/Impact/Foundation'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'
import styles from "../../styles/Home.module.css"
import ImpactLanding from '../../components/Impact/ImpactLanding'
import SuccessStories from '../../components/Impact/SuccessStories'
import Synopsis from '../../components/Impact/Synopsis/Synopsis'

import {db} from "../../firebase"
import { collection, getDocs } from 'firebase/firestore'

const synopsisCollectionRef = collection(db, "synopsis")
const successStoriesCollectionRef = collection(db, "successStories")

// const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems"

export async function getStaticProps() {
  // const videosDataFrb = await getDocs(videosCollectionRef);
  // const videosEmbedIdData = await getDocs(videosEmbedIdCollectionRef)

  const synopsisData = await getDocs(synopsisCollectionRef);

  const successStoriesData = await getDocs(successStoriesCollectionRef);

  const synopsis = synopsisData.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  const successStories = successStoriesData.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return {
    props: {
      synopsis,
      successStories,
    }
  }
}


const Impact = ( {successStories, synopsis}) => {
  return (
    <div className={styles.container} >
      <Head>
        <title>Kaffy&apos;s Impact</title>
        <meta name="description" content="Impact of Kaffy the Dance Qween" />
      </Head>

      <main className={styles.main}>
       <Header />
       <ImpactLanding />
       <SuccessStories successStories={successStories} />
       <Synopsis synopsis={synopsis} />
       <Foundation />
       
      </main>
      <Footer />
    </div>
  )
}

export default Impact