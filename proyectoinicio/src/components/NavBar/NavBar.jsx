import React from 'react'
import Styles from "./NavBar.module.css"
import { Link } from 'react-router-dom';
import {HOME_URL,LOGIN_URL,DOCTORS_URL } from '../../constants/urls'

function NavBar() {
  return (
    <div>
        <header className={Styles.header}>
            <nav>                            
                <div className={Styles.logo}>
                    <img src="img/Logo.png" alt="" />
                </div>

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
                    <li>
                        <button className={Styles.inicio}>
                            <Link to={LOGIN_URL} className={`${Styles.item}`}>
                                <span>Iniciar Sesión</span>
                            </Link>
                        </button>
                        
                    </li>
                    <li>
                        <button className={Styles.registro}>
                                <Link to={LOGIN_URL} className={`${Styles.item}`}>
                                    <span>Registrarse</span>
                                </Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default NavBar