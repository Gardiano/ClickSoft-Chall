
import styled, { css } from "styled-components";

export const StyledCardContainer = styled.section`
display: flex;
flex-wrap: wrap;
border-radius: 4px;
margin-bottom: 30px;
flex-direction: row;
align-items: center;
width:calc(100% - 40px);
justify-content: center;
`

export const StyledCardContent = styled.div`
height: 350px;
display: flex;
max-width: 300px;
border-radius: 4px;
align-items: center;
flex-direction: column;
width:calc(100% - 40px);
box-shadow: 5px 2px 5px #d9d9d9, 0px 0px 5px #ffffff;
`

export const StyledCardImageBox = styled.div`
width: 100%;
height: 120px;
display: flex;
background: #333;
align-items: center;
flex-direction: column;
justify-content: center;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
`

export const StyledGitHubBadge = styled.span`
width: 100%;
display: flex;
align-items: flex-end;
justify-content: flex-end;
svg {
    color: #f8f8f8;
    font-size: 18px;
    margin: 38px 10px 0 0;
  }
`

export const StyledCardImage = styled.img`
top: 20px;
width: 120px;
height: 120px;
position: relative;
border-radius: 100px;
`

export const StyledCardDetails = styled.div`
gap: 10px 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`

export const StyledCardUserName = styled.b`
color: #333;
display: flex;
align-items: center;
svg {
  margin-right: 4px;
}
`

export const StyledCardName = styled.strong`
display: flex;
color: #777777;
font-size: 18px;
align-items: center;
svg {
  margin-right: 4px;
}
`
export const StyledCardLocation = styled.p`
margin: 0;
display: flex;
color: #777777;
align-items: center;
svg {
  margin-right: 4px;
}
`

const StyledCardMedia = css`
  @media screen and (max-width: 500px) {
    ${StyledCardContent} {
    width: 100%;
    }
    ${StyledCardImage} {
      width: 105px;
      height: 105px;
    }
    ${StyledCardName} {
    font-size: 16px;
    }
  }
`;

export const StyledCard = styled(StyledCardContainer)`
  ${StyledCardMedia}
`;
