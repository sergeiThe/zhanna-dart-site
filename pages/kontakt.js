import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'
import { motion as m } from 'framer-motion'
import Section from '../components/Section'
import { paragraphVariants, btnVariants } from '../animations/aboutPage'
import Link from 'next/link'
import {BsFacebook, BsInstagram} from "react-icons/bs"


const Contact = () => {
    const title = TEXT.contact.title
    const paragraph = TEXT.contact.paragraph
    const phone = TEXT.contact.phone
    const address = TEXT.contact.address
    const fb = TEXT.contact.facebookLink
    const ig = TEXT.contact.instagramLink


    const router = useRouter()

    
    return (

        <Section className={'contact-section'}>

            <div className='contact-wrapper'>

                <div className='contact-text-wrapper'>
                    <div className="contact-title">
                        <PageTitle value={title} />
                    </div>
                    <m.div className="contact-paragraph"
                        variants={paragraphVariants}
                        initial="initialState"
                        animate="animateState"
                        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                    >
                        <Paragraph value={paragraph} />

                    </m.div>
                    <m.div className="contact-button"
                        variants={btnVariants}
                        initial="initialState"
                        animate="animateState">
                        
                        <Link href="https://zhannadart.onlinebooq.net/" className="btn btn-primary">Bestill</Link>
                    </m.div>
                    <m.div className="contact-info">
                        <Paragraph value={phone}/>
                        <Paragraph value={address}/>
                    </m.div>
                    <m.div className="contact-social-icons">
                        <BsFacebook/>
                        <BsInstagram/>
                    </m.div>
                </div>
                <div className='contact-images-container'>
                    list of services
                </div>

            </div>
        </Section>
    )
}

export default Contact