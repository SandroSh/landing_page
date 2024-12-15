import styled from "styled-components";

export const MemberCardDiv = styled.div`
  max-width: 280px;
  height: 315px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 34px 136px #7473801a;
  border-radius: 14px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 50px;
`;

export const ImageDiv = styled.div`
  position: relative;
`;

export const Img = styled.img`
  &:nth-child(1) {
    width: 100%;
    height: 100%;
  }
  &:nth-child(2) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    aspect-ratio: 1;
  }
  &:nth-child(3) {
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);

    aspect-ratio: 1;
  }
`;

export const TextDiv = styled.div`
  h2 {
    color: #2f2c4a;
  }
  p {
    color: #656464;
    margin-top:10px;
  }
`;
