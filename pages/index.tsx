import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tubes Bike Shop in St. Joseph, MO</title>
        <meta name="description" content="Tubes Bike Shop in St. Joseph, MO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        {/* <Image
          src="/logo.svg"
          alt="Tubes Bike Shop in St. Joseph, MO"
          width={500}
          height={360}
        /> */}
        <Image
          src="/logo-with-air.svg"
          alt="Tubes Bike Shop in St. Joseph, MO"
          width={500}
          height={360}
        />

        <p>Coming soon... 🍻</p>
      </header>

      {/* <main className={styles.main}></main> */}

      <footer className={styles.footer}>
        <p>
          <small>
            &copy; {new Date().getFullYear()} Tubes Bike Shop - All rights
            reserved
          </small>
        </p>
      </footer>
    </div>
  );
};

export default Home;
