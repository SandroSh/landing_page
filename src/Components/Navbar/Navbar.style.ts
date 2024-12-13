import styled, { css } from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  padding: 18px 135px;
  background-color: transparent;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.lightBlue};
`;

const WrappersStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const SearchInput = styled.input`
  color: #686868;
  border: none;
  height: 33px;
  width: 105px;
  background-color: transparent;
  border-bottom: 1px solid #e5e5e5;
  &:focus {
    border:none;
    outline:none;
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
`;
