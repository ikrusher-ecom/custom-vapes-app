/*
 * @Author: Jinqi Li
 * @Date: 2022-04-12 00:11:40
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-17 17:57:38
 * @FilePath: /custom-vapes-app/pages/index.js
 */
import * as React from 'react';
import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import StepOne from '../components/StepOne';
import StepThree from '../components/StepThree';
import StepTwo from '../components/StepTwo';
import { ikrusherTheme } from '../lib/theme';
import { ThemeProvider } from '@mui/material/styles';

export default function Home() {
  const [cate, setCate] = useState("");
  const [prod, setProd] = useState("");

  const pull_cate = (data) => {
    console.log(`pull cate: ${data}`);
    setCate(data);
  }

  const pull_prod = (data) => {
    console.log(`pull prod: ${data}`);
    setProd(data);
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
        {/* <ImageInput /> */}
        <ThemeProvider theme={ikrusherTheme}>
          <StepOne category={pull_cate} />
          <StepTwo cateSet={cate} product={pull_prod} />
          <StepThree prodName={prod} />
        </ThemeProvider>
      </main>

      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  )
}
