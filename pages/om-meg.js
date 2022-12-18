import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'
import Section from '../components/Section'


const About = () => {
    const title = TEXT.about.title
    const paragraph = TEXT.about.paragraph
    const router = useRouter()

    const goFurtherHandler = () => {
        router.push("/arbeid")
    }
    const goBackHandler = () => {
        router.back();
    }
    return (

        <Section>

            <video className='background' controls autoPlay loop muted style={{ width: '100%' }}>
                <source src='/video.MOV' />
            </video>
            <div className='about-content-wrapper'>
                <div className='about-inner-wrapper'>

                    <div className="about-title">
                        <PageTitle value={title} />
                    </div>
                    <div className="about-paragraph">
                        <Paragraph value={paragraph} />
                    </div>
                    <div className="about-button">
                        <Button value="Gå tilbake" onClick={goBackHandler} />
                        <Button value="Se mitt arbeid" onClick={goFurtherHandler} />
                    </div>
                </div>
            </div>

        </Section>
    )
}

export default About