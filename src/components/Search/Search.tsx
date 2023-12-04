
import { useState, useContext } from "react";
import { api } from "../../services/axios";

import { IoSearchSharp } from "react-icons/io5";
import { UserDataContext } from "../context/UserContext";
import { users } from "../../models/Users";
import { errorToast, successToast } from "../../helpers/toasts";
import { 
  StyledSearchBarContainer, 
  StyledSearchBarInput 
} from "./Search.styled";

export const SearchBar = () => {
  const { setData, setSearchedUsers } = useContext(UserDataContext);
  const [inputValue, setInputValue] = useState<string>('');
  const [timer, setTimer] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (timer) {
      clearTimeout(timer);
    }
    // debounce em 1.5 segundos
    const debounce = setTimeout(() => {
      // get na api
      getUserData(value);
    }, 1500);
    // atualiza o atraso para um novo character digitado.
    setTimer(debounce);
  };

  const getUserData = async (user: string) => {
    try {
      const response = await api.get<users>(`/${user}`);
      setData(response.data);
      addSearchedUser(response.data);
      successToast();
    } catch (error) {
      errorToast();
      return error;
    }
  };

  const addSearchedUser = (user: users) => {
    if (user !== null) {
      const storedData = localStorage.getItem('searchedUsers');
      const existingUsers = storedData ? JSON.parse(storedData) : [];
      // Verifica se o usuário já existe na lista
      const userExists = existingUsers.some((existingUser: users) => {
        return existingUser.login === user.login
      });
      if (!userExists) {
        // Adiciona o novo usuário à lista
        existingUsers.push(user);
        // Salva os dados atualizados de volta no localStorage
        localStorage.setItem('searchedUsers', JSON.stringify(existingUsers));
        setSearchedUsers(existingUsers);
      }
    }
  };

  return (
    <StyledSearchBarContainer>
      <StyledSearchBarInput
      autoFocus
      value={inputValue}
      onChange={handleChange}
      placeholder=" Procurar..."
      />
      <button> <IoSearchSharp /> </button>
    </StyledSearchBarContainer>
  );
}