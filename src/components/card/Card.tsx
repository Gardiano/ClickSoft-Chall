
import { Link } from "react-router-dom";
import { Loader } from "../loaders/Loader";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

import {
  StyledCard,
  StyledCardContent,
  StyledCardImageBox,
  StyledCardImage,
  StyledCardDetails,
  StyledCardUserName,
  StyledCardName,
  StyledCardLocation,
  StyledGitHubBadge
} from "./Card.styled";

import { users } from "../../models/Users";
import { Toast } from "../../helpers/toastContainer";

export const Card = ({ login, name, location, avatar_url, data }: users) => {
  return (
    <>
      {data ?
        <>
          <StyledCard>
            <StyledCardContent>
              <StyledCardImageBox>
                <StyledGitHubBadge>
                  <VscGithub />
                </StyledGitHubBadge>
                <Link to={`/users/${login}`}>
                  <StyledCardImage src={avatar_url} />
                </Link>
              </StyledCardImageBox>
              <StyledCardDetails>
                <StyledCardUserName>
                  <FaUserCircle />
                  {login || 'N/A'}
                </StyledCardUserName>

                <StyledCardName>
                  <FaUserCheck />
                  {name || 'N/A'}
                </StyledCardName>

                <StyledCardLocation>
                  <IoLocationOutline />
                  {location || 'N/A'}
                </StyledCardLocation>
              </StyledCardDetails>
            </StyledCardContent>
          </StyledCard>
          <Toast />
        </>
        :
        <>
          <Loader message=" Procure um usuário utilizando a barra de pesquisa..." />
        </>
      }
    </>
  )
}