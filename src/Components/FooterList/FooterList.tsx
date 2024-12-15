import { ListDataType } from "../../types"
import { ListDiv } from "./FooterList.style"


const FooterList = ({listData}:{listData:ListDataType}) => {
  return (
    <ListDiv>
        <h3>{listData.title}</h3>
        <ul>
            {
                listData.elements.map((item, i) => <p key={i}>{item}</p> )
            }
        </ul>
    </ListDiv>
  )
}

export default FooterList