import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'
import Section from '../components/Section'
import { BsScissors } from "react-icons/bs"
import { motion as m } from 'framer-motion'

import { bgVariants, titleVariants, iconVariants, btnVariants, paragraphVariants } from '../animations/homePage'
import Link from 'next/link'


export default function Home() {

  const title = TEXT.homePage.title
  const paragraph = TEXT.homePage.paragraph
  const router = useRouter()

  const goFurtherHandler = () => {
    router.push("/om-meg")
  }

  // const video = document.querySelector('#id')
  // video.play()

  return (
    <Section>
      <video id="videoBG" className='background' autoPlay playsInline loop muted preload='metadata'>
        <source src='/video1.mp4' type='video/mp4'/>
      </video>
      <div
        className='home-content-wrapper'
      >
        <div className='home-inner-wrapper'>

          <m.div
            className="home-icon"
            variants={iconVariants}
            initial="initialState"
            animate="animateState"
          >
            <BsScissors />
          </m.div>
          <m.div
            className="home-title"
            variants={titleVariants}
            initial="initialState"
            animate="animateState"
          >
            <PageTitle value={title} />
          </m.div>
          <m.div
            className="home-paragraph"
            variants={paragraphVariants}
            initial="initialState"
            animate="animateState"
          >
            <Paragraph value={paragraph} />
          </m.div>
          <m.div
            className="home-button"
            variants={btnVariants}
            initial="initialState"
            animate="animateState"
          >
            <Button value="Gå videre" onClick={goFurtherHandler} />
          </m.div>
        </div>
      </div>
    </Section>
  )
}
