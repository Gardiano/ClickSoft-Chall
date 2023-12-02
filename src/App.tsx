
import { AppRoutes } from './Routes'
import { Header } from './components/Header/Header';
import { UserDataProvider } from './components/context/UserContext';

function App() {
  return (
    <>
    <Header/>
    <UserDataProvider>
      <AppRoutes />
    </UserDataProvider>
    </>
  );
}

export default App;
