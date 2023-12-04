
import styled, { css } from "styled-components";

// repos;
export const StyledReposContainer = styled.div`
max-width: 590px;
width: calc(100% - 40px);
`
export const StyledReposTitle = styled.h2`
color: #333;
text-align: center;
`

export const StyledReposContent = styled.div`
width: 100%;
height: 100%;
display: flex;
gap: 12px 0;
align-items: center;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
padding: 0 0 20px 0;
a {
width: 100%;
display: flex;
text-decoration: none;
color: #333;
justify-content: center;
}
`

export const StyledReposData = styled.div`
width: calc(100% - 40px);
height: auto;
display: flex;
gap: 10px 0;
flex-direction: column;
justify-content: center;
padding: 12px 0 12px 0;
border-bottom: 1px solid #333;
box-shadow: 5px 2px 5px #d9d9d9, 0px 0px 5px #ffffff;
`

export const StyledReposDataTitle = styled.b`
color: #5d5d5dc7;
display: flex;
font-size: 18px;
align-items: center;
svg {
  color: #333;
  margin-right: 10px;
}
`
export const StyledReposDataItens = styled.span`
color: #333;
text-wrap: nowrap;
overflow: hidden;
text-overflow: ellipsis;
width: calc(100% - 20px);
svg {
  margin-right: 8px;
}
`

const StyledReposMedia = css`
  @media screen and (max-width: 500px) {
    ${StyledReposTitle} {
      font-size: 20px;
    }
    ${StyledReposDataTitle} {
      font-size: 16px;
    }
    ${StyledReposDataItens} {
      max-width: 300px;
    }
  }
`;

export const StyledRepos = styled(StyledReposContainer)`
  ${StyledReposMedia}
`;