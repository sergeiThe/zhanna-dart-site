import TEXT from '../data/text'
import { useRouter } from 'next/router'
import { Button, PageTitle, Paragraph } from '../components/Components'



export default function Home() {

  const title = TEXT.homePage.title
  const paragraph = TEXT.homePage.paragraph
  const router = useRouter()

  const goFurtherHandler = () => {
    router.push("/om-meg")
  }

  return (
    <section style={{overflow: 'hidden'}}>
      <video controls autoPlay loop muted style={{width: '100%'}}>
        <source src='/video.MOV'/>
      </video>
      <PageTitle value={title}/>
      <Paragraph value={paragraph}/>
      <Button value="Gå videre" onClick={goFurtherHandler} />
    </section>
  )
}
