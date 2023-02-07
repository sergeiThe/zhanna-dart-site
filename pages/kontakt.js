import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'
import { motion as m } from 'framer-motion'
import Section from '../components/Section'
import { paragraphVariants, btnVariants } from '../animations/aboutPage'
import Link from 'next/link'
import { BsFacebook, BsInstagram } from "react-icons/bs"
import Head from 'next/head'


const Contact = () => {
    const title = TEXT.contact.title
    const paragraph = TEXT.contact.paragraph
    const phone = TEXT.contact.phone
    const address = TEXT.contact.address
    const fb = TEXT.contact.facebookLink
    const ig = TEXT.contact.instagramLink


    const router = useRouter()


    return (
        <>
            <Head>
                <title>Zhanna Dart Trondheim - Kontakt</title>
                <meta
                    name="description"
                    content="Profesjonell frisør med over 20 års erfaring i bransjen. Jeg brenner for å hjelpe kundene mine til å føle seg trygge og vakre ved å lage personlige frisyrer som passer deres individuelle behov og preferanser." />
            </Head>
            <Section className={'contact-section'} key={"/kontakt"}>

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

                            <Link target="_blank" rel="noopener noreferrer" href="https://zhannadart.onlinebooq.net/" className="btn btn-primary">Bestill</Link>
                        </m.div>
                        <m.div className="contact-info"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3, duration: 1 }}
                        >
                            <Link href={`tel:${phone}`}><Paragraph value={phone} /></Link>
                            <Paragraph value={address} />


                        </m.div>
                        <m.div className="contact-social-icons"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3.5, duration: 1 }}>
                            <Link href={fb} target="_blank" rel="noopener noreferrer"><BsFacebook /></Link>
                            <Link href={ig} target="_blank" rel="noopener noreferrer"><BsInstagram /></Link>


                        </m.div>
                    </div>

                    <m.div className='contact-map-container'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 4 }}
                    >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17077.668140234564!2d10.407221193342867!3d63.43633219387926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d3109c262cab9%3A0xfff5897af8760ea2!2sMellomveien%2016%2C%207042%20Trondheim!5e0!3m2!1sen!2sno!4v1671454351698!5m2!1sen!2sno" width={"100%"} height={"100%"} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </m.div>

                </div>
            </Section>
        </>
    )
}

export default Contact