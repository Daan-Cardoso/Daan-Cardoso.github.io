import './App.scss'
import Presentation from '../Layout/Presentation'
import Skills from '../Layout/Skills'
import Container from '../components/Container'

const App = () => {
  return (
    <Container>
      <Presentation />
      <Skills />
    </Container>
  )
}

export default App