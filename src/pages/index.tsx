import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/profile';
import { CompletedChanllenges } from '../components/CompletedChanllenges';

import styles from '../styles/pages/Home.module.css';
import { Countdown } from '../components/CountDown';

import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChanllenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>)
}
