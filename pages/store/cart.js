import Head from "next/head";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import styles from "../../styles/Shop.module.css";
import MailingList from "../../components/Store/MailingList";
import CartPage from "../../components/Store/Cart/CartPage";

const Cart = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>In Your Cart - Kaffy Store | IAMKAFFY Brand</title>
        <meta name="description" content="Products In Your Cart in Kaffy Store" />
      </Head>

      <main className={styles.main}>
        <Header />
        <CartPage />
        <MailingList />
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
