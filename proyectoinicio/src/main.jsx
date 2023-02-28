import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage';
import SelecPage from './pages/SelecPage/SelecPage';
import RegDocPage from './pages/RegDocPage/RegDocPage';
import RegPacPage from './pages/RegPacPage/RegPacPage';
import PerDocPage from './pages/PerDocPage/PerDocPage';
import PerPacPage from './pages/PerPacPage/PerPacPage';
import ChatPage from './pages/ChatPage/Chat';
import { HOME_URL, LOGIN_URL, SelReg_URL,RegPac_URL, RegDoc_URL, PerDoc_URL, PerPac_URL, CHAT_URL } from './constants/urls'
import { Layout } from './components/Layout/Layout';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

          <Route element = {<Layout/>}>

            <Route path={HOME_URL} element={<HomePage />} />
            <Route path={LOGIN_URL} element={<LoginPage />} />
            <Route path={SelReg_URL} element={<SelecPage />} />
            
            <Route path={RegDoc_URL} element={<RegDocPage />} />
            <Route path={PerDoc_URL} element={<PerDocPage/>} />
            
            
            <Route path={RegPac_URL} element={<RegPacPage/>} />
            <Route path={PerPac_URL} element={<PerPacPage/>} />
            <Route path={CHAT_URL} element={<ChatPage/>}/>

          </Route>
    


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
