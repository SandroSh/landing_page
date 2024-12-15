import styled from "styled-components";

export const FooterOuterWrapper = styled.div`
  width: 100%;
  margin-top: 120px;
`;

export const UpperWrapper = styled.div`
  width: 100%;
  background: #2b2b39 0% 0% no-repeat padding-box;
`;
export const LowerWrapper = styled.div`
  width: 100%;
  background: #20202d 0% 0% no-repeat padding-box;
`;
export const FooterDiv = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  padding: 77px 135px 98px 135px;
`;
export const NewsLetterDiv = styled.div`
  color: white;
  max-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-size: 16px;
    line-height: 30px;
  }
`;

export const InputDiv = styled.div`
  position: relative;
  input {
    border: 1px solid #ffffffd9;
    border-radius: 12px;
    padding: 16px 24px;
    background-color: transparent;
    height: 48px;
    color: white;
    &:focus {
      outline: none;
    }
  }
  button {
    height: 48px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 12px;
    padding: 16px 24px;
    outline: none;
    border: none;
    position: absolute;
    right: 10%;
  }
`;

export const PlatformsDiv = styled.div`
    img{
        margin-right:8px;
    }
`;
// right:10%;
// }
// `;
