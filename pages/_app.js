import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import '../styles/index.scss'

const variants = {
  initialState: {
    opacity: 0
  },
  animateState: {
    opacity: 1
  },
  exitState: {
    opacity: 0
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode='wait'>
      <motion.div key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{duration: 0.2}}
        variants={variants}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>

  )
}

export default MyApp
