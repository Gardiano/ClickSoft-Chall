
import { useState, useContext } from "react";
import { api } from "../../services/axios";
import { StyledSearchBarContainer } from "./Search.styled";
import { IoSearchSharp } from "react-icons/io5";
import { UserDataContext } from "../context/UserContext";
import { users } from "../../models/Users";

export const SearchBar = () => {
  const { setData } = useContext(UserDataContext);
  const [inputValue, setInputValue] = useState<string>('');
  const [timer, setTimer] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setInputValue(newValue);

    if (timer) {
      clearTimeout(timer);
    }

    // debounce em 1.5 segundos
    const debounce = setTimeout(() => {
      // get na api
      getUserData(newValue);
    }, 1500);

    // atualiza o atraso para um novo character digitado.
    setTimer(debounce);
  };

  const getUserData = async (user: string) => {
    try {
      const response = await api.get<users>(`/${user}`);
      console.log(response.data)
      setData(response.data);
    } catch (error) {
      return error;
    }
  }

  return (
    <StyledSearchBarContainer>
      <input
        autoFocus
        value={inputValue}
        onChange={handleChange}
        placeholder="  Exemplo: Linus Torvalds"
      />
      <button> <IoSearchSharp /> </button>
    </StyledSearchBarContainer>
  );
}