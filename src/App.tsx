import './App.css'
import CommunitySection from './Components/CommunitySection/CommunitySection'
import Footer from './Components/Footer/Footer'
import HeroSection from './Components/HeroSection/HeroSection'
import IntroSection from './Components/IntroSection/IntroSection'
import MembersSection from './Components/MembersSection/MembersSection'
import MobileSection from './Components/MobileSection/MobileSection'
import Navbar from './Components/Navbar/Navbar'
import NewsSection from './Components/NewsSection/NewsSection'
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
      <MobileSection/>
      <NewsSection/>
      <Footer/>
    </div>
  )
}

export default App
