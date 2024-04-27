import { Skills as Data, iSkills } from '../../mocks/Content'
import './style.scss'


const Topics = (topics: string[]) => topics && topics?.map((topic) => (
  <li key={topic} className='topic'>
    { topic }
  </li>
))

const Cards = Data.map(({ title, text, topics } : iSkills, index) => (
  <li key={ title + String(index) } className='item'>
    <article className='card'>
      <h2 className='title'>{ title }</h2>
      <p className='resume'>{ text }</p>
      <ul className='topics'>
        { Topics(topics) }
      </ul>
    </article>
  </li>
))

const Skills = () => {
  return (
    <section className='skills'>
      <ul className='list'>
        { Cards }
      </ul>
    </section>
  )
}

export default Skills