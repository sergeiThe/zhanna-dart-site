import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'
import { motion as m } from 'framer-motion'
import Section from '../components/Section'
import { paragraphVariants, btnVariants } from '../animations/aboutPage'
import Link from 'next/link'
import ServiceList from '../components/ServiceList'
import Head from 'next/head'



const Services = () => {
    const title = TEXT.services.title
    const paragraph1 = TEXT.services.paragraph1
    const paragraph2 = TEXT.services.paragraph2




    return (
        <>
            <Head>
                <title>Zhanna Dart Trondheim - Tjenester</title>
                <meta
                    name="description"
                    content="Profesjonell frisør med over 20 års erfaring i bransjen. Jeg brenner for å hjelpe kundene mine til å føle seg trygge og vakre ved å lage personlige frisyrer som passer deres individuelle behov og preferanser." />
            </Head>
            <Section className={'services-section'} key={"/tjenester"}>

                <div className='services-wrapper'>

                    <div className='services-text-wrapper'>
                        <div className="services-title">
                            <PageTitle value={title} />
                        </div>
                        <m.div className="services-paragraph"
                            variants={paragraphVariants}
                            initial="initialState"
                            animate="animateState"
                            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                        >
                            <Paragraph value={paragraph1} />

                        </m.div>
                        <m.div className="services-button"
                            variants={btnVariants}
                            initial="initialState"
                            animate="animateState">
                            <Link href="/arbeid" className="btn btn-primary">Se mitt arbeid</Link>

                        </m.div>
                        <m.div className="services-paragraph"
                            variants={paragraphVariants}
                            initial="initialState"
                            animate="animateState"
                            transition={{ duration: 2, delay: 4, ease: "easeOut" }}
                        >
                            <Paragraph value={paragraph2} />

                        </m.div>
                    </div>
                    <div className='services-images-container'>
                        <ServiceList />
                    </div>

                </div>
            </Section>
        </>
    )
}

export default Services