import { NewsCardType } from '../../types'
import { LinkWrapper, NewsCardDiv, Line, NewsInfoDiv, TitleInnerWrapper } from './NewsCard.style'
import GrayArrowIcon from '../../../public/assets/ArrowRight.svg'
import BlueArrowIcon from '../../../public/assets/ArrowRight-1.svg'
const NewsCard = ({ cardData }: { cardData: NewsCardType }) => {
    return (
        <NewsCardDiv>
            <img src={cardData.img} alt={cardData.imgAlt} />
            <NewsInfoDiv>
                <Line></Line>
                <TitleInnerWrapper>
                    <h3>{cardData.title}</h3>
                    <LinkWrapper>
                        <p style={{ color: cardData.id == 2 ? '#217BF4' : '#2f2c4a' }}>Continue Reading</p>
                        <img src={cardData.id == 2 ? BlueArrowIcon : GrayArrowIcon} alt='right side arrow' />
                    </LinkWrapper>
                </TitleInnerWrapper>
            </NewsInfoDiv>
        </NewsCardDiv>
    )
}

export default NewsCard