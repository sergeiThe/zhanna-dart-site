import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'
import Section from '../components/Section'
import styles from "../module-styles/Home.module.scss"
import { BsScissors } from "react-icons/bs"
import { motion } from 'framer-motion'

import { bgVariants, titleVariants, iconVariants, btnVariants, paragraphVariants } from '../animations/homePage'
import Link from 'next/link'


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
      <div
        className={styles['content-wrapper']}
      >
        <div className={styles['inner-wrapper']}>

          <div
            className={styles.icon}

          >
            <BsScissors />
          </div>
          <div
            className={styles.title}


          >
            <PageTitle value={title} />
          </div>
          <div
            className={styles.paragraph}


          >
            <Paragraph value={paragraph} />
          </div>
          <div
            className={styles.button}

          >
            <Button value="Gå videre" onClick={goFurtherHandler} />
            <Link href="/om-meg" style={{color: "white"}}>Om meg</Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
