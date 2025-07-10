import './App.css'
import { HeroPage } from './pages/HeroPage'
import CharacterFollower from './components/ui/CharacterFollower'
import ClickSpark from './components/ui/ClickSpark'
function App() {
  return (
    <>
      {/*UI COMPONENTS*/}
      <ClickSpark sparkColor='red'>
        <CharacterFollower />
        
        {/*PAGES*/}
        <HeroPage />
      </ClickSpark>

    </>
  )
}

export default App
