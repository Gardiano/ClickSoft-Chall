
import styled from "styled-components";

export const StyledSearchBarContainer = styled.section`
outline: 0;
height: 100px;
display: flex;
margin: 36px auto;
align-items: center;
flex-direction: row;
justify-content: center;
width: calc(100% - 40px);
max-width: 700px;
box-shadow: 5px 2px 5px #d9d9d9, 0px 0px 5px #ffffff;
input {
border: 0;
outline: 0;
height: 38px;
max-width: 590px;
background: #f8f8f8;
width: calc(100% - 35px);
border-bottom: 1px solid #dedede;
}

button {
border: 0;
outline: 0;
width: 40px;
height: 40px;
cursor: pointer;
margin-left: 14px;
border-radius: 40px;
box-shadow: 5px 2px 5px #d9d9d9, 0px 0px 5px #ffffff;
svg {
font-size: 18px;
}
}
`