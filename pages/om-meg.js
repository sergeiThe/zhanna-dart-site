import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'
import { motion as m } from 'framer-motion'
import Section from '../components/Section'
import { paragraphVariants, btnVariants } from '../animations/aboutPage'
import Link from 'next/link'
import Head from 'next/head'


const About = () => {
    const title = TEXT.about.title
    const paragraph1 = TEXT.about.paragraphOne
    const paragraph2 = TEXT.about.paragraphTwo

    const router = useRouter()

    return (
        <>
            <Head>
                <title>Zhanna Dart Trondheim - Om meg</title>
                <meta
                    name="description"
                    content="Profesjonell frisør med over 20 års erfaring i bransjen. Jeg brenner for å hjelpe kundene mine til å føle seg trygge og vakre ved å lage personlige frisyrer som passer deres individuelle behov og preferanser." />
            </Head>
            <Section className={'about-section'} key={"/om-meg"}>

                <div className='about-wrapper'>

                    <div className='about-content-wrapper'>
                        <div className="about-title">
                            <PageTitle value={title} />
                        </div>
                        <m.div className="about-paragraph"
                            variants={paragraphVariants}
                            initial="initialState"
                            animate="animateState"
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        >
                            <Paragraph value={paragraph1} />

                        </m.div>
                        <m.div className="about-paragraph"
                            variants={paragraphVariants}
                            initial="initialState"
                            animate="animateState"
                            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}>

                            <Paragraph value={paragraph2} />
                        </m.div>
                        <m.div className="about-button"
                            variants={btnVariants}
                            initial="initialState"
                            animate="animateState">
                            <Link href="/tjenester" className="btn btn-primary">Tjenester</Link>
                        </m.div>

                    </div>
                    <video className='about-video' autoPlay playsInline loop muted preload='metadata'>
                        <source src='/video1.mp4' type='video/mp4' />
                    </video>

                </div>
            </Section>
        </>
    )
}

export default About