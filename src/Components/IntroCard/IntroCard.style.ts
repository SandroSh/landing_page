import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  max-width: 335px;
  min-width:300px;
  /* height: 340px; */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 26px 98px #92a5b824;
  border: 1px solid #b9b9b945;
  border-radius: 14px;
  padding: 40px;
  p {
    color: ${({ theme }) => theme.text_secondary};
  }
  
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 35px;
  h2 {
    font-size: 20px;
  }
`;
export const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 44px;
  img {
    margin-right: 10px;
  }
  p {
    font-size: 16px;
  }
`;
