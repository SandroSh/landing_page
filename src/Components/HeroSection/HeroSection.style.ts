import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  max-width: calc(100% - 270px);
  height: calc(100vh - 68px);
  background-color: transparent;
  display: flex;
  justify-content: center;
  gap: 100px;
  align-items: center;

`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  h1 {
    font-size: clamp(28px, 4vw, 56px);
    font-family: "helvetica";
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
  }
  p {
    color: ${({ theme }) => theme.text_secondary};
  }
  h4{
    color: ${({ theme }) => theme.blue};
  }
`;
export const UpperLinkDiv = styled.div`
  color: ${({ theme }) => theme.blue};
  background-color: ${({ theme }) => theme.lightBlue};
  padding: 10px 28px;
  border-radius: 8px;
`;

export const ButtonsDiv = styled.div`
  button {
    padding: 23px 38px;
    border-radius: 14px;
    border: 0;
    margin-top: 20px;
    cursor: pointer;
    font-weight: 700;
    &:nth-child(1) {
      background-color: ${({ theme }) => theme.blue};
      color: white;
      box-shadow: 0px 7px 44px #217bf457;
      margin-right: 18px;
    }
    &:nth-child(2) {
      color: ${({ theme }) => theme.blue};
      width: clamp(120px, 8vw + 30px, px);
      border: 1px solid ${({ theme }) => theme.blue};
      background: transparent;
    }
    &:hover {
      transform: scale(0.98);
      transition: 0.5s;
    }
  }
`;
