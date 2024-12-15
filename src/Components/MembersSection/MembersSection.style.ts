import styled from "styled-components";

export const MembersSectionDiv = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:0 auto;
`;

export const SwitcherDiv = styled.div`
  max-width: 475px;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background: rgba(33, 123, 244, 0.1) 0% 0% no-repeat padding-box;
  border-radius: 14px;
  margin: 42px 0 74px 0;
`;

export const TypeWrapper = styled.div`
  width: calc(100% / 3);

  max-width: 150px;
  padding: 18px 50px;
  background: ${({ theme }) => theme.Blue};
  p {
    color: #2f2c4a;
  }
  &:nth-child(3) {
    background-color: ${({ theme }) => theme.blue};
    border-radius: 14px;
    p {
      color: white;
    }
    &:hover {
      transform: scale(0.98);
      transition: 1s;
    }
  }
`;
export const MembersDiv = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  gap:30px;
  margin-bottom:120px;
`;
