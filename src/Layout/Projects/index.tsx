
import './styles.scss'

const Card = () => {
  return (
    <article className="">
      <picture className="">
        <img
          src="./assets/images/thumbnail-project-1-small.webp"
          alt="Design portfolio"
        />
      </picture>
      <div className="">
        <h3 className="">Design portfolio</h3>

        <ul className="">
          <li>
            <p className="">HTML</p>
          </li>
          <li>
            <p className="">CSS</p>
          </li>
        </ul>
      </div>

      <footer className="__actions">
        <a href="#" className="button">View project</a>
        <a href="#" className="button">View code</a>
      </footer>
    </article>
  )
}

const Projects = ({ projects } : { projects: string[] }) => {
  return (
    <section>
      <ul>
        <li>
          <Card />
          { projects }
        </li>
      </ul>
    </section>
  )
}

export default Projects