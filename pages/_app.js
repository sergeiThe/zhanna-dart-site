import { useRouter } from 'next/router'
import { AnimatePresence, motion as m } from 'framer-motion'
import { pageVariants } from '../animations/homePage'
import Section from '../components/Section'
import '../styles/index.scss'
import Hamburger from '../components/Hamburger'
import Menu from '../components/Menu'
import MenuContextProvider from '../store/menu-ctx'
import BookButton from '../components/BookButton'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {

  const router = useRouter()

  console.log(router.asPath)

  return (
    <>
      <Head>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
      </Head>
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
