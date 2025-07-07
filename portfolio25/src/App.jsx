import './App.css'
import SplineModel from "./components/ui/SplineModel"
import CharacterFollower from './components/ui/CharacterFollower'

function App() {

  return (
    <>
      <CharacterFollower />
      <div className='h-[100vh] bg-black flex justify-center items-center text-white'>
        <SplineModel />
        <div className='text-white flex flex-col gap-5'>
          <p className='text-8xl font-bold font-vt323'>Hi I am <b className='text-red-500'>Sanjoy</b> :)</p>
          <p className='text-red-500 font-dotgothic font-normal text-lg'>Nice to Meet You All, I am a passionate developer and CS undergrad</p>
        </div>
      </div>
    </>
  )
}

export default App
