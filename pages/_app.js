import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { pageVariants } from '../animations/homePage'
import Section from '../components/Section'
import '../styles/index.scss'

// const variants = {
//   initialState: {
//     opacity: 0,
//     clipPath: "polygon(0 0, 10% 0, 100% 100%, 0% 100%)",
//   },
//   animateState: {
//     opacity: 1,
//     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
//     transition: {
//       duration: 2.6,
//        ease: "easeOut"
//     }
//   },
//   exitState: {
//     opacity: 0,
//     clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
//   }
// }

function MyApp({ Component, pageProps, router }) {
  
  return (
    <AnimatePresence mode='wait'>
      <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>


  )
}

export default MyApp
