import Nav from '../nav'
import Button from '../../components/Button'
import { Presentation as Data } from '../../mocks/Content'
import './style.scss'

const Title = ({ title }: { title: string }) => {
  const greetings = 'Olá'

  const highlight = `<span class="highlight">${Data.highlight}</span>`

  const formatedTitle = title
    .replace('{greetings}', greetings)
    .replace('{highlight}', highlight)

  return (
    <h2 className='title' dangerouslySetInnerHTML={{ __html: formatedTitle }} />
  )
}

const Presentation = () => {
  return (
    <section className='presentation'>
      <Nav fakeLogo={Data.logo} />

      <figure className="hero-banner">
        <img src="/avatar.png" alt="Imagem de um avatar 3d" />
      </figure>

      <Title title={Data.title} />

      <p className='description'>
        { Data.description }
      </p>

      <Button label={Data.action.label} action={Data.action.callback} />
    </section>
  )
}

export default Presentation