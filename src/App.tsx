import './App.css'
import HeroSection from './Components/HeroSection/HeroSection'
import Navbar from './Components/Navbar/Navbar'
function App() {

  return (
    <div className='main-div'>
      <div className='outer-wrapper'>
        <Navbar />
        <HeroSection />
      </div>
    </div>
  )
}

export default App
