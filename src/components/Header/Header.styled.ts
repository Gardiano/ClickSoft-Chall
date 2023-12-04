
import styled from "styled-components";

export const StyledHeader = styled.header`
width: 100%;
height: 70px;
display: flex;
background: #fff;
flex-direction: row;
align-items: center;
justify-content: center;
border-bottom: 1px solid #eeee;
h1 {
font-size: 26px;
color: #333;
}
svg {
font-size: 42px;
margin-right: 8px;
}
`

export const StyledHeaderContent = styled.div`
width: 100%;
max-width: 900px;
display: flex;
flex-direction: row;
align-items: center;
padding: 0 20px 0 20px;
justify-content: space-between;
button {
width: 34px;
height: 34px;
border: 0;
display: flex;
align-items: center;
border-radius: 4px;
cursor: pointer;
justify-content: center;
box-shadow: 5px 2px 5px #d9d9d9, 0px 0px 5px #ffffff;
svg {
  font-size: 16px;
  margin: 0;
}
}
`