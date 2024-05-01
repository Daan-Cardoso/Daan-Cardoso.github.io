
import './styles.scss'

const Card = ({ name, imageUrl, languages, url }) => {
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
            <li key={ name + l }>
              <p className="item">{ l }</p>
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

const Projects = ({ projects }) => {
  return (
    <section className="projects">
      <ul className="list">
        {
        projects && projects.map((repo) => (
          <li className="item" key={repo.name}>
            <Card { ...repo } />
          </li>
        ))
      }
      </ul>
    </section>
  )
}

export default Projects