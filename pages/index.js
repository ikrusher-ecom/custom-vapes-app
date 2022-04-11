import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ImageInput from './components/ImageInput'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Custom Vapes iKrusher</title>
        <meta name="description" content="Custom Vapes iKrusher" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ImageInput />
      </main>

      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  )
}
