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

    let sliders = []

    for (let i = 1; i <= 13; i++) {
        sliders.push(<ImageSlider urlBefore={`/work/${i}b.jpg`} urlAfter={`/work/${i}a.jpg`}/>)    
    }

    const sliderSection = sliders.map(slider => {
        return <div key={Math.random()} className='work-images-container'>{slider}</div>
    })
    
    
    return (

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
    )
}

export default Work