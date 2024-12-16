import { ImagesDiv, InfoDiv, IntroDiv, PlayableImgDiv, PlayButton, VerticalDiv, Circle, ListElement, Wrapper, CardsDiv } from './Intro.style'
import PeopleImage from '../../../public/assets/Mask Group 8.png'
import LaptopImage from '../../../public/assets/Image-4.png'
import CablesImage from '../../../public/assets/Image-5.png'
import ArrowIcon from '../../../public/assets/ArrowRight-2.svg'
import PlayIcon from '../../../public/assets/Play iCon.svg'
import IntroCard from '../IntroCard/IntroCard'
import { introCards } from '../../data'
const IntroSection = () => {
    return (
        <IntroDiv>
            <Wrapper>
                <InfoDiv>
                    <h5>Whats Netboks?</h5>
                    <h1>Why Join to Netbook<br /> Social Network?</h1>
                    <p>Recent surveys have indicated that small businesses<br /> recognise the need they have to connect with consumer.</p>
                    <ul>
                        <ListElement><Circle />Groups</ListElement>
                        <ListElement><Circle />Messages</ListElement>
                        <ListElement><Circle />Share</ListElement>
                    </ul>
                </InfoDiv>
                <ImagesDiv>
                    <PlayableImgDiv>
                        <PlayButton src={PlayIcon} alt="Play Icon button" />
                        <img src={PeopleImage} alt="People working" />
                    </PlayableImgDiv>
                    <VerticalDiv>
                        <img src={LaptopImage} alt="human uses laptop" />
                        <img src={CablesImage} alt="Ethernet cables" />
                    </VerticalDiv>
                </ImagesDiv>
            </Wrapper>

            <Wrapper>
                <CardsDiv>
                    <IntroCard introCardData={introCards[0]} />
                    <IntroCard introCardData={introCards[1]} />
                </CardsDiv>
                <InfoDiv>
                    <h5>Our Achievement</h5>
                    <h1>We are Connecting You The Digital Life.</h1>
                    <p>The scope the Social Media becomes crucial Is <br />helps the business to directly engage with their<br /> needs and wants.</p>
                    <button>Discover me<img src={ArrowIcon} alt='white right side arrow' style={{marginLeft:'5px'}} />
                    </button>
                </InfoDiv>
            </Wrapper>
        </IntroDiv>
    )
}

export default IntroSection