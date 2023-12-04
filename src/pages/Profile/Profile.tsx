import { Repositories } from '../../components/repositories/Repositories';
import { User } from '../../components/user/Users';
import { useContext } from 'react';
import { UserDataContext } from '../../components/context/UserContext';
import { Menu } from '../../components/menu/RecentSearchedUsers';
import { Button } from '../../components/button/Button';

import {
  StyledProfileContainer,
  StyledProfileContent,
  StyledProfileBox,
} from './Profile.styled'

export const Profile = () => {
  const { openMenu } = useContext(UserDataContext);
  return (
    <>
      <StyledProfileContainer>
        <StyledProfileContent>
          <StyledProfileBox>
            <User />
            <Repositories />
          </StyledProfileBox>
        </StyledProfileContent>
      </StyledProfileContainer>
      {openMenu ? <Menu /> : null}
      <Button route='/' />
    </>
  )
}