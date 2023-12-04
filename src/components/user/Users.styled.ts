
import styled, { css } from "styled-components";
import { StyledCardImage } from "../../components/card/Card.styled";

export const StyledUserContainer = styled.div`
gap: 14px 0;
width: 100%;
max-width: 300px;
height: auto;
display: flex;
background: #fff;
border-radius: 4px;
align-items: center;
padding: 20px 0 20px 0px;
flex-direction: column;
justify-content: center;
`

export const StyledUserImage = styled(StyledCardImage)`
top: 0;
width: 180px;
height: 180px;
box-shadow: 5px 2px 5px #d9d9d9, 0px 0px 5px #ffffff;
`;

export const StyledUserBio = styled.p`
color: #777777;
svg {
margin-right: 4px;
}
`
export const StyledUserId = styled(StyledUserBio)``

export const StyledUserStats = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  max-width: 350px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: calc(100% - 40px);
`;

export const StyledUserStatsCounter = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  color: #333;
  font-size: 14px;
  font-weight: 600;
  align-items: center;
  background: #f8f8f8;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #333;
  font-family: 'Outfit', sans-serif;
  box-shadow: 5px 2px 5px #d9d9d9, 0px 0px 5px #ffffff;
`;

export const StyledUserStatsCounterName = styled.p`
  color: #777777;
  font-weight: 500;
`;


const StyledUserMedia = css`
  @media screen and (max-width: 500px) {
    ${StyledUserImage} {
      width: 150px;
      height: 150px;
    }
    ${StyledUserStats} {
      height: auto;
      gap: 12px 0;
      max-width: 200px;
      flex-direction: column;
    }
    ${StyledUserStatsCounter} {
      height: 50px;
      border: 0;
      border-radius: 8px;
    }
  }
`;

export const StyledUser = styled(StyledUserContainer)`
  ${StyledUserMedia}
`;