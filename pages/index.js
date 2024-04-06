import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = () => {
    // Here you would integrate the Stripe payment
    console.log('Payment simulated.');
    setIsPaid(true);
  };

  const handlePayAgain = () => {
    setIsPaid(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!isPaid ? (
          <div>
            <h1>Welcome to the charging service</h1>
            <label htmlFor="duration">Choose your charging duration:</label>
            <select id="duration" name="duration">
              <option value="1">1 hour</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
            </select>
            <button onClick={handlePayment}>Pay Now</button>
          </div>
        ) : (
          <div>
            <h1>Payment Successful!</h1>
            <p>Your laptop will start charging shortly.</p>
            <button onClick={handlePayAgain}>Pay Again</button>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        {/* Footer content goes here */}
      </footer>
    </div>
  );
}
