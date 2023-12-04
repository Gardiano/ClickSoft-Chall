

import { AppRoutes } from './Routes';
import { Header } from './components/header/Header';
import { UserDataProvider } from './components/context/UserContext';

const App = () => {
  return (
    <>
      <UserDataProvider>
        <Header/>
        <AppRoutes />
      </UserDataProvider>
    </>
  );
}

export default App;
