import axios from 'axios'
import { useEffect, useState } from 'react'
import Presentation from '../Layout/Presentation'
import Skills from '../Layout/Skills'
import Projects from '../Layout/Projects'
import Container from '../components/Container'
import repo from '../interfaces/repo'
import './App.scss'

const user = 'Daan-Cardoso'

const App = () => {
  const [repos, setRepos] = useState<repo[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      await axios.get(`https://api.github.com/users/${user}/repos`)
        .then(async ({ data }) => {
          const portfolioRepos = data.filter((item: { description: string}) => item.description && item.description.includes('[portfolio]'))

          try {
            const reposWithDetails: repo[] = await Promise.all(portfolioRepos.map(async (repo : repo) => {
              const languages = await axios.get(repo.languages_url || '').then((r) => Object.keys(r.data))
              const imageUrl = `https://raw.githubusercontent.com/${user}/${repo.name}/master/cover.webp`
              return {
                name: repo.name,
                imageUrl,
                languages,
                url: repo.html_url
              }
            }))
  
            setRepos(reposWithDetails)  
          } catch (error) {
            console.log(error)
          }

        })
    }

    fetchProjects()
  }, [])

  return (
    <Container>
      <Presentation />
      <Skills />
      <Projects projects={repos} />
    </Container>
  )
}

export default App