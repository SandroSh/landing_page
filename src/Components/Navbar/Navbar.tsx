import { OuterWrapper, MainDiv, LeftWrapper,Ul, RightWrapper, SearchInput, LoginButton, SearchInputWrapper } from "./Navbar.style"
import Logo from '../../../public/assets/logo-1.svg'
import DropDownIcon from '../../../public/assets/dropdown.svg'
import SearchIcon from '../../../public/assets/search.svg'


const Navbar = () => {
    return (
        <OuterWrapper>
            <MainDiv>
                <LeftWrapper>
                    <img src={Logo} alt="Netbook logo" />
                    <Ul>
                        <a href="">Home</a>
                        <a href="">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p>Community</p>
                                <img src={DropDownIcon} alt="down side arrow withoud back part" />
                            </div>
                        </a>
                        <a href="">Blog</a>
                        <a href="">Events</a>
                    </Ul>
                </LeftWrapper>

                <RightWrapper>
                    <SearchInputWrapper>
                        <img src={SearchIcon} alt="Search icon" />
                        <SearchInput placeholder="Search Here..." />
                    </SearchInputWrapper>
                    <LoginButton>Log in</LoginButton>
                </RightWrapper>
            </MainDiv>
        </OuterWrapper>
    )
}

export default Navbar