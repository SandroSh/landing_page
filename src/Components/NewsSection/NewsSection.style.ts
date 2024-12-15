import styled from "styled-components";

export const NewsSectionDiv = styled.div`
  max-width: 1440px;
  margin:0 auto;
`;

export const NewsCardsDiv = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  margin-top: 77px;
  gap:10px;
  @media (max-width: 1050px) {
    gap:50px;
  }
`;
// export const NewsSectionDiv = styled.div`

// `;
