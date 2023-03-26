import "./PerPacPage.css"
import { CHAT2_URL, HOME_URL, DOCTORS_URL } from "../../constants/urls";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { logout } from "../../firebase/auth-service";
import { useState } from "react";
import { db } from "../../firebase/config";
import { updateDoc, doc } from "@firebase/firestore";

function PerPacPage() {

  const { user } = useUser();


  console.log(user);

  const handleLogout = async() => {
      console.log('SALIENDO...');
      await logout();
  }

  const [formData, setFormData] = useState({
    name: user.name,
    surname: user.surname,
    phone: user.phone,
    email: user.email,
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
      document.getElementById('info4').disabled=false

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
    }else{
      const {name, surname, phone, email} = formData;
      const obj = {name, surname, phone, email}

      await updateDoc(doc(db, "users", user.uid), obj)

      document.getElementById('info').disabled=true
      document.getElementById('info2').disabled=true
      document.getElementById('info3').disabled=true
      document.getElementById('info4').disabled=true
      alert("datos guardados")
    }
  }

    return (
      <div className='Container'>
        
        <header className="header">
            <nav>
                
                <div className="logo">
                    <img src="img/Logo.png" alt="" />
                </div>
  
                <ul className="navLinks">
                  <Link to={HOME_URL}>
                      <li>Home</li>
                  </Link>
                  <Link to={DOCTORS_URL}>
                      <li>Doctores</li>
                  </Link>
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
  
        <div className='rectanguloPP'></div>
  
        <div className='opcionesP'>
  
          <h4 className='op1' onClick={enableEdit}>Editar datos</h4>
  
          <h4 className='op2'>Membresia</h4>
  
          <h4 className='op3'>Pago</h4>
  
          <h4 className='op4'>Chats archivados</h4>
  
        </div>

        <Link to={CHAT2_URL}>
          <button className='Bchat'>Comenzar chat</button>
        </Link>
  
        <div className='rectangulosP'>
  
          <div className='recP1'></div>
  
          <div className='recP3'></div>
  
          <div className='recP4'></div>
  
          <div className='recP5-S'></div>
  
  
        </div>
  
  
        <div className='subtitulos1P'>
  
          <h4 className='sub1-1p'>Nombres y apellidos</h4>
  
          <h4 className='sub1-3p'>Fecha de nacimiento</h4>
  
          <h4 className='sub1-4p'>Teléfono</h4>
  
          <h4 className='sub1-5p'>Correo electrónico</h4>
  
        </div>
  
        <div className='subtitulos2P'>

          <input type="text" className="sub2-1p" name="name" id="info" placeholder={user.name} disabled={true} onChange={handleOnChange}/>

          <input type="text" className="sub2-2p" name="surname" id="info2" placeholder={user.surname} disabled={true} onChange={handleOnChange}/>
  
          <h4 className='sub2-3p'>{user.age}</h4>
  
          <input type="text" className="sub2-4p" name="phone" id="info3" placeholder={user.phone} disabled={true} onChange={handleOnChange}/>
  
          <input type="text" className="sub2-5p" name="email" id="info4" placeholder={user.email} disabled={true} onChange={handleOnChange}s/>
  
  
        </div>
  
  
  
      </div>
  
      
    )
  }
  
  export default PerPacPage;