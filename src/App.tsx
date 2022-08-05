import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import LanternsSky from './Pages/LanternsSky';
import NotFound404 from './Pages/NotFound404/NotFound404';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="lanterns" element={<LanternsSky />} />
      </Route>

      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default App;
