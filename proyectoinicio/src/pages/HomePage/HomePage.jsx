import Styles from "./HomePage.module.css"
import { Link } from 'react-router-dom';
import { LOGIN_URL, PerDoc_URL } from '../../constants/urls';
import { SelReg_URL } from "../../constants/urls";
import { useUser } from "../../context/UserContext";
import { PerPac_URL } from "../../constants/urls";
import { logout } from "../../firebase/auth-service";
import { DOCTORS_URL } from "../../constants/urls";
import { HOME_URL } from "../../constants/urls";

function HomePage() {
    const { user } = useUser();

    console.log(user);

    const handleLogout = async() => {
        console.log('SALIENDO...');
        await logout();
    }

  return (
    <div className={Styles.Container}>
      
      <section className={Styles.block1}>

        <div className={Styles.imageBlock1}>
            <img src="Img\Foto inicio.png" alt=""/>
        </div>

        <div className={Styles.textBlock1}>
            
            <div className={Styles.titleBlock1}>
                <h1>
                    Psicopana
                </h1>
            </div>
            
           <div className={Styles.parragraphBlock1}>
                <p>Uno puede elegir por ir hacia la seguridad o por avanzar hacia el crecimiento. El crecimiento debe ser elegido una y otra vez; el miedo debe superarse una y otra vez.</p>
                <br />
                <p>Abraham Maslow</p>
            </div>

            <h2 className={Styles.subtituloH}>¿Cómo funcionan nuestros servicios?</h2>


            <div className={Styles.pasos}>

                <h2>Paso 1: Registarse o iniciar sesión</h2>
                <br />
                <h2>Paso 2: Escoger un doctor</h2>
                <br />
                <h2>Paso 3: Agendar una cita con el doctor seleccionado</h2>
                <br />
                <h2>Paso 4: Acceder al chat el día agendado</h2>

            </div>

        </div>
        </section>

        <section>
            <div className={Styles.rectanguloH}>

            </div>

            <div className={Styles.vector}> 
                <img src='img/vector.png' alt=""/>              
            </div>
        </section>


    </div>

    
  )
}

export default HomePage;
