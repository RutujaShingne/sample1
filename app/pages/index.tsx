import Head from 'next/head';

import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Food Shopping Website</title>
        <meta name="description" content="A simple food shopping website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1>Welcome to Food Shopping Website</h1>
        <div className={styles.products}>
          <ProductCard name="Apple" price="1.50" image="/images/noodles.jpg" />
          <ProductCard name="Banana" price="0.80" image="/images/man.jpg" />
        </div>
      </main>
    </div>
  );
};

export default Home;
