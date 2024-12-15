import { footerLists } from "../../data"
import FooterList from "../FooterList/FooterList"
import { FooterDiv, FooterOuterWrapper, LowerWrapper, NewsLetterDiv, UpperWrapper, InputDiv, PlatformsDiv } from "./Footer.style"
import CompanyLogo from '../../assets/logo.svg'
import TwitterIcon from '../../assets/Twitter.svg'
import InstagramIcon from '../../assets/instagram.svg'
import FacebookIcon from '../../assets/facebook.svg'
import LinkedinIcon from '../../assets/Linkedin.svg'

const Footer = () => {
    return (
        <FooterOuterWrapper>
            <UpperWrapper>
                <FooterDiv>
                    {
                        footerLists.map((list, i) => <FooterList key={i} listData={list} />)
                    }
                    <NewsLetterDiv>

                        <h3>Subscribe Cirkle<br /> Newsletter</h3>
                        <p>Subscribe to be the first one to know about<br /> updates. Enter your email</p>

                        <InputDiv>
                            <input type="text" placeholder="EmailAddress" />
                            <button>Subscribe</button>
                        </InputDiv>
                    </NewsLetterDiv>
                </FooterDiv>
            </UpperWrapper>

            <LowerWrapper>
                <FooterDiv style={{ padding: '40px 135px', alignItems:'center' }}>
                    <h4 style={{color:'white', fontWeight:'500'}}>Besnik Creative Agency.</h4>
                    <img src={CompanyLogo} alt="Netbook Logo" />
                    <PlatformsDiv>
                        <img src={TwitterIcon} alt="Twitter logo" />
                        <img src={InstagramIcon} alt="Intstagram Logo" />
                        <img src={FacebookIcon} alt="Facebook logo" />
                        <img src={LinkedinIcon} alt="Linkedin Logo" />
                    </PlatformsDiv>
                </FooterDiv>
            </LowerWrapper>
        </FooterOuterWrapper>
    )
}

export default Footer