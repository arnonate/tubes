import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tubes Bike Shop in St. Joseph, MO</title>
        <meta name="description" content="Tubes Bike Shop in St. Joseph, MO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Image
              src="/logo-with-air.svg"
              alt="Tubes Bike Shop in St. Joseph, MO"
              layout="fill"
            />
          </div>
          <p>
            <a
              href="https://goo.gl/maps/GmE4dDDqhq4AVVcX6"
              target="_blank"
              rel="noreferrer"
            >
              1826 Frederick Ave
            </a>
          </p>
          {/* <Image
          src="/logo.svg"
          alt="Tubes Bike Shop in St. Joseph, MO"
          width={500}
          height={360}
        /> */}
        </header>
      </div>

      <main className={styles.main}>
        <div className={styles.banner}>
          <Image
            src="/temp2.jpg"
            alt="Tubes Bike Shop in St. Joseph, MO"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Tubes Bike Shop</h1>
            <p>
              <a
                href="https://goo.gl/maps/GmE4dDDqhq4AVVcX6"
                target="_blank"
                rel="noreferrer"
              >
                1826 Frederick Ave St. Joseph, MO 64501
              </a>
            </p>
            <p>816-205-7934</p>

            <p>
              <b>Hours:</b>
            </p>
            <p>10 - 6 Tues - Sat</p>
            <p>Closed Sun/Mon</p>
            <p>Follow us on Instagram and Facebook for special event hours!</p>

            <h2>Services:</h2>
            <p>
              We offer a full-service shop with the ability to repair most major
              bicycle parts and systems. (Exceptions would be frame repair,
              carbon fiber repair, non-Bosch electrical systems, and cosmetic
              repairs such as paint or rust removal.)
            </p>
            <p>
              The following packages as well as à la carte options are available
              (please call or bring your bike in for current pricing and
              quotes):
            </p>
            <ul>
              <li>Safety/ Performance inspection</li>
              <li>Standard Tune Up</li>
              <li>Overhaul Tune Up</li>
            </ul>
            <h2>Amenities:</h2>
            <ul>
              <li>Bike wash</li>
              <li>Air</li>
              <li>Indoor bike parking</li>
              <li>Water Fountain with Bottle Fill Station</li>
              <li>Repair Station (for club members)</li>
              <li>Shower (for club members)</li>
            </ul>
            <h2>Retail:</h2>
            <ul>
              <li>Parts</li>
              <li>Clothing</li>
              <li>Cycling Accessories</li>
              <li>Nutrition/Hydration</li>
              <li>Helmets</li>
              <li>Shoes</li>
              <li>Bike Racks</li>
            </ul>
            <h2>Tools Bar and Lounge:</h2>
            <ul>
              <li>Bottle and Draft Beer</li>
              <li>Wine</li>
              <li>Snacks</li>
              <li>Seating</li>
              <li>Indoor Bike Parking</li>
              <li>Wi-Fi</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          <small>
            &copy; {new Date().getFullYear()} Tubes Bike Shop - All rights
            reserved
          </small>
        </p>
      </footer>
    </>
  );
};

export default Home;
