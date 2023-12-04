
import { ReactNode, useState, createContext } from "react";
import { users } from "../../models/Users";

type UserDataContextProviderProps = {
  children: ReactNode
}

type AuthContextTypes = {
  data: users | undefined;
  openMenu: boolean
  searchedUsers: users | undefined
  setSearchedUsers: React.Dispatch<React.SetStateAction<users | undefined>>;
  openRecentSearchedUsers: () => void
  setData: React.Dispatch<React.SetStateAction<users | undefined>>;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserDataContext = createContext({} as AuthContextTypes);

// Gerenciando states entre components.
export function UserDataProvider(props: UserDataContextProviderProps) {
  const [data, setData] = useState<users>();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [searchedUsers, setSearchedUsers] = useState<users>();

  const openRecentSearchedUsers = () => {
    setOpenMenu(prevState => !prevState);
  }

  return (
    <UserDataContext.Provider value={{
      data,
      setData,
      searchedUsers,
      setSearchedUsers,
      openMenu,
      setOpenMenu,
      openRecentSearchedUsers
    }}>
      {props.children}
    </UserDataContext.Provider>
  );
};