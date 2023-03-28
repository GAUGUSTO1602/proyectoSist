import Styles from "./HomePage.module.css"
import { Link } from 'react-router-dom';
import { LOGIN_URL, PerDoc_URL } from '../../constants/urls';
import { SelReg_URL } from "../../constants/urls";
import { useUser } from "../../context/UserContext";
import { PerPac_URL } from "../../constants/urls";
import { logout } from "../../firebase/auth-service";
import { DOCTORS_URL } from "../../constants/urls";
import { HOME_URL } from "../../constants/urls";
import PlanesCard from '../../components/Cards/PlanesCard';
import FeedbackCard from "../../components/Cards/FeedbackCard";



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

        <section>
                <h2 className={Styles.subtituloH2}>Planes de consulta</h2>
                <div className="">
                    <PlanesCard
                        imagen="img/bici.png"
                        alt="Descripción de la imagen"
                        titulo="Básico"
                        descripcion="Consulta online por 60min vía chat dentro de la plataforma."
                        precio = "$49.99"
                    />
                    <PlanesCard
                        imagen="img/carro.png"
                        alt="Descripción de la imagen"
                        titulo="Medio"
                        descripcion="Consulta online por 2 días, 60min un día vía chat dentro de la plataforma y el 2do día por videollamada durante 60 min."
                        precio = "$79.99"
                    />
                    <PlanesCard
                        imagen="img/avion.png"
                        alt="Descripción de la imagen"
                        titulo="Plus"
                        descripcion="Consulta online por 60min 1 día vía chat dentro de la plataforma y acceso desbloqueado al chat las 24 horas en caso de emergencia por 15 días"
                        precio = "$99.99"
                    />
                </div>
            </section>

            <section>
                <div className={Styles.rectanguloH2}>
                <h2 className={Styles.subtituloH3}>Feedback</h2>
                </div>

            </section>

            <section>
                    <div className={Styles.rectanguloH2}>
                    <h2 className={Styles.subtituloH3}>Feedback</h2>
                        <FeedbackCard
                            imagen="img/fotoPerfil2.png"
                            titulo="Maria C. Machado"
                            descripcion="Me parció muy amable y me ayudó con todos mis 
                            problemas existenciales"
                            mas_info="Más información"
                        />
                        <FeedbackCard
                            imagen="img/fotoPerfil2.png"
                            titulo="Lila Morillo"
                            descripcion="Me parció muy amable y me ayudó con todos mis 
                            problemas existenciales"
                            mas_info="Más información"
                        />
                        <FeedbackCard
                            imagen="img/fotoPerfil2.png"
                            titulo="Olga Tañón"
                            descripcion="Me parció muy amable y me ayudó con todos mis 
                            problemas existenciales"
                            mas_info="Más información"
                        />
                    </div>

            </section>
            <br />
            <br />
            <br />
            <br />


    </div>

    
  )
}

export default HomePage;
