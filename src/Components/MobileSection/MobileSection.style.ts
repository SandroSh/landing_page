import styled from "styled-components";
export const MobileSectionWrapper = styled.div`
  width: 100%;
  background: #e5f0fd 0% 0% no-repeat padding-box;
  margin-bottom: 118px;
`;

export const MobileSectionDiv = styled.div`
  max-width: 1440px;
  max-height: 558px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  p {
    margin: 17px 0 30px 0;
  }
  @media (max-width: 1050px) {
    h1 {
      font-size: 30px !important;
    }
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: center;
  margin-left: 135px;
  margin-top: 50px;
  gap: 11px;
  @media (max-width: 550px) {
    margin-left: 0;
    padding:10px;
    justify-content:center;
    h1{
      font-size:unset;
    }
  }
  h1 {
    font-size: clamp(28px, 4vw, 56px);
    font-family: "helvetica";
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
  }
  p {
    color: ${({ theme }) => theme.text_secondary};
  }
  h4 {
    color: ${({ theme }) => theme.blue};
  }
`;

export const DownloadImgDiv = styled.div`
  display: flex;
  img {
    margin-right: 20px;
  }
  margin-bottom: 10px;
`;

export const MockupImage = styled.img`
  @media (max-width: 1100px) {
    width: 401px;
    height: 279px;
    align-self: flex-end;
  }
  @media (max-width: 900px) {
    width: 301px;
    height: 209px;
    align-self: flex-end;
  }
  @media (max-width: 770px) {
    display: none;
  }
`;
