import 'antd/dist/antd.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NewsProvider  from './context/NewsContext'
import Login from "./pages/Login/Login";
import Index from "./pages/Index/Index";
import UserPage from "./pages/UserPage/UserPage";


function App() {

  return (
    <NewsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Index />} />
          <Route path="userpage" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </NewsProvider>
  );
}

export default App;
