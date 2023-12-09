import { useContext } from 'react'
import { SearchBar } from "../../components/search/Search";
import { Card } from '../../components/card/Card';
import { UserDataContext } from '../../components/context/UserContext';
import { Menu } from '../../components/menu/RecentSearchedUsers';

import {
  StyledHome,
  StyledHomeTitle,
} from './Home.styled';

export const Home = () => {
  const { openMenu, data } = useContext(UserDataContext);

  return (
    <>
      <StyledHome>
        <StyledHomeTitle>Procure pelo seu usuário favorito.</StyledHomeTitle>
        <SearchBar />
        <Card
          key={data?.id}
          has_data={data}
          avatar_url={data?.avatar_url}
          location={data?.location}
          login={data?.login}
          name={data?.name}
        />
      </StyledHome>
      {openMenu && <Menu />}
    </>
  );
};