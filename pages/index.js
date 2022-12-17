import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'
import Section from '../components/Section'
import styles from "../module-styles/Home.module.scss"
import { BsScissors } from "react-icons/bs"
import { motion } from 'framer-motion'

const bgVariants = {
  initialState: {
    x: -100
  },
  animateState: {
    x: 0,
    transition: {
      delayChildren: 4,
      duration: 2,
      delay: 0.5
    }
  },
  exitState: {

  }
}

const titleVariants = {
  initialState: {
    opacity: 0,
    x: -100
  },
  animateState: {
    opacity: 1,
    x: 0
  },
  exitState: {

  }
}


export default function Home() {

  const title = TEXT.homePage.title
  const paragraph = TEXT.homePage.paragraph
  const router = useRouter()

  const goFurtherHandler = () => {
    router.push("/om-meg")
  }

  return (
    <Section>
      <video className='background' controls autoPlay loop muted style={{ width: '100%' }}>
        <source src='/video.MOV' />
      </video>
      <motion.div
        className={styles['content-wrapper']}
        variants={bgVariants}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 1,
          delay: 1
        }}
      >
        <div className={styles.icon}>
          <BsScissors />
        </div>
        <motion.div
          className={styles.title}
          variants={titleVariants}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          
        >
          <PageTitle value={title} />
        </motion.div>
        <motion.div
          className={styles.paragraph}
          variants={titleVariants}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          >
          <Paragraph value={paragraph} />
        </motion.div>
        <motion.div
          className={styles.button}
          variants={titleVariants}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          >
          <Button value="Gå videre" onClick={goFurtherHandler} />
        </motion.div>
      </motion.div>
    </Section>
  )
}
