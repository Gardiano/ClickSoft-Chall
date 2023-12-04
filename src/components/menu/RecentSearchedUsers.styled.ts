
import styled, { css } from "styled-components"

export const StyledMenuSearchedUsersContainer = styled.section`
top: 0;
width: 100%;
height: 100vh;
display: flex;
z-index: 99999;
position: fixed;
overflow-y: hidden;
align-items: center;
background: #333333de;
flex-direction: column;
justify-content: center;
backdrop-filter: blur(2px);
`
export const StyledMenuSearchedUsersContentTitle = styled.div`
display: flex;
max-width: 700px;
background: #f8f8f8;
flex-direction: row;
justify-content: space-between;
width: calc(100% - 40px);
h1 {
margin: 0;
width: 100%;
text-align: center;
padding: 18px 0 18px 0;
}
button {
border: 0;
outline: 0;
top: 10px;
right: 10px;
width: 25px;
height: 25px;
padding: 4px;
display: flex;
font-size: 12px;
cursor: pointer;
background: #ddd;
position: relative;
border-radius: 20px;
align-items: center;
justify-content: center;
}
`

export const StyledMenuSearchedUsersContent = styled.div`
width: 100%;
display: flex;
height: 410px;
flex-wrap: wrap;
max-width: 700px;
overflow-y: scroll;
background: #f8f8f8;
align-items: center;
flex-direction: row;
padding: 18px 0 0 0;
justify-content: center;
width: calc(100% - 40px);
backdrop-filter: blur(2px);
`

const StyledSearchedUsersMedia = css`
@media screen and (max-width: 500px) {
  ${StyledMenuSearchedUsersContentTitle} {
    h1 {
      font-size: 18px;
    }
  }
  }
`;

export const StyledMenuSearchedUsers = styled(StyledMenuSearchedUsersContainer)`
  ${StyledSearchedUsersMedia}
`;