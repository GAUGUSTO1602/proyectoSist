import "./PerDocPage.css"
import { Link } from "react-router-dom";
import { CHAT2_URL, HOME_URL } from "../../constants/urls";
import { ModalAva } from "../../components/modals/ModalAva";
import { useUser } from "../../context/UserContext";
import { logout } from "../../firebase/auth-service";
import { useState } from "react";
import { db } from "../../firebase/config";
import { updateDoc, doc } from "@firebase/firestore";

function PerDocPage() {

    const { user } = useUser();

    const [openModal, setOpenModal] = useState(false)


    const handleLogout = async() => {
        console.log('SALIENDO...');
        await logout();
    }

    const [formData, setFormData] = useState({
      name: user.name,
      surname: user.surname,
      phone: user.phone,
      email: user.email,
      universityName: user.universityName,
      career: user.career,
      License: user.License,
      specialty: user.specialty,
      specialtyUniversityName: user.specialtyUniversityName,
      specialtyLicense: user.specialtyLicense,
      laborExperience: user.laborExperience, 
    });
    
    const handleOnChange = (event) => {
      const {name, value} = event.target;
      setFormData({
        ...formData,
        [name]: value,
      })
      console.log(value)
    }
  
    const enableEdit = async () => {
      if(document.getElementById('info').disabled === true){
        document.getElementById('info').disabled=false
        document.getElementById('info2').disabled=false
        document.getElementById('info3').disabled=false
        document.getElementById('info5').disabled=false
        document.getElementById('info6').disabled=false
        document.getElementById('info7').disabled=false
        document.getElementById('info8').disabled=false
        document.getElementById('info9').disabled=false
        document.getElementById('info10').disabled=false
        document.getElementById('info11').disabled=false
  
        alert("Edicion habilitada")
        alert("Haga click nuevamente para guardar los cambios")
  
      }else if(formData.name == ''){
        alert('El Nombre no puede estar vacio')
      }else if(formData.surname == ''){
        alert('Apellido no puede ser vacío')
      }else if(formData.phone == ''){
        alert('Telefono no puede ser vacío')
      }else if(formData.email == ''){
        alert('El email no puede estar vacío')
      }else if(formData.universityName == ''){
        alert('Nombre de la universidad no puede estar vacío');
      }else if(formData.career == ''){
        alert('Carrera no puede estar vacía')
      }else if(formData.License == ''){
        alert('La Licencia no puede estar vacía')
      }else if(formData.laborExperience <= 0){
        alert('Experiencia laboral: valor inválido')
      }else{
        const {name, surname, ...extraData} = formData;
        const obj = {name, surname, ...extraData}
  
        await updateDoc(doc(db, "users", user.uid), obj)
  
        document.getElementById('info').disabled=true
        document.getElementById('info2').disabled=true
        document.getElementById('info3').disabled=true
        document.getElementById('info5').disabled=true
        document.getElementById('info6').disabled=true
        document.getElementById('info7').disabled=true
        document.getElementById('info8').disabled=true
        document.getElementById('info9').disabled=true
        document.getElementById('info10').disabled=true
        document.getElementById('info11').disabled=true

        alert("datos guardados")
      }
    }
  

  return (
    <div className='Container'>

      {openModal && <ModalAva openModal={openModal} setOpenModal={setOpenModal}/>}
      
      <header className="header">
          <nav>
              
              <div className="logo">
                  <img src="img/Logo.png" alt="" />
              </div>

              <ul className="navLinks">
                  <Link to={HOME_URL}>
                      <li>Home</li>
                  </Link>
                      <li>Pacientes</li>
              </ul>

              <div className="foto">
                  <img src="img/fotoPerfil.png" alt="" />
              </div>

              <div className="flecha">
                    <img src="img/flecha.png" alt="" />
                    <div className="cuadrado"></div>
                    <li className="logOut">
                      <button type = 'button' onClick={handleLogout}>
                        Salir
                      </button>
                    </li>
                    
              </div>

          </nav>

      </header>

      <div className='rectanguloPD'></div>

      <div className='opcionesD'>

        <h4 className='od1' onClick={enableEdit}>Editar datos</h4>

        <h4 className='od2'>Citas programadas</h4>

        <h4 className='od3' onClick={() => {setOpenModal(true)}}>Editar horarios</h4>

      </div>

      <Link to={CHAT2_URL}>
        <button className='Bchat'>Comenzar chat</button>
      </Link>

      

      <div className='rectangulosD'>

        <div className='recD1'></div>

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

        <h4 className='sub1-1d'>Nombres y apellidos</h4>

        <h4 className='sub1-3d'>Fecha de nacimiento</h4>

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

        <input type="text" className="sub2-1d" name="name" id="info" placeholder={user.name} disabled={true} onChange={handleOnChange}/>

        <input type="text" className="sub2-2d" name="surname" id="info2" placeholder={user.surname} disabled={true} onChange={handleOnChange}/>

        <h4 className='sub2-3d'>{user.age}</h4>

        <input type="text" className="sub2-4d" name="phone" id="info3" placeholder={user.phone} disabled={true} onChange={handleOnChange}/>

        <h4 className='sub2-5d'>{user.email}</h4>

        <input type="text" className="sub2-6d" name="universityName" id="info5" placeholder={user.universityName} disabled={true} onChange={handleOnChange}/>

        <input type="text" className="sub2-7d" name="specialtyUniversityName" id="info6" placeholder={user.specialtyUniversityName} disabled={true} onChange={handleOnChange}/>

        <input type="text" className="sub2-8d" name="career" id="info7" placeholder={user.career} disabled={true} onChange={handleOnChange}/>

        <input type="text" className="sub2-9d" name="specialty" id="info8" placeholder={user.specialty} disabled={true} onChange={handleOnChange}/>

        <input type="text" className="sub2-10d" name="License" id="info9" placeholder={user.License} disabled={true} onChange={handleOnChange}/>

        <input type="text" className="sub2-11d" name="specialtyLicense" id="info10" placeholder={user.specialtyLicense} disabled={true} onChange={handleOnChange}/>

        <input type="text" className="sub2-12d" name="laborExperience" id="info11" placeholder={user.laborExperience} disabled={true} onChange={handleOnChange}/>

      </div>



      




    </div>

    
  )
}

export default PerDocPage;