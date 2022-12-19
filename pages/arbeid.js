import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'
import { motion as m } from 'framer-motion'
import Section from '../components/Section'
import { paragraphVariants, btnVariants } from '../animations/aboutPage'
import Link from 'next/link'
import ImageSlider from '../components/ImageSlider'



const Work = () => {
    const title = TEXT.work.title
    const paragraph = TEXT.work.paragraph

    const router = useRouter()

    
    return (

        <Section className={'work-section'}>

            <div className='work-wrapper'>

                <div className='work-text-wrapper'>
                    <div className="work-title">
                        <PageTitle value={title} />
                    </div>
                    <m.div className="work-paragraph"
                        variants={paragraphVariants}
                        initial="initialState"
                        animate="animateState"
                        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                    >
                        <Paragraph value={paragraph} />

                    </m.div>
                    <m.div className="work-button"
                        variants={btnVariants}
                        initial="initialState"
                        animate="animateState">
                        <Link href="/kontakt" className="btn btn-secondary">Kontakt</Link>
                        <Link target="_blank" rel="noopener noreferrer" href="https://zhannadart.onlinebooq.net/" className="btn btn-primary">Bestill</Link>
                    </m.div>
                    <m.div className="work-paragraph"
                        variants={paragraphVariants}
                        initial="initialState"
                        animate="animateState"
                        transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                    >
                        <Paragraph value={"Swipe til høyre for å sammenligne 'før' og 'etter'"} />

                    </m.div>

                </div>
                <div className='work-images-container'>
                    <ImageSlider urlBefore={"/work/3before_c.jpg"} urlAfter={"/work/3after_c.jpg"}/>
                    <ImageSlider urlBefore={"/work/5before_c.jpg"} urlAfter={"/work/5after_c.jpg"}/>
                    <ImageSlider urlBefore={"/work/6before_c.jpg"} urlAfter={"/work/6after_c.jpg"}/>
                    <ImageSlider urlBefore={"/work/7before_c.jpg"} urlAfter={"/work/7after_c.jpg"}/>
                    <ImageSlider urlBefore={"/work/8before_c.jpg"} urlAfter={"/work/8after_c.jpg"}/>
              
                </div>

            </div>
        </Section>
    )
}

export default Work