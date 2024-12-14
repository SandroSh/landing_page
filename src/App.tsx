import './App.css'
import HeroSection from './Components/HeroSection/HeroSection'
import IntroSection from './Components/IntroSection/IntroSection'
import Navbar from './Components/Navbar/Navbar'
function App() {

  return (
    <div >
      <div className='outer-wrapper'>
        <Navbar />
        <HeroSection />
      </div>
      <IntroSection />
    </div>
  )
}

export default App
