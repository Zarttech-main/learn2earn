import Head from 'next/head';

import routes from '../utils/routes';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import styles from '../styles/Home.module.css'

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Welcome - Learn2Earn</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to</h1>
          <div className={styles.logo}></div>
          <span className={styles.intro}>
            Where we Incentivise Learning with Rewards through simple yet effective, Smart Contract Challenges
          </span>
          <Button title="Get Started" onClick={() => router.push(routes.Login)} />
        </main>

        <footer className={styles.footer}>
          <div className={styles.illustration1}></div>
          <div className={styles.illustration2}></div>
        </footer>
      </div>
    </>
  )
}


export default Home;