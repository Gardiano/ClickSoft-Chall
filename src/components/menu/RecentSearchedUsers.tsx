
import { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../context/UserContext';
import { Card } from '../card/Card';
import { users } from '../../models/Users';

import {
  StyledMenuSearchedUsers,
  StyledMenuSearchedUsersContentTitle,
  StyledMenuSearchedUsersContent
} from './RecentSearchedUsers.styled';

export const Menu = () => {
  const { searchedUsers, setSearchedUsers, openRecentSearchedUsers } = useContext(UserDataContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      const storedData = localStorage.getItem('searchedUsers');
      const existingUsers = storedData ? JSON.parse(storedData) : [];
      setSearchedUsers(existingUsers);
    }
  }, []);

  return (
    <>
      <StyledMenuSearchedUsers>
        <StyledMenuSearchedUsersContentTitle>
          <h1>Pesquisados Recentemente</h1>
          <button onClick={openRecentSearchedUsers}> X </button>
        </StyledMenuSearchedUsersContentTitle>
        <StyledMenuSearchedUsersContent>
          {searchedUsers?.map((user: users) => (
            <Card
              key={user?.id}
              has_data={searchedUsers}
              avatar_url={user.avatar_url}
              location={user.location}
              login={user.login}
              name={user.name}
              map={[]}
            />
          ))}
        </StyledMenuSearchedUsersContent>
      </StyledMenuSearchedUsers>
    </>
  );
};
