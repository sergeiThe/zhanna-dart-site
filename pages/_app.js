import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
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

  return (
    <>
      <Head>
        <link rel="icon" type="image/ico" href="/favicon.ico"/>
      </Head>
      <MenuContextProvider>
        <BookButton />
        <Hamburger />
        <Menu />
        <AnimatePresence mode='wait'>
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </MenuContextProvider>
    </>


  )
}

export default MyApp
