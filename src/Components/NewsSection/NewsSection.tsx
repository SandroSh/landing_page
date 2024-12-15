import { newsCardsData } from '../../data'
import { TitleDiv } from '../CommunitySection/CommunitySection.style'
import NewsCard from '../NewsCard/NewsCard'
import { NewsCardsDiv, NewsSectionDiv } from './NewsSection.style'

const NewsSection = () => {
  return (
    <NewsSectionDiv>
            <TitleDiv>
                <h3 >Get Our Aplication</h3>
                <h1>Latest News</h1>
            </TitleDiv>
            <NewsCardsDiv>
                {
                    newsCardsData.map((item) => <NewsCard key={item.id} cardData={item} /> )
                }
            </NewsCardsDiv>
    </NewsSectionDiv>
  )
}

export default NewsSection