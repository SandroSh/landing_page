import { DownloadImgDiv, MobileSectionDiv,InfoDiv,  MobileSectionWrapper, MockupImage } from './MobileSection.style'
import AppStoreIcon from '../../assets/image 288.png'
import PlayStoreIcon from '../../assets/image 289.png'
import MobileMockupImage from '../../assets/mobile muckup.png'
const MobileSection = () => {
    return (
        <MobileSectionWrapper>
            <MobileSectionDiv>
                <InfoDiv>
                    <h4>Get Our Aplication</h4>
                    <h1 style={{fontSize:'56px'}}>You Can Easily Find This App…!</h1>
                    <p>I say chap that's suing lavatory chip shop gosh <br /> off his smashing boot are you taking the piss <br />posh loo brilliant.</p>
                    <DownloadImgDiv>
                        <img src={AppStoreIcon} alt="App Store image" />
                        <img src={PlayStoreIcon} alt="Play Store image" />
                    </DownloadImgDiv>
                </InfoDiv>
                <MockupImage src={MobileMockupImage} alt="Mobile image with opened login page" />
            </MobileSectionDiv>
        </MobileSectionWrapper>
    )
}

export default MobileSection