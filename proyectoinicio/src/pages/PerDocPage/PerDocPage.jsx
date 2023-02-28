import "./PerDocPage.css"
import { Link } from "react-router-dom";
import { CHAT_URL } from "../../constants/urls";

function PerDocPage() {

  return (
    <div className='Container'>
      
      <header className="header">
          <nav>
              
              <div className="logo">
                  <img src="img/Logo.png" alt="" />
              </div>

              <ul className="navLinks">
                    <li>Home</li>
                    <li>Pacientes</li>
                    <li>Mi perfil</li>
              </ul>

              <div className="foto">
                  <img src="img/fotoPerfil.png" alt="" />
              </div>

              <div className="flecha">
                    <img src="img/flecha.png" alt="" />
                    <div className="cuadrado"></div>
                    <li className="logOut">Cerrar sesion</li>
              </div>

          </nav>

      </header>

      <div className='rectanguloPD'></div>

      <div className='opcionesD'>

        <h4 className='od1'>Datos personales</h4>

        <h4 className='od2'>Citas programadas</h4>

        <h4 className='od3'>Chats archivados</h4>

      </div>

      <Link to={CHAT_URL}>
        <button className='Bchat'>Comenzar chat</button>
      </Link>

      

      <div className='rectangulosD'>

        <div className='recD1'></div>

        <div className='recD2'></div>

        <div className='recD3'></div>

        <div className='recD4'></div>

        <div className='recD5-S'></div>

        <div className='recD6'></div>

        <div className='recD7'></div>

        <div className='recD8'></div>

        <div className='recD9'></div>

        <div className='recD10'></div>

        <div className='recD11'></div>

        <div className='recD12'></div>

      </div>


      <div className='subtitulos1D'>

        <h4 className='sub1-1d'>Nombres</h4>

        <h4 className='sub1-2d'>Apellidos</h4>

        <h4 className='sub1-3d'>Edad</h4>

        <h4 className='sub1-4d'>Teléfono</h4>

        <h4 className='sub1-5d'>Correo electrónico</h4>

        <h4 className='sub1-6d'>Universidad de estudio</h4>

        <h4 className='sub1-7d'>Universidad de estudio</h4>

        <h4 className='sub1-8d'>Carrera</h4>

        <h4 className='sub1-9d'>Especialidad</h4>

        <h4 className='sub1-10d'>Licencia</h4>

        <h4 className='sub1-11d'>Licencia</h4>

        <h4 className='sub1-12d'>Experiencia laboral</h4>

      </div>

      <div className='subtitulos2D'>

        <h4 className='sub2-1d'>xxxxxxxxxxx</h4>

        <h4 className='sub2-2d'>xxxxxxxxxxx</h4>

        <h4 className='sub2-3d'>xxxxxxxxxxx</h4>

        <h4 className='sub2-4d'>xxxxxxxxxxx</h4>

        <h4 className='sub2-5d'>xxxxxxxxxxx</h4>

        <h4 className='sub2-6d'>xxxxxxxxxxx</h4>

        <h4 className='sub2-7d'>xxxxxxxxxxx</h4>

        <h4 className='sub2-8d'>xxxxxxxxxxx</h4>

        <h4 className='sub2-9d'>xxxxxxxxxxx</h4>

        <h4 className='sub2-10d'>xxxxxxxxxxx</h4>

        <h4 className='sub2-11d'>xxxxxxxxxxx</h4>

        <h4 className='sub2-12d'>xxxxxxxxxxx</h4>

      </div>



      




    </div>

    
  )
}

export default PerDocPage;