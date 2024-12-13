import { MainDiv, LeftWrapper, RightWrapper, SearchInput, LoginButton } from "./Navbar.style"
import Logo from '../../assets/logo-1.svg'


const Navbar = () => {
    return (
        <MainDiv>
            <LeftWrapper>
                <img src={Logo} alt="Netbook logo" />
                <ul>
                    <a href="">Home</a>
                    <a href="">Community</a>
                    <a href="">Blog</a>
                    <a href="">Events</a>
                </ul>
            </LeftWrapper>

            <RightWrapper>
                <SearchInput placeholder="Search Here..." />
                <LoginButton>Log in</LoginButton>
            </RightWrapper>
        </MainDiv>
    )
}

export default Navbar