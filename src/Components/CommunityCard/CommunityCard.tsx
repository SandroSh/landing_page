import { CommunityCardType } from "../../types"
import { CardDiv, ImgWrapper, TextWrapper } from "./CommunityCard.style"


const CommunityCard = ({ cardData }: { cardData: CommunityCardType }) => {
    return (
        <CardDiv>
            <ImgWrapper $bgcolor={cardData.backgroundColor} $shadowcolor = {cardData.dropShadowColor} >
                <img src={cardData.img} alt={cardData.imgAlt} />
            </ImgWrapper>
            <TextWrapper>
                <h2>{cardData.title}</h2>
                <p>{cardData.text}</p>
            </TextWrapper>
        </CardDiv>
    )
}

export default CommunityCard