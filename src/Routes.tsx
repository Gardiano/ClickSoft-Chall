
// Routes.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Profile } from './pages/Profile/Profile';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/users/:id" element={ <Profile /> } />
      </Routes>
    </BrowserRouter>
  );
};
