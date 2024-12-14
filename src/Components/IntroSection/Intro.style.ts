import styled from "styled-components";

export const IntroDiv = styled.div`
  width: 100%;
  max-width: calc(100% - 270px);
  margin: 118px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 150px;
`;

export const Wrapper = styled.div`
  width: 100%;
  /* height:340px; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  button {
    background-color: ${({ theme }) => theme.blue};
    color: white;
    box-shadow: 0px 7px 44px #217bf457;
    margin-right: 18px;
    padding: 23px 38px;
    border-radius: 14px;
    border: 0;
    /* margin-top: 20px; */
    cursor: pointer;
    font-weight: 700;
    &:hover {
      transform: scale(0.98);
      transition: 0.5s;
    }
  }
`;
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height:340px;
  gap: 24px;
  h5 {
    color: ${({ theme }) => theme.blue};
    font-size: 18px;
    font-weight: 700;
  }
  h1 {
    font-size: clamp(28px, 4vw, 46px);
    font-family: "helvetica";
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
  }
  p {
    color: ${({ theme }) => theme.text_secondary};
  }
  ul {
    margin-top: 47px;
  }
`;

export const ListElement = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  margin-left: 3.5px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
export const Circle = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.blue};
  outline: 7px solid ${({ theme }) => theme.lightBlue};
`;

export const ImagesDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;
export const PlayButton = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const PlayableImgDiv = styled.div`
  position: relative;
`;
export const VerticalDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const CardsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */
  gap: 24px;
`;
