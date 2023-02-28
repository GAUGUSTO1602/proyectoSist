import React from 'react'
import Styles from "./NavBar.module.css"
import { Link } from 'react-router-dom';
import {HOME_URL,LOGIN_URL,DOCTORS_URL, SelReg_URL, PerPac_URL, PerDoc_URL } from '../../constants/urls'
import { useUser } from '../../context/UserContext';
import { logout } from '../../firebase/auth-service';

function NavBar() {

    const { user } = useUser();

    const handleLogout = async() => {
        console.log('SALIENDO...');
        await logout();
    }
  return (
    <div>
        <header className={Styles.header}>
                <div className={Styles.logo}>
                    <img src="img/Logo.png" alt="" />
                </div>
            <nav>                            

                <ul className={Styles.navLinks}>
                    <li>
                        <Link to={HOME_URL} className={`${Styles.item}`}>
                            <span>HomePage</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={DOCTORS_URL} className={`${Styles.item}`}>
                            <span>Doctores</span>
                        </Link>

                    </li>

                    {!user && (
                        <>
                            <li>
                                <button className={Styles.inicio}>
                                    <Link to={LOGIN_URL} className={`${Styles.item}`}>
                                        <span>Iniciar Sesión</span>
                                    </Link>
                                </button>
                                
                            </li>
                            <li>
                                <button className={Styles.registro}>
                                        <Link to={SelReg_URL} className={`${Styles.item}`}>
                                            <span>Registrarse</span>
                                        </Link>
                                </button>
                            </li>
                        
                        </>
                    )}

                    {!!user && 
                    (<>

                        {user.rol == 'paciente' && (
                            <>
                            
                                <li >
                                    <Link to={PerPac_URL} className={`${Styles.item}`}>
                                        <span> Perfil, {user.name}</span>
                                    </Link>
                                </li>
                            </>
                        )}

                        {user.rol == 'doctor' && (
                            <>
                                <li >
                                    <Link to={PerDoc_URL} className={`${Styles.item}`}>
                                        <span> Perfil, {user.name}</span>
                                    </Link>
                                </li>
                            
                            </>
                        )}


                        <li>
                            <button type = 'button' onClick={handleLogout}>
                                Salir
                            </button>
                        </li>

                    </>)}
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default NavBar