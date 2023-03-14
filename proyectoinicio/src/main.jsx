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
import { HOME_URL, LOGIN_URL, SelReg_URL,RegPac_URL, RegDoc_URL, PerDoc_URL, PerPac_URL,DOCTORS_URL, CHAT_URL, CompRegPacPage_URL, CompRegDocPage_URL, AnyElsePage_URL } from './constants/urls'
import { Layout } from './components/Layout/Layout';
import { PrivateRouteNotUser, PrivateRouteUser } from './PrivateRoute/PrivateRoute';
import { CompRegPacPage } from './pages/CompRegPacPage/CompRegPacPage';
import { CompRegDocPage } from './pages/CompRegDocPage/CompRegDocPage';
import NavBar from './components/NavBar/NavBar';
import { AnyElsePage } from './pages/AnyElsePage/AnyElsePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

          <Route element = {<Layout/>}>

            <Route element = {<NavBar/>}>

              <Route path={HOME_URL} element={<HomePage />} />              
              <Route path={DOCTORS_URL} element={<Doctors/>} />

            </Route>
            

            <Route path={LOGIN_URL} element={
            <PrivateRouteNotUser>
              <LoginPage />
            </PrivateRouteNotUser>
            } />
            <Route path={SelReg_URL} element={
            <PrivateRouteNotUser>
              <SelecPage />
            </PrivateRouteNotUser>            
            } />
            
            <Route path={RegDoc_URL} element={
            <PrivateRouteNotUser>
              <RegDocPage />
            </PrivateRouteNotUser>
            } />
            
            <Route path={PerDoc_URL} element={
            <PrivateRouteUser>
              <PerDocPage/>
            </PrivateRouteUser>
            } />
            
            
            <Route path={RegPac_URL} element={
            <PrivateRouteNotUser>
              <RegPacPage/>
            </PrivateRouteNotUser>
            } />
            
            <Route path={CHAT_URL} element={
            <PrivateRouteUser>
              <ChatPage/>
            </PrivateRouteUser>
            } />
            
            <Route path={CompRegPacPage_URL} element = {
            <PrivateRouteUser>
              <CompRegPacPage />
            </PrivateRouteUser>
            } />           

            <Route path={CompRegDocPage_URL} element = {
            <PrivateRouteUser>
              <CompRegDocPage />
            </PrivateRouteUser>
            } />          
            

              <Route path={PerPac_URL} element={
              <PrivateRouteUser>                
                <PerPacPage/>
              </PrivateRouteUser>
              } />

              <Route path={AnyElsePage_URL} element={<AnyElsePage/>}/>


          </Route>
    


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
