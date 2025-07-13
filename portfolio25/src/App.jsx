import './App.css'
import { HeroPage } from './pages/HeroPage'
import CharacterFollower from './components/UI/CharacterFollower'
import ClickSpark from './components/UI/ClickSpark'
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
