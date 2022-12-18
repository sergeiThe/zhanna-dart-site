import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'
import Section from '../components/Section'
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
        className='home-content-wrapper'
      >
        <div className='home-inner-wrapper'>

          <div
            className="home-icon"

          >
            <BsScissors />
          </div>
          <div
            className="home-title"


          >
            <PageTitle value={title} />
          </div>
          <div
            className="home-paragraph"


          >
            <Paragraph value={paragraph} />
          </div>
          <div
            className="home-button"

          >
            <Button value="Gå videre" onClick={goFurtherHandler} />
          </div>
        </div>
      </div>
    </Section>
  )
}
