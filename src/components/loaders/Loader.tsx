
import styled from 'styled-components';
import loader_gif from '../../assets/Github.gif';

const StyledLoader = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50px;
`

const StyledLoaderMessage = styled.h2`
  width: 72%;
  text-align: center;
  font-size: 18px;
`

export const Loader = ( ) => {
  return (
    <>
      <StyledLoaderMessage>Procure um usuário na barra de pesquisas...</StyledLoaderMessage>
      <StyledLoader src={loader_gif} />
    </>
  )
}