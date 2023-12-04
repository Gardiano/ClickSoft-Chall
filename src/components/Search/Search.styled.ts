
import styled from "styled-components";

export const StyledSearchBarContainer = styled.section`
outline: 0;
height: 100px;
display: flex;
max-width: 700px;
margin: 36px auto;
align-items: center;
flex-direction: row;
justify-content: center;
width: calc(100% - 40px);
box-shadow: 5px 2px 5px #d9d9d9, 0px 0px 5px #ffffff;
input {
border: 0;
outline: 0;
height: 38px;
max-width: 590px;
background: #f8f8f8;
width: calc(100% - 35px);
border-bottom: 1px solid #dedede;
border: 0;
outline: 0;
height: 38px;
max-width: 590px;
position: relative;
left: 14px;
background: #f8f8f8;
width: calc(100% - 40px);
max-width: 570px;
border-bottom: 1px solid #dedede;
}

button {
border: 0;
outline: 0;
right: 20px;
width: 34px;
height: 34px;
position: relative;
border-radius: 40px;
background: transparent;
svg {
font-size: 18px;
}
}
`

export const StyledSearchBarInput = styled.input`
border: 0;
outline: 0;
height: 38px;
max-width: 590px;
background: #f8f8f8;
width: calc(100% - 35px);
border-bottom: 1px solid #dedede;
border: 0;
outline: 0;
height: 38px;
max-width: 590px;
position: relative;
left: 14px;
background: #f8f8f8;
width: calc(100% - 40px);
max-width: 570px;
border-bottom: 1px solid #dedede;
&::placeholder {
  font-family: 'Courier New', Courier, monospace;
}
`