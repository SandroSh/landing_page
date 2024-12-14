import styled from "styled-components";

export const OuterWrapper = styled.div`
  width: 100%;
  background: linear-gradient(
      0deg,
      #f1f6fd00 14%,
      #f1f6fd 30%,
      #f1f6fd 64%,
      #ffffff 100%
    )
    0% 0% no-repeat padding-box;
    margin-bottom:140px;
`;
export const CommunitySectionDiv = styled.div`
  max-width:1440px;
  margin: 120px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h3 {
    color: ${({ theme }) => theme.blue};
  }
  h1 {
    color: ${({ theme }) => theme.text_primary};
  }
  p {
    margin-top: 20px;
    color: ${({ theme }) => theme.text_secondary};
  }
`;

export const CommunityCardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 44px;
`;

// export const CommunitySection = styled.div`

// `;
// export const CommunitySection = styled.div`

// `;
