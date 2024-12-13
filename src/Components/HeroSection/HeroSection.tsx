import { MainDiv, InfoDiv, ButtonsDiv, UpperLinkDiv } from './HeroSection.style'
import MainImage from '../../assets/Iamge.svg'
const HeroSection = () => {
    return (
        <MainDiv>
            <InfoDiv>
                <UpperLinkDiv>Netbook community</UpperLinkDiv>
                <h1>Your Solutions For<br/> Community!</h1>
                <p>More than 2 billion people in over countries use socibook to<br/> stay in touch with friends & family.</p>
                <ButtonsDiv>
                    <button>About More</button>
                    <button>Invite Friend</button>
                </ButtonsDiv>
            </InfoDiv>
            <img src={MainImage} alt="Human Connection and Interaction" />
        </MainDiv>
    )
}

export default HeroSection