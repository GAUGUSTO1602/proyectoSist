import React from 'react'
import Styles from "./NavBar.module.css"

function NavBar() {
  return (
    <div>

        <header className={Styles.header}>
            <nav>
                            
                <div className={Styles.logo}>
                    <img src="img/Logo.png" alt="" />
                </div>

                <ul className={Styles.navLinks}>
                    <li>Home</li>
                    <li>
                    <Link to={DOCTORS_URL} className={`${Styles.item}`}>
                        <span>Doctores</span>
                    </Link>

                    </li>
                    <li >
                    <Link to={LOGIN_URL} className={`${Styles.item}`}>
                        <span>Iniciar Sesión</span>
                    </Link>
                    </li>
                    <li>Registrarse</li>
                </ul>

            </nav>

        </header>
    </div>
  )
}

export default NavBar