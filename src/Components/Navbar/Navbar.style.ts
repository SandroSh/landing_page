import styled, { css } from "styled-components";
export const OuterWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.lightBlue};
`;

export const MainDiv = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 18px 135px;
  background-color: transparent;
  align-items: center;
  @media (max-width: 900px) {
    justify-content:center;
  }
`;

const WrappersStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Ul = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    display: none;
  }
`;
export const LeftWrapper = styled.div`
  ${WrappersStyle}
  gap:72px;
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.lightGray};
    margin-right: 32px;
  }
`;
export const RightWrapper = styled.div`
  ${WrappersStyle}
  align-items:baseline;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  color: #686868;
  border: none;
  height: 33px;
  width: 105px;
  background-color: transparent;
  border-bottom: 1px solid #e5e5e5;
  &:focus {
    border: none;
    outline: none;
  }
`;
export const LoginButton = styled.button`
  padding: 17px 43px;
  border-radius: 14px;
  border: 0;
  cursor: pointer;
  font-weight: 700;
  background-color: ${({ theme }) => theme.blue};
  color: white;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-right: 5px;
  }
`;
