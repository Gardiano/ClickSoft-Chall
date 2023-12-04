

import { ImGithub } from "react-icons/im";
import { HiUsers } from "react-icons/hi";
import { UserDataContext } from '../context/UserContext';
import { useContext } from 'react';
import { 
  StyledHeader, 
  StyledHeaderContent, 
  StyledHeaderMenuButton, 
  StyledHeaderSvg, 
  StyledHeaderTitle 
} from './Header.styled'
export const Header = () => {
  const { openRecentSearchedUsers } = useContext(UserDataContext);
  return (
    <>
      <StyledHeader>
        <StyledHeaderContent>
          <StyledHeaderSvg>
            <ImGithub />
          </StyledHeaderSvg>
          <StyledHeaderTitle>HUBusca</StyledHeaderTitle>
          <StyledHeaderMenuButton
            onClick={openRecentSearchedUsers}>
            <HiUsers />
          </StyledHeaderMenuButton>
        </StyledHeaderContent>
      </StyledHeader>
    </>

  )
}