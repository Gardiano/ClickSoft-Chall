
import styled from 'styled-components';
import loader_gif from '../../assets/Github.gif';

const StyledLoader = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50px;
`

export const Loader = () => {
  return <StyledLoader src={loader_gif} />
}