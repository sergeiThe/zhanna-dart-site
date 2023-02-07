import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'
import { motion as m } from 'framer-motion'
import Section from '../components/Section'
import { paragraphVariants, btnVariants } from '../animations/aboutPage'
import Link from 'next/link'
import ImageSlider from '../components/ImageSlider'
import Head from 'next/head'

const listVariants = {
    initialState: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 2,
        },
    },
};




const Work = () => {
    const title = TEXT.work.title
    const paragraph = TEXT.work.paragraph

    let sliders = []

    for (let i = 1; i <= 13; i++) {
        sliders.push(<ImageSlider
            urlBefore={`/work/${i}b.jpg`}
            urlAfter={`/work/${i}a.jpg`}

        />)
    }

    const sliderSection = sliders.map(slider => {
        return <m.div
            key={Math.random()}
            className='work-images-container'
            initial="initialState"
            animate="show"
            variants={listVariants}
        >{slider}</m.div>
    })


    return (
        <>
            <Head>
                <title>Zhanna Dart Trondheim - Mine prosjekter</title>
                <meta
                    name="description"
                    content="Profesjonell frisør med over 20 års erfaring i bransjen. Jeg brenner for å hjelpe kundene mine til å føle seg trygge og vakre ved å lage personlige frisyrer som passer deres individuelle behov og preferanser." />
            </Head>
            <Section className={'work-section'} key={"/arbeid"}>

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
                    {sliderSection}
                </div>
            </Section>
        </>
    )
}

export default Work