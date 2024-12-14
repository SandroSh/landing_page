import styled from "styled-components";

interface WrapperProps {
  $bgcolor: string;
  $shadowcolor: string;
}

export const CardDiv = styled.div`
  width: 100%;
  max-width: 500px;
  height: 182px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 14px 22px 104px #7f7f7f21;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding: 40px;
`;

export const TextWrapper = styled.div`
  
  h2 {
    color: #2F2C4A;
  }
  p{
    color:${({theme}) => theme.text_secondary};
    margin-top:16px;
  }
`;

export const ImgWrapper = styled.div<WrapperProps>`
  aspect-ratio: 1;
  align-self:flex-start;
  padding: 19px 19px;
  background: ${(props) => props.$bgcolor};
  border-radius: 24px;
  box-shadow: 0px 10px 44px ${(props) => props.$shadowcolor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
