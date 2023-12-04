

import { ImGithub } from "react-icons/im";
import { HiUser } from "react-icons/hi";
import { UserDataContext } from '../context/UserContext';
import { useContext } from 'react';
import {
  StyledHeader,
  StyledHeaderContent,
  StyledHeaderMenuButton,
  StyledHeaderTitle
} from './Header.styled';

export const Header = () => {
  const { openRecentSearchedUsers } = useContext(UserDataContext);
  return (
      <StyledHeader>
        <StyledHeaderContent>
          <ImGithub />
          <StyledHeaderTitle>HUBusca</StyledHeaderTitle>
          <StyledHeaderMenuButton
            onClick={openRecentSearchedUsers}>
            <HiUser />
          </StyledHeaderMenuButton>
        </StyledHeaderContent>
      </StyledHeader>
  )
}