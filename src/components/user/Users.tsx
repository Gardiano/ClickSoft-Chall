
import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserDataContext } from '../../components/context/UserContext';
import { api } from "../../services/axios";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import loader_gif from '../../assets/Github.gif';

import {
  StyledCardName,
  StyledCardUserName,
  StyledCardLocation,
} from '../../components/card/Card.styled'

import {
  StyledUserBio,
  StyledUserStats,
  StyledUserImage,
  StyledUserStatsCounter,
  StyledUserStatsCounterName,
  StyledUser,
  StyledUserId,

} from './Users.styled';
import { users } from '../../models/Users';

export const User = () => {
  const params = useParams();
  const { setOpenMenu } = useContext(UserDataContext);
  const [data, setData] = useState<users>([]);

  useEffect(() => {
    getUser(params.id);
    setOpenMenu(false);
  }, [params]);

  const getUser = async (user: string | undefined) => {
    try {
      const response = await api.get<users>(`/${user}`);
      // dados diferentes de null ou undefined 
      // atualiza as states e dispara o toast de sucesso.
      if (response.data) {
        setData(response.data);
      }
    } catch (error) {
      return error;
    }
  }

  return (
    <>
      <StyledUser>
        <StyledUserImage src={data?.avatar_url || loader_gif} />
        <StyledUserId>
          #{data?.id}
        </StyledUserId>
        <StyledCardUserName>
          <FaUserCircle />
          {data?.login}
        </StyledCardUserName>

        <StyledCardName>
          <FaUserCheck />
          {data?.name}
        </StyledCardName>

        <StyledUserBio>
          <MdDeveloperMode /> {data?.bio || 'N/A'}
        </StyledUserBio>

        <StyledCardLocation>
          <IoLocationOutline />
          {data?.location || 'N/A'}
        </StyledCardLocation>

        <StyledUserStats>
          <StyledUserStatsCounter>
            {data?.followers}
            <StyledUserStatsCounterName>
              Seguidores
            </StyledUserStatsCounterName>
          </StyledUserStatsCounter>

          <StyledUserStatsCounter>
            {data?.following}
            <StyledUserStatsCounterName>
              Seguindo
            </StyledUserStatsCounterName>
          </StyledUserStatsCounter>

          <StyledUserStatsCounter>
            {data?.public_repos}
            <StyledUserStatsCounterName>
              Repositórios
            </StyledUserStatsCounterName>
          </StyledUserStatsCounter>
        </StyledUserStats>
      </StyledUser>
    </>
  )
}