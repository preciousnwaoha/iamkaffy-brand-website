import Head from "next/head";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import styles from "../../styles/Shop.module.css";
import StoreLanding from "../../components/Store/StoreLanding";
import StoreCollections from "../../components/Store/StoreCollections/StoreCollections"
import MailingList from "../../components/Store/MailingList";
import StoreHeader from "../../components/Store/StoreHeader/StoreHeader";
import { db } from "../../firebase";
import { collection, getDoc, getDocs } from "firebase/firestore"

const DEFAULT_STORE_DATA = {
  collections: [
    {
      name: "T-Shirts",
      statement: "Here's your T-shirts from kaffy",
      subCollections: ["Unisex T-Shirts", "Native"],
      collectionImage: "/images/kaffy-photo-5.jpg",
    },
    {
      name: "T-Shirts",
      statement: "Here's your T-shirts from kaffy",
      subCollections: ["Unisex T-Shirts", "Native"],
      collectionImage: "/images/kaffy-photo-5.jpg",
    },
    {
      name: "T-Shirts",
      statement: "Here's your T-shirts from kaffy",
      subCollections: [],
      collectionImage: "/images/kaffy-photo-5.jpg",
    },
    {
      name: "For Dancers",
      statement: "Dance T-shirts from kaffy",
      subCollections: ["Unisex T-Shirts"],
      collectionImage: "/images/kaffy-photo-6.jpg",
    },
    {
      name: "T-Shirts",
      statement: "Here's your T-shirts from kaffy",
      subCollections: ["Unisex T-Shirts", "Native"],
      collectionImage: "/images/kaffy-photo-5.jpg",
    },
  ],

  items: [
    {
      name: "Dancia",
      images: ["/images/fit-5.jpg", "/images/fit-3.jpg"],
      description:
        "Everyone need a cozy go-to hoodeie to curl up in, so go for one that's soft, smooth, and stylish. It's the perfect choice for cooler evenings!",
      specs: [
        "50% cotton, 50% polyester",
        "Double-lined hood",
        "Double-needle stiching throughout",
      ],
      subCollections: ["Unisex T-Shirts"],
      collections: ["T-Shirts"],
      colors: ["white", "black", "pink"],
      sizes: [
        {
          size: "S",
          numLeft: 4,
        },
        {
          size: "M",
          numLeft: 4,
        },
        {
          size: "L",
          numLeft: 4,
        },
        {
          size: "XL",
          numLeft: 4,
        },
        {
          size: "2XL",
          numLeft: 4,
        },
      ],
      reviews: [
        {
          rating: 3,
          reviewerName: "Precious Nwaoha",
          date: "2022-05-01",
          itemType: {
            color: "pink",
            size: "L",
          },
    
          itemName: "bruh",
          reviewMessage: "I like this sweater a lot",
        },
        {
          rating: 3,
          reviewerName: "Precious Nwaoha",
          date: "2022-05-01",
          itemType: {
            color: "pink",
            size: "L",
          },
    
          itemName: "bruh",
          reviewMessage: "I like this sweater a lot",
        },
      ],
      sizeGuide: {
        small: [27, 20],
        medium: [28, 22],
        large: [29, 24],
        xlarge: [30, 26],
      },
      date: "2022-10-11",
      price: 500.453,
      numberLeft: 50,
      numSold: 10,
    },
    {
      name: "bruh",
      images: ["/images/fit-5.jpg", "/images/fit-3.jpg"],
      description:
        "Everyone need a cozy go-to hoodeie to curl up in, so go for one that's soft, smooth, and stylish. It's the perfect choice for cooler evenings!",
      specs: [
        "50% cotton, 50% polyester",
        "Double-lined hood",
        "Double-needle stiching throughout",
      ],
      subCollections: ["Unisex T-Shirts"],
      collections: ["T-Shirts"],
      colors: ["white", "black", "pink"],
      sizes: [
        {
          size: "S",
          numLeft: 4,
        },
        {
          size: "M",
          numLeft: 4,
        },
        {
          size: "L",
          numLeft: 4,
        },
        {
          size: "XL",
          numLeft: 4,
        },
        {
          size: "2XL",
          numLeft: 4,
        },
      ],
      reviews: [
        {
          rating: 3,
          reviewerName: "Precious Nwaoha",
          date: "2022-05-01",
          itemType: {
            color: "pink",
            size: "L",
          },
    
          itemName: "bruh",
          reviewMessage: "I like this sweater a lot",
        },
        {
          rating: 3,
          reviewerName: "Precious Nwaoha",
          date: "2022-05-01",
          itemType: {
            color: "pink",
            size: "L",
          },
    
          itemName: "bruh",
          reviewMessage: "I like this sweater a lot",
        },
      ],
      sizeGuide: {
        small: [27, 20],
        medium: [28, 22],
        large: [29, 24],
        xlarge: [30, 26],
      },
      date: "2022-10-11",
      price: 500.453,
      numberLeft: 50,
      numSold: 10,
    },
    {
      name: "KAFFY SHIRY",
      images: ["/images/fit-5.jpg", "/images/fit-3.jpg"],
      description:
        "Everyone need a cozy go-to hoodeie to curl up in, so go for one that's soft, smooth, and stylish. It's the perfect choice for cooler evenings!",
      specs: [
        "50% cotton, 50% polyester",
        "Double-lined hood",
        "Double-needle stiching throughout",
      ],
      subCollections: ["Unisex T-Shirts"],
      collections: ["T-Shirts"],
      colors: ["white", "black", "pink"],
      sizes: [
        {
          size: "S",
          numLeft: 4,
        },
        {
          size: "M",
          numLeft: 4,
        },
        {
          size: "L",
          numLeft: 4,
        },
        {
          size: "XL",
          numLeft: 4,
        },
        {
          size: "2XL",
          numLeft: 4,
        },
      ],
      reviews: [
        {
          rating: 3,
          reviewerName: "Precious Nwaoha",
          date: "2022-05-01",
          itemType: {
            color: "pink",
            size: "L",
          },
    
          itemName: "bruh",
          reviewMessage: "I like this sweater a lot",
        },
        {
          rating: 3,
          reviewerName: "Precious Nwaoha",
          date: "2022-05-01",
          itemType: {
            color: "pink",
            size: "L",
          },
    
          itemName: "bruh",
          reviewMessage: "I like this sweater a lot",
        },
      ],
      sizeGuide: {
        small: [27, 20],
        medium: [28, 22],
        large: [29, 24],
        xlarge: [30, 26],
      },
      date: "2022-10-11",
      price: 500.453,
      numberLeft: 50,
      numSold: 10,
    },
  ],
  viewdItems: [],
  cartItems: []
}


const collectionsCollectionRef = collection(db, "collections")

export const getStaticProps = async () => {
  
  
  const data = await getDocs(collectionsCollectionRef);

 

  const propsData = data.docs.map(doc =>  {
    
    return (
      {...doc.data(), id: doc.id}
    )
  })

  return {
    props: {
      propsData
    }
  }
}




const Store = ({ propsData }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>IAMKAFFY Brand Store Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <Header />
        <StoreLanding />
        <StoreHeader />
        <StoreCollections collectionsData={propsData} />
        {/* <Collection name={"T-Shirts"} isInStoreHome={true} />
        <Collection name={"T-Shirts"} isInStoreHome={false} />
        <Collection name={"For Dancers"} isInStoreHome={true} />
        <ViewProduct />
        <ProductReviews /> */}
        <MailingList />
      </main>
      <Footer />
    </div>
  );
};

export default Store;
