
import { StyledHome } from './Home.styled';
import { SearchBar } from "../../components/Search/Search";
import { Card } from '../../components/card/Card';

export const Home = () => {
  return (
    <StyledHome>
      <h1>Procure pelo seu usuário favorito.</h1>
      <SearchBar />
      <Card />
    </StyledHome>
  );
};