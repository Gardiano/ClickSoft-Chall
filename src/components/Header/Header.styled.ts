
import styled, { css } from "styled-components";

export const StyledHeaderContainer = styled.header`
width: 100%;
height: 70px;
display: flex;
background: #fff;
flex-direction: row;
align-items: center;
justify-content: center;
border-bottom: 1px solid #eeee;
svg {
  font-size: 36px;
}
`

export const StyledHeaderSvg = styled.svg`
font-size: 42px;
margin-right: 8px;
color: red;
`

export const StyledHeaderContent = styled.div`
width: 100%;
max-width: 900px;
display: flex;
flex-direction: row;
align-items: center;
padding: 0 20px 0 20px;
justify-content: space-between;
`

export const StyledHeaderTitle = styled.b`
font-size: 26px;
color: #333;
`

export const StyledHeaderMenuButton = styled.button`
border: 0;
width: 34px;
height: 34px;
display: flex;
cursor: pointer;
border-radius: 4px;
align-items: center;
justify-content: center;
box-shadow: 5px 2px 5px #d9d9d9, 0px 0px 5px #ffffff;
svg {
  font-size: 16px;
  margin: 0;
}
`

const StyledHeaderMedia = css`
  @media screen and (max-width: 500px) {
   ${StyledHeaderTitle} {
    font-size: 20px;
   }
  }
`;

export const StyledHeader = styled(StyledHeaderContainer)`
  ${StyledHeaderMedia}
`;