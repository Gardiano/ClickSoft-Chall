
import styled, { css } from "styled-components"

export const StyledHomeContainer = styled.main`
  height: 86%;
  display: flex;
  max-width: 900px;
  background: #fff;
  margin: 30px auto 30px;
  align-items: center;
  flex-direction: column;
  width: calc(100% - 40px);
  box-shadow: 5px 2px 5px #d9d9d9, 0px 0px 5px #ffffff;
`

export const StyledHomeTitle = styled.h1`
width: 80%;
text-align: center;
margin: 36px auto 0;
`

const StyledHomeMedia = css`
  @media screen and (max-width: 500px) {
    ${StyledHomeTitle} {
      font-size: 18px;
    }
  }
`;

export const StyledHome = styled(StyledHomeContainer)`
  ${StyledHomeMedia}
`;