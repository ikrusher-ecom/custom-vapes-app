import '../styles/globals.css';
import App from 'next/app';
import Head from 'next/head';
import Cookies from 'universal-cookie';
import consts from '../consts';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const cookies = new Cookies(appContext.ctx.req.headers.cookie);
  const password = cookies.get(consts.SiteReadCookie) ?? '';

  if (password === 'b8vE&hY7k*5$') {
    appProps.pageProps.hasReadPermission = true;
  }

  return { ...appProps };
};

export default MyApp
