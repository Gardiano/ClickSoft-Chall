
import styled from "styled-components";
import { StyledCardImage } from "../../components/card/Card.styled";

export const StyledProfileContainer = styled.main`
height: 86vh;
display: flex;
max-width: 900px;
margin: 0 auto;
align-items: center;
flex-direction: column;
width: calc(100% - 40px);
`

export const StyledProfileContent = styled.div`
margin: 0;
width: 100%;
gap: 10px 0;
height: auto;
display: flex;
align-items: center;
padding: 18px 0 0 0;
flex-direction: column;
justify-content: center;
`

export const StyledProfileBox = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: flex-start;
justify-content: space-evenly;
background: #fff;
margin-bottom: 30px;
box-shadow: 5px 2px 5px #d9d9d9, 0px 0px 5px #ffffff;
`

export const StyledProfile = styled.div`
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

export const StyledProfileImage = styled(StyledCardImage)`
top: 0;
width: 180px;
height: 180px;
box-shadow: 5px 2px 5px #d9d9d9, 0px 0px 5px #ffffff;
`;

export const StyledProfileBio = styled.p`
color: #777777;
svg {
margin-right: 4px;
}
`
export const StyledProfileId = styled(StyledProfileBio)``

export const StyledProfileStats = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  max-width: 350px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: calc(100% - 40px);
`;

export const StyledProfileStatsCounter = styled.span`
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

export const StyledProfileStatsCounterName = styled.p`
  color: #777777;
  font-weight: 500;
`;

export const StyledProfileReposContainer = styled.div`
max-width: 590px;
width: calc(100% - 40px);
`

export const StyledProfileReposTitle = styled.h2`
color: #333;
text-align: center;
`

export const StyledProfileReposContent = styled.div`
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

export const StyledProfileReposData = styled.div`
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

export const StyledProfileReposDataTitle = styled.b`
color: #333;
display: flex;
align-items: center;
svg {
  margin-right: 10px;
}
`
export const StyledProfileReposDataItens = styled.span`
color: #333;
display: flex;
align-items: center;
svg {
  margin-right: 8px;
}
`