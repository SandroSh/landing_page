import { communityCardsData } from "../../data"
import CommunityCard from "../CommunityCard/CommunityCard"
import { CommunityCardsDiv, CommunitySectionDiv, TitleDiv, OuterWrapper } from "./CommunitySection.style"


const CommunitySection = () => {
    return (
        <OuterWrapper>
            <CommunitySectionDiv>
                <TitleDiv>
                    <h3>Our Community</h3>
                    <h1>Community Main Feature</h1>
                    <p>The wise man therefore always holds in these matters to<br /> this principle of selection.</p>
                </TitleDiv>
                <CommunityCardsDiv>
                    {
                        communityCardsData.map((item, i) => <CommunityCard key={i} cardData={item} />)
                    }
                </CommunityCardsDiv>
            </CommunitySectionDiv>
        </OuterWrapper>
    )
}

export default CommunitySection