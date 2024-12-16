import { MemberCardDiv, ImageDiv, TextDiv, Img } from "./MemberCard.style"
import { memberType } from "../../types"
import CheckIcon from '../../../public/assets/Check.svg'
import borderImg from '../../../public/assets/border.svg'

const MemberCard = ({ memberData }: { memberData: memberType }) => {
    return (
        <MemberCardDiv>
            <ImageDiv>
                    <Img src={borderImg} alt="border" />
                    <Img src={memberData.img} alt="profile picture" />
                    <Img src={CheckIcon} alt="blue check icon" />
            </ImageDiv>
            <TextDiv>
                <h2>{memberData.name}</h2>
                <p>{memberData.username}</p>
            </TextDiv>
        </MemberCardDiv>
    )
}

export default MemberCard