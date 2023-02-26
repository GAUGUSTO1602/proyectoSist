import Styles from "./HomePage.module.css"
import { Link } from 'react-router-dom';
import { LOGIN_URL } from '../../constants/urls';

function HomePage() {

  return (
    <div className={Styles.Container}>
      
      <header className={Styles.header}>
          <nav>
              
              <div className={Styles.logo}>
                  <img src="img/Logo.png" alt="" />
              </div>

              <ul className={Styles.navLinks}>
                    <li>Home</li>
                    <li>Sobre nosotros</li>
                    <li>Doctores</li>
                    <li >
                        <Link to={LOGIN_URL} className={`${Styles.item}`}>
                            <span>Iniciar Sesión</span>
                        </Link>
                    </li>
                    <li>Registrarse</li>
              </ul>

          </nav>

      </header>

      <section className={Styles.block1}>

        <div className={Styles.imageBlock1}>
            <img src="img/Foto inicio.png" alt=""/>
        </div>

        <div className={Styles.textBlock1}>
            
            <div className={Styles.titleBlock1}>
                <h1>
                    Psicopana
                </h1>
            </div>

            <div className={Styles.parragraphBlock1}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spublishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

        </div>
    </section>
    
    <section>
        <div className={Styles.rectangulo}>
            
        </div>

        <div className={Styles.vector}> 
            <img src='img/vector.jpg' alt=""/>              
        </div>
    </section>

    </div>
 
  )
}

export default HomePage;