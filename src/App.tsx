import { FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import NotFound404 from './Pages/NotFound404/NotFound404';

const App: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound404/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
