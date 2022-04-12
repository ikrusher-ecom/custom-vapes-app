import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import ImageInput from './components/ImageInput'
import StepOne from './components/StepOne'

export default function Home() {
  const [cate, setCate] = useState("");
  
  const pull_cate = (cate) => {
    console.log(cate);
    setCate(cate);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Custom Vapes iKrusher</title>
        <meta name="description" content="Custom Vapes iKrusher" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css" /> */}
        <link rel="stylesheet" href="https://www.ikrusher.com/static/frontend/Mgs/claue/en_US/css/custom-styles.min.css" />
        <link rel="stylesheet" href="https://www.ikrusher.com/static/frontend/Mgs/claue/en_US/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://www.ikrusher.com/static/frontend/Mgs/claue/en_US/css/theme.min.css" />
      </Head>

      <main className={styles.main}>
        <ImageInput />
        <StepOne category={pull_cate} />
      </main>

      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  )
}
