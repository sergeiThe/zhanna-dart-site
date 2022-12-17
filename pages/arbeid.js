import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'
import Section from '../components/Section'
import styles from "../module-styles/Work.module.scss"

const Work = () => {
    const title = TEXT.work.title
    const paragraph = TEXT.work.paragraph
    const router = useRouter()

    const goFurtherHandler = () => {
        router.push("/tjenester")
    }
    const goBackHandler = () => {
        router.back();
    }
    return (

        <Section>

            <video className='background' controls autoPlay loop muted style={{ width: '100%' }}>
                <source src='/video.MOV' />
            </video>
            <div className={styles['content-wrapper']}>
                <div className={styles['inner-wrapper']}>
                    <div className={styles.title}>
                        <PageTitle value={title} />
                    </div>
                    <div className={styles.paragraph}>
                        <Paragraph value={paragraph} />
                    </div>
                    <div className={styles.button}>
                        <Button value="Gå tilbake" onClick={goBackHandler} />
                        <Button value="Se mine tjenester" onClick={goFurtherHandler} />
                    </div>
                </div>
            </div>

        </Section>
    )
}

export default Work