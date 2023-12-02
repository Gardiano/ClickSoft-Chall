
import { useEffect, useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserDataContext } from '../../components/context/UserContext';
import { api } from "../../services/axios";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { IoGitBranch } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import { MdOutlineSubtitles } from "react-icons/md";

import {
  StyledCardName,
  StyledCardUserName,
  StyledCardLocation,
} from '../../components/card/Card.styled'

import {
  StyledProfileContainer,
  StyledProfileContent,
  StyledProfileImage,
  StyledProfileBio,
  StyledProfileStats,
  StyledProfileStatsCounter,
  StyledProfileStatsCounterName,
  StyledProfile,
  StyledProfileBox,
  StyledProfileId,
  StyledProfileReposContainer,
  StyledProfileReposTitle,
  StyledProfileReposContent,
  StyledProfileReposData,
  StyledProfileReposDataTitle,
  StyledProfileReposDataItens,

} from './Profile.styled';

import { repos } from '../../models/Repos';

import moment from 'moment';

export const Profile = () => {
  const params = useParams();
  const { data } = useContext(UserDataContext)
  const [repos, setRepos] = useState<repos[]>([]);

  useEffect(() => {
    console.log(params.id, data)
    getRepos();
  }, []);

  const getRepos = async () => {
    try {
      const response = await api.get(`/${params.id}/repos`);
      setRepos(response.data)
      console.log('rep', response.data)
    } catch (error: any) {
      console.log(error)
    }
  }

  function formatDateToPtBR(dataString: string) {
    return moment(dataString).format('DD/MM/YYYY HH:mm:ss');
  }

  return (
    <StyledProfileContainer>
      <StyledProfileContent>
        <StyledProfileBox>
          <StyledProfile>
            <StyledProfileImage src={data?.avatar_url} />
            <StyledProfileId>
              #{data?.id}
            </StyledProfileId>
            <StyledCardUserName>
              <FaUserCircle />
              {data?.login}
            </StyledCardUserName>

            <StyledCardName>
              <FaUserCheck />
              {data?.name}
            </StyledCardName>

            <StyledProfileBio>
              <MdDeveloperMode /> {data?.bio}
            </StyledProfileBio>

            <StyledCardLocation>
              <IoLocationOutline />
              {data?.location}
            </StyledCardLocation>

            <StyledProfileStats>
              <StyledProfileStatsCounter>
                {data?.followers}
                <StyledProfileStatsCounterName>
                  Seguidores
                </StyledProfileStatsCounterName>
              </StyledProfileStatsCounter>

              <StyledProfileStatsCounter>
                {data?.following}
                <StyledProfileStatsCounterName>
                  Seguindo
                </StyledProfileStatsCounterName>
              </StyledProfileStatsCounter>

              <StyledProfileStatsCounter>
                {data?.public_repos}
                <StyledProfileStatsCounterName>
                  Repositórios
                </StyledProfileStatsCounterName>
              </StyledProfileStatsCounter>
            </StyledProfileStats>
          </StyledProfile>

          <StyledProfileReposContainer>
            <StyledProfileReposTitle>
              {data?.public_repos ? <>Repositórios {(`(${data.public_repos})`)}</> : <p> 0 </p>}
            </StyledProfileReposTitle>
            <StyledProfileReposContent>
              <>
                {repos.map((repo: repos) => {
                  return (
                    <Link to={`${repo.svn_url}`} target='_blank' key={repo.id}>
                      <StyledProfileReposData>
                        <StyledProfileReposDataTitle>
                          <MdOutlineSubtitles />
                          {repo.name}
                        </StyledProfileReposDataTitle>

                        <StyledProfileReposDataItens>
                          <MdOutlineDescription />
                          {repo?.description ? repo.description : <p> Indisponível </p>}
                        </StyledProfileReposDataItens>

                        <StyledProfileReposDataItens>
                          <MdDeveloperMode />
                          {repo.language ? repo.language : <p> Indisponível </p>}
                        </StyledProfileReposDataItens>

                        <StyledProfileReposDataItens>
                          <FaRegCalendarCheck />
                          {formatDateToPtBR(repo.created_at)}
                        </StyledProfileReposDataItens>

                        <StyledProfileReposDataItens>
                          <IoGitBranch />
                          {formatDateToPtBR(repo.pushed_at)}
                        </StyledProfileReposDataItens>
                      </StyledProfileReposData>
                    </Link>
                  )
                })}
              </>
            </StyledProfileReposContent>
          </StyledProfileReposContainer>

        </StyledProfileBox>
      </StyledProfileContent>
    </StyledProfileContainer>
  )
}