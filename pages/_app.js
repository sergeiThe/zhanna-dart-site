import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { pageVariants } from '../animations/homePage'
import Section from '../components/Section'
import '../styles/index.scss'
import Hamburger from '../components/Hamburger'
import Menu from '../components/Menu'
import MenuContextProvider from '../store/menu-ctx'
import BookButton from '../components/BookButton'


function MyApp({ Component, pageProps, router }) {

  return (
    <>
      <MenuContextProvider>
        <BookButton/>
        <Hamburger />
        <Menu />
        <AnimatePresence mode='wait'>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </MenuContextProvider>
    </>


  )
}

export default MyApp
