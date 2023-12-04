
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/axios";
import { repos } from "../../models/Repos";
import moment from 'moment';
import {
  MdDeveloperMode,
  MdOutlineDescription,
  MdOutlineSubtitles
} from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoGitBranch } from "react-icons/io5";

import {
  StyledRepos,
  StyledReposContent,
  StyledReposData,
  StyledReposDataItens,
  StyledReposDataTitle,
  StyledReposTitle
} from "./Repositories.styled";
import { Loader } from "../loaders/Loader";

export const Repositories = () => {
  const params = useParams();
  const [repos, setRepos] = useState<repos[]>([]);

  useEffect(() => {
    getRepos();
  }, [params.id]);

  // get data
  const getRepos = async () => {
    try {
      const response = await api.get(`/${params.id}/repos`);
      setRepos(response.data);
    } catch (error) {
      return error;
    }
  }

  // format data
  function formatDateToPtBR(dataString: string) {
    return moment(dataString).format('DD/MM/YYYY HH:mm:ss');
  }

  return (
    <StyledRepos>
      <StyledReposTitle>
        {repos.length ? <> Repositórios {`(${(repos.length)})`} </> : <> Repositórios (0) </>}
      </StyledReposTitle>
      <StyledReposContent>
        <>{repos?.length > 0 ? (
          <>
            {repos?.map((repo: repos) => {
              return (
                <Link to={`${repo.svn_url}`} target='_blank' key={repo.id}>
                  <StyledReposData>
                    <StyledReposDataTitle>
                      <MdOutlineSubtitles />
                      {repo.name || 'N/A'}
                    </StyledReposDataTitle>

                    <StyledReposDataItens>
                      <MdOutlineDescription />
                      {repo?.description || 'N/A'}
                    </StyledReposDataItens>

                    <StyledReposDataItens>
                      <MdDeveloperMode />
                      {repo.language || 'N/A'}
                    </StyledReposDataItens>

                    <StyledReposDataItens>
                      <FaRegCalendarCheck />
                      {formatDateToPtBR(repo.created_at)}
                    </StyledReposDataItens>

                    <StyledReposDataItens>
                      <IoGitBranch />
                      {formatDateToPtBR(repo.pushed_at)}
                    </StyledReposDataItens>
                  </StyledReposData>
                </Link>
              )
            })}
          </>
        ) : (
          <Loader message="Não há repositórios no momento." />
        )}
        </>
      </StyledReposContent>
    </StyledRepos>
  )
}