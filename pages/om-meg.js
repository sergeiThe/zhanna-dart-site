import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'
import { motion as m } from 'framer-motion'
import Section from '../components/Section'
import { paragraphVariants, btnVariants } from '../animations/aboutPage'
import Image from 'next/image'


const About = () => {
    const title = TEXT.about.title
    const paragraph1 = TEXT.about.paragraphOne
    const paragraph2 = TEXT.about.paragraphTwo
    const paragraph3 = TEXT.about.paragraphThree
    const router = useRouter()

    const goFurtherHandler = () => {
        router.push("/arbeid")
    }
    const goBackHandler = () => {
        router.back();
    }
    return (

        <Section className={'about-section'}>

            <div className='about-content-wrapper'>
                <div className='about-inner-wrapper'>

                    <div className="about-title">
                        <PageTitle value={title} />
                    </div>
                    <m.div className="about-paragraph"
                        variants={paragraphVariants}
                        initial="initialState"
                        animate="animateState"
                        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                    >
                        <Paragraph value={paragraph1} />

                    </m.div>
                    <video className='about-video' controls autoPlay playsInline loop muted preload='metadata'>
                        <source src='/video1.mp4' type='video/mp4' />
                    </video>
                    <m.div className="about-paragraph"
                        variants={paragraphVariants}
                        initial="initialState"
                        animate="animateState"
                        transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}>

                        <Paragraph value={paragraph2} />
                    </m.div>
                    <m.div className="about-button"
                        variants={btnVariants}
                        initial="initialState"
                        animate="animateState">
                        <Button value="Gå tilbake" onClick={goBackHandler} />
                        <Button value="Se mitt arbeid" onClick={goFurtherHandler} />
                    </m.div>
                </div>
            </div>

        </Section>
    )
}

export default About