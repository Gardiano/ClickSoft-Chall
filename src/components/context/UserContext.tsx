
import { ReactNode, useState, createContext } from "react";
import { users } from "../../models/Users";

type UserDataContextProviderProps = {
  children: ReactNode
}

type AuthContextTypes = {
  data: users | undefined;
  setData: React.Dispatch< React.SetStateAction <users | undefined> >;
}

export const UserDataContext = createContext({} as AuthContextTypes);

export function UserDataProvider(props: UserDataContextProviderProps) {
  const [data, setData] = useState<users>();
  return (
    <UserDataContext.Provider value={{ data, setData }}  >
      {props.children}
    </UserDataContext.Provider>
  );
};