import { members } from "../../data";
import { TitleDiv } from "../CommunitySection/CommunitySection.style"
import MemberCard from "../MemberCard/MemberCard";
import { MembersDiv, MembersSectionDiv, SwitcherDiv, TypeWrapper, } from "./MembersSection.style"

const MemberTypes = ['Newest', 'Popular', 'active'];

const MembersSection = () => {
    return (
        <MembersSectionDiv>
            <TitleDiv>
                <h3>Valuable Team</h3>
                <h1>Our Active Members</h1>
                <p>when an unknown printer took a galley of type and meeting fari <br /> scrambled it.</p>
            </TitleDiv>
            <SwitcherDiv>
                {
                    MemberTypes.map((item, i) => 
                    <TypeWrapper key={i}>
                        <p>{item}</p>
                    </TypeWrapper>
                    )
                }
            </SwitcherDiv>
            <MembersDiv>
                {
                    members.map((element, i) => <MemberCard key={i} memberData={element} />)
                }
            </MembersDiv>
        </MembersSectionDiv>
    )
}

export default MembersSection