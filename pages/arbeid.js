import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'
import { motion as m } from 'framer-motion'
import Section from '../components/Section'
import { paragraphVariants, btnVariants } from '../animations/aboutPage'



const Work = () => {
    const title = TEXT.work.title
    const paragraph = TEXT.work.paragraph

    const router = useRouter()

    const goFurtherHandler = () => {
        router.push("/tjenester")
    }
    
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
                        <Button value="Tjenester" onClick={goFurtherHandler} />
                    </m.div>

                </div>
                <div className='work-images-container'>
                    sliders will be here...
                </div>

            </div>
        </Section>
    )
}

export default Work