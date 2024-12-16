import { IntroCardType } from "../../types"
import { InfoDiv, MainDiv, TitleContainer } from "./IntroCard.style"
import GrayArrowIcon from '../../../public/assets/ArrowRight.svg'
import BlueArrowIcon from '../../../public/assets/ArrowRight-1.svg'
const IntroCard = ({ introCardData }: { introCardData: IntroCardType }) => {
    return (
        <MainDiv>
            <TitleContainer>
                <img src={introCardData.titleImg} alt={introCardData.titleImgAlt} />
                <h2>{introCardData.title}</h2>
            </TitleContainer>
            <InfoDiv>
                <img src={introCardData.infoImg} alt={introCardData.infoImgAlt} />
                <p>{introCardData.infoText}</p>
            </InfoDiv>
            <p>{introCardData.paragraph}</p>
            <div style={{display:'flex', gap:'10px', marginTop:'40px', color:introCardData.id ==1 ? '#217BF4':'#2B2B39', cursor:"pointer" }}>
                <h4>{introCardData.buttonText}</h4>
                <img src={introCardData.id == 1? BlueArrowIcon :GrayArrowIcon} alt="Arrow Icon" />
            </div>
        </MainDiv>
    )
}

export default IntroCard