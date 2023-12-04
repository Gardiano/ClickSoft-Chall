
import { StyledHeader,StyledHeaderContent } from './Header.styled'
import { ImGithub } from "react-icons/im";
import { HiUsers } from "react-icons/hi";
import { UserDataContext } from '../context/UserContext';
import { useContext } from 'react';

export const Header = () => {
  const { openRecentSearchedUsers } = useContext(UserDataContext);
  return (
  <StyledHeader>
    <StyledHeaderContent>
    <ImGithub /> <h1> HUBusca </h1>
    <button onClick={openRecentSearchedUsers}> <HiUsers /> </button>
    </StyledHeaderContent>
  </StyledHeader>
  )
}