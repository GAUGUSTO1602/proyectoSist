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
import Doctors from './pages/Doctors/Doctors'
import ChatPage from './pages/ChatPage/ChatPage';
import { HOME_URL, LOGIN_URL, SelReg_URL,RegPac_URL, RegDoc_URL, PerDoc_URL, PerPac_URL,DOCTORS_URL, CHAT_URL, CompRegPacPage_URL, CompRegDocPage_URL } from './constants/urls'
import { Layout } from './components/Layout/Layout';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { CompRegPacPage } from './pages/CompRegPacPage/CompRegPacPage';
import { CompRegDocPage } from './pages/CompRegDocPage/CompRegDocPage';

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
            <Route path={DOCTORS_URL} element={<Doctors/>} />
            
            <Route path={RegPac_URL} element={<RegPacPage/>} />
            <Route path={CHAT_URL} element={<ChatPage/>} />

            <Route path={CompRegPacPage_URL} element = {<CompRegPacPage />} />
            <Route path={CompRegDocPage_URL} element = {<CompRegDocPage />} />
            
            

              <Route path={PerPac_URL} element={
              <PrivateRoute>                
                <PerPacPage/>
              </PrivateRoute>
              } />


          </Route>
    


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
