import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage';
import SelecPage from './pages/SelecPage/SelecPage';
import RegDocPage from './pages/RegDocPage/RegDocPage';
import RegPacPage from './pages/RegPacPage/RegPacPage';
import PerDocPage from './pages/PerDocPage/PerDocPage';
import PerPacPage from './pages/PerPacPage/PerPacPage';
import Doctors from './pages/Doctors/Doctors'
// import ChatPage from './pages/ChatPage/ChatPage';
import ChatContainer from './pages/ChatPage2/ChatContainer';
import { HOME_URL, LOGIN_URL, SelReg_URL,RegPac_URL, RegDoc_URL, PerDoc_URL, PerPac_URL,DOCTORS_URL, CHAT_URL, CompRegPacPage_URL, CompRegDocPage_URL, AnyElsePage_URL, CHAT2_URL, PayPage_URL } from './constants/urls'
import { Layout, LayoutWithNavbar } from './components/Layout/Layout';
import { PrivateRouteCompleteUserDoctor, PrivateRouteCompleteUserPatient, PrivateRouteIncompleteUser, PrivateRouteNotUser, PrivateRouteUser } from './PrivateRoute/PrivateRoute';
import { CompRegPacPage } from './pages/CompRegPacPage/CompRegPacPage';
import { CompRegDocPage } from './pages/CompRegDocPage/CompRegDocPage';
import { AnyElsePage } from './pages/AnyElsePage/AnyElsePage';
import { UserContextProvider } from './context/UserContext';
import { ChatContextProvider } from './context/ChatContext';
import { PayPage } from './pages/PayPage/PayPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>


                <Route element = {<LayoutWithNavbar/>}>

                  <Route path={HOME_URL} element={<HomePage />} />


                  

                  <Route path={DOCTORS_URL} element={
                    <PrivateRouteIncompleteUser>
                      <Doctors/>
                    </PrivateRouteIncompleteUser>              
                  } />

                  <Route path={CompRegPacPage_URL} element = {
                  <PrivateRouteUser>
                    <PrivateRouteCompleteUserPatient>
                      <CompRegPacPage />
                    </PrivateRouteCompleteUserPatient>
                  </PrivateRouteUser>
                  } />           
      
                  <Route path={CompRegDocPage_URL} element = {
                    <PrivateRouteUser>
                      <PrivateRouteCompleteUserDoctor>
                        <CompRegDocPage />
                      </PrivateRouteCompleteUserDoctor>
                  </PrivateRouteUser>
                  } /> 

                  
                </Route>
                
              <Route element = {<Layout/>}>            

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
                  <PrivateRouteIncompleteUser>
                    <PerDocPage/>
                  </PrivateRouteIncompleteUser>
                </PrivateRouteUser>
                } />

                
                
                <Route path={RegPac_URL} element={
                <PrivateRouteNotUser>
                  <RegPacPage/>
                </PrivateRouteNotUser>
                } />
                
                <Route path={CHAT2_URL} element={
                <PrivateRouteUser>
                  <PrivateRouteIncompleteUser>
                    <ChatContainer/>
                  </PrivateRouteIncompleteUser>
                </PrivateRouteUser>
                } />
                
                

                <Route path={PerPac_URL} element={
                <PrivateRouteUser>                
                  <PrivateRouteIncompleteUser>
                    <PerPacPage/>
                  </PrivateRouteIncompleteUser>
                </PrivateRouteUser>
                } />

                <Route path={PayPage_URL} element={
                <PrivateRouteUser>
                  <PayPage/>
                </PrivateRouteUser>
                }/>
                
                <Route path={AnyElsePage_URL} element={<AnyElsePage/>}/>


              </Route>
        


          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </ChatContextProvider>
  </UserContextProvider>
)
