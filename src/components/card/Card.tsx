
import { UserDataContext } from "../context/UserContext"
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Loader } from "../loaders/Loader";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";


import {
  StyledCardContainer,
  StyledCardContent,
  StyledCardImageBox,
  StyledCardImage,
  StyledCardDetails,
  StyledCardUserName,
  StyledCardName,
  StyledCardLocation,
  StyledGitHubBadge
} from "./Card.styled";

export const Card = () => {

  const { data } = useContext(UserDataContext);

  return (
    <>
      {data ? (
        <StyledCardContainer>
          <StyledCardContent>
            <StyledCardImageBox>
              <StyledGitHubBadge>
                <VscGithub />
              </StyledGitHubBadge>
              <Link to={`/users/${data.login}`}>
                <StyledCardImage src={data.avatar_url} />
              </Link>
            </StyledCardImageBox>
            <StyledCardDetails>
              <StyledCardUserName>
                <FaUserCircle />
                {data.login}
              </StyledCardUserName>

              <StyledCardName>
                <FaUserCheck />
                {data.name}
              </StyledCardName>

              <StyledCardLocation>
                <IoLocationOutline />
                {data.location}
              </StyledCardLocation>
            </StyledCardDetails>
          </StyledCardContent>
        </StyledCardContainer>
      ) : (
       <> 
        <b> 
          Procure por um usuário utilizando a barra de pesquisa, é rapido e simples.
        </b>
        <Loader /> 
       </>
      )}
    </>
  )
}