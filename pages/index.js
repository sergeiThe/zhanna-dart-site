import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'
import Section from '../components/Section'
import styles from "../module-styles/Home.module.scss"
import { BsScissors } from "react-icons/bs"
import { motion } from 'framer-motion'

import { bgVariants, titleVariants, iconVariants, btnVariants, paragraphVariants } from '../animations/homePage'


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
    
      >
        <div className={styles['inner-wrapper']}>

          <motion.div
            className={styles.icon}
            variants={iconVariants}
            initial="initialState"
            animate="animateState"
            exit="exitState"
          >
            <BsScissors />
          </motion.div>
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
            variants={paragraphVariants}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            
          >
            <Paragraph value={paragraph} />
          </motion.div>
          <motion.div
            className={styles.button}
            variants={btnVariants}
            initial="initialState"
            animate="animateState"
            exit="exitState"
          >
            <Button value="Gå videre" onClick={goFurtherHandler} />
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}
