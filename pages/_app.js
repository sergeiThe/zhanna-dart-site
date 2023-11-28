import {AnimatePresence, motion as m} from 'framer-motion'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Script from 'next/script'
import BookButton from '../components/BookButton'
import Hamburger from '../components/Hamburger'
import Menu from '../components/Menu'
import MenuContextProvider from '../store/menu-ctx'
import '../styles/index.scss'


function MyApp({ Component, pageProps }) {

  const router = useRouter()

  // console.log(router.asPath)

  return (
    <>
      <Head>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
      </Head>

        {/*GOOGLE TAG*/}


        <Script id="gtm" strategy="afterInteractive">{`(function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({
            'gtm.start':
              new Date().getTime(), event: 'gtm.js'
          });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-NV6FBQ5W');`}</Script>


      <Script  strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-TKN1VDPJBY"></Script>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-TKN1VDPJBY');
      `}
      </Script>

      {/*GOOGLE TAG*/}

      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/ns.html?id=GTM-NV6FBQ5W"></Script>

      <MenuContextProvider>
        <BookButton />
        <Hamburger />
        <Menu />
        <AnimatePresence mode='popLayout'>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.5}}
            exit={{ opacity: 0 }}
            key={router.route}
          >
            <Component {...pageProps} />
          </m.div>;
        </AnimatePresence>
      </MenuContextProvider>
    </>


  )
}

export default MyApp

/**
 * <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'GTM-W32FPPW');
          `
        }}
      />
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W32FPPW"
        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
 */