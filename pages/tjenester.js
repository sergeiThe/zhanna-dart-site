import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'
import { motion as m } from 'framer-motion'
import Section from '../components/Section'
import { paragraphVariants, btnVariants } from '../animations/aboutPage'
import Link from 'next/link'
import ServiceList from '../components/ServiceList'



const Services = () => {
    const title = TEXT.services.title
    const paragraph = TEXT.services.paragraph

    const router = useRouter()

    const goFurtherHandler = () => {
        router.push("/kontakt")
    }

    return (

        <Section className={'services-section'}>

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
                        <Paragraph value={paragraph} />

                    </m.div>
                    <m.div className="services-button"
                        variants={btnVariants}
                        initial="initialState"
                        animate="animateState">
                        <Link href="/arbeid" className="btn btn-secondary">Se mitt arbeid</Link>

                    </m.div>

                </div>
                <div className='services-images-container'>
                    <ServiceList />
                </div>

            </div>
        </Section>
    )
}

export default Services