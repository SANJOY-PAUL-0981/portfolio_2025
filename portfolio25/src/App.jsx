import './App.css'
import { HeroPage } from './pages/HeroPage'
import CharacterFollower from './components/ui/CharacterFollower'
import ClickSpark from './components/ui/ClickSpark'
function App() {
  return (
    <>
      {/*UI COMPONENTS*/}
      <CharacterFollower />

      {/*PAGES*/}
      <HeroPage />
    </>
  )
}

export default App
