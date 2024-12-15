import styled from "styled-components";

export const NewsCardDiv = styled.div`
  width: 340px;
  height: 460px;
  img {
    width: 100%;
  }
`;

export const NewsInfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
  padding: 30px;
`;

export const TitleInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 27px;
  h3 {
    color: #2f2c4a;
    font-weight: 500;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  p {
    color: ${({ theme }) => theme.text_secondary};
  }
  img {
    width: 15px;
    margin-left: 15px;
  }
 
`;

export const Line = styled.div`
  width: 40px;
  height: 2px;
  background-color: #ffaf2e;
  margin-top: 10px;
`;
