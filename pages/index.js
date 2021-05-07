import Head from 'next/head'
import LottiePlayer from '../components/lottie'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.minHeight}>
      <Head>
        <title>Baab World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid justify-items-center align-text-center align-items-center">
        <LottiePlayer />
        <div className="italic text-gray-300 text-xl my-8">Coming Soon...</div>
      </main>
    </div>
  )
}
