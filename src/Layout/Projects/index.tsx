
import './styles.scss'

interface repo {
  name: string,
  imageUrl: string,
  languages: string[],
  url: string
}

const Card = ({ name, imageUrl, languages, url }: repo) => {
  return (
    <article className="card">
      <picture className="cover">
        <img
          src={imageUrl}
          alt="Design portfolio"
        />
      </picture>
      <div className="body">
        <h3 className="name">{ name }</h3>

        <ul className="languages">
          {
            languages.length && languages.map((l) => (
            <li className="item" key={ name + l }>
              { l }
            </li>
            )) 
          }
        </ul>
      </div>

      <footer className="actions">
        <a href="#" target="_blank" className="button">View project</a>
        <a href={ url } target="_blank" className="button">View code</a>
      </footer>
    </article>
  )
}

const Projects = ({ projects } : { projects: repo[] }) => {
  return (
    <section className="projects" id="projects">
      <ul className="list">
        {
        projects && projects.map((repo) => (
          <li className="item" key={repo.name}>
            <Card { ...repo } />
          </li>
        ))
      }
      </ul>
      { 
        !projects && (
        <div className='empty'>
          <picture className='icon'>
            <img src="/empty.png" alt="imagem abstrata que remete a construção do site" />
          </picture>
          <p className='text'>Ops! Estou reformulando meu portfólio, então estou sem projetos nessa seção</p>
        </div>
      )}
    </section>
  )
}

export default Projects