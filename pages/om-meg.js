import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'

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

        <>
            <PageTitle value={title} />
            <Paragraph value={paragraph} />
            <Button value="Gå tilbake" onClick={goBackHandler} />
            <Button value="Gå videre" onClick={goFurtherHandler} />
        </>
    )
}

export default About