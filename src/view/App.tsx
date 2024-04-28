import axios from 'axios'
import { useEffect, useState } from 'react'
import Presentation from '../Layout/Presentation'
import Skills from '../Layout/Skills'
import Projects from '../Layout/Projects'
import Container from '../components/Container'
import './App.scss'

const user = 'Daan-Cardoso'

const App = () => {
  const [ repos, setRepos ] = useState([])
  
  useEffect(() => {

    const fetchProjects = async () => {
      await axios.get(`https://api.github.com/users/${user}/repos`)
      .then(({ data }) => {
        const repos  = data.filter((item: { description: string }) => item && item.description?.includes('[portfolio]'))

        repos.forEach(async (repo) => {
          const languages = await axios.get(repo.languages_url).then(r => Object.keys(r.data))
          const url = repo.html_url
          const name = repo.name
          // const imageUrl = 'https://api.github.com/Daan-Cardoso/petshop/blob/master/public/logo192.png'
          const imageUrl = await axios.get(`https://api.github.com/repos/${user}/${name}/contents/public/logo192.png`).then(r => r.data)
          console.log(repo, languages, url, name, imageUrl)
        });
      })
    }

    fetchProjects()
  }, [])

  return (
    <Container>
      <Presentation />
      <Skills />
      <Projects projects={['teste']} />
    </Container>
  )
}

export default App