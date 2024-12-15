import './App.css'
import CommunitySection from './Components/CommunitySection/CommunitySection'
import HeroSection from './Components/HeroSection/HeroSection'
import IntroSection from './Components/IntroSection/IntroSection'
import MembersSection from './Components/MembersSection/MembersSection'
import Navbar from './Components/Navbar/Navbar'
function App() {

  return (
    <div >
      <div className='outer-wrapper'>
        <Navbar />
        <HeroSection />
      </div>
      <IntroSection />
      <CommunitySection />
      <MembersSection/>
    </div>
  )
}

export default App
