import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CompRegDocPage_URL, HOME_URL, LOGIN_URL } from '../../constants/urls';
import { registerWithEmailAndPassword, signInWithGoogleDoctor } from '../../firebase/auth-service';
import './RegDocPage.css'

function RegDocPage() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: 0,
    universityName: '',
    career: '',
    License: '',
    specialty: '',
    specialtyUniversityName: '',
    specialtyLicense: '',
    laborExperience: 0, 
    rol:'doctor'
  });
  
  const handleOnChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    if(formData.name == ''){
      alert('El Nombre no puede estar vacio')
    }else if(formData.surname == ''){
      alert('El Apellido no puede estar vacio')      
    }else if(formData.phone == ''){
      alert('El numero no puede estar vacío')
    }else if(formData.email == ''){
      alert('El email no puede estar vacío')
    }else if(formData.password.length < 6){
      alert('Contraseña debe tener mínimo 6 caracteres')
    }else if(formData.password != formData.confirmPassword){
      alert('contraseñas no coinciden')
    }else if(formData.age < 18){
      alert('El mínimo de edad son 18 años')
    }else if(formData.universityName == ''){
      alert('Nombre de la universidad no puede estar vacío');
    }else if(formData.career == ''){
      alert('Carrera no puede estar vacía')
    }else if(formData.License == ''){
      alert('La Licencia no puede estar vacía')
    }else if(formData.laborExperience <= 0){
      alert('Experiencia laboral: valor inválido')
    }
    else{
      
      const {email, password, ...extraData} =formData;
      console.log(formData);
      const isFinished = await registerWithEmailAndPassword(formData.email, formData.password, extraData);
      
      if(isFinished){
        navigate(HOME_URL);
      }
    }


  };

  const handleSignWithGoogle = async () => {
    console.log('registro con google')   
    const isFinished = await signInWithGoogleDoctor();
    
    if(isFinished){
      navigate(HOME_URL); 
    }
    
  }


  return (
    <div className='Container'>
      
        <div className='bloque1'>
            <h1 className='titulo'>¡Bienvenidos a Psicopana!</h1>
            <img className="imagen" src="img/Logo.png" alt="" />
        </div>

        <div className='rectanguloD'></div>

        <h3 className='titulo2D'>Regístrate como Doctor.</h3>

        <div className='subtitulosD'>

          <h5 className='sub1D'>Nombres</h5>

          <h5 className='sub2D'>Apellidos</h5>

          <h5 className='sub3D'>Número de teléfono</h5>

          <h5 className='sub4D'>Correo electrónico</h5>

          <h5 className='sub5D'>Contraseña</h5>

          <h5 className='sub6D'>Confirmar contraseña</h5>

          <h5 className='sub7D'>Edad</h5>

          <h5 className='sub8D'>Universidad donde estudio</h5>

          <h5 className='sub9D'>Carrerra</h5>

          <h5 className='sub10D'>Licencia</h5>

          <h5 className='sub11D'>Universidad donde estudio</h5>

          <h5 className='sub12D'>Especialidad</h5>

          <h5 className='sub13D'>Licencia</h5>

          <h5 className='sub14D'>Agregar especialidad +</h5>

          <h5 className='sub15D'>Experiencia laboral</h5>


        </div>

        <form className='fieldD' onSubmit={onSubmit}>

          <input type="text" class="field1D" placeholder='Ej. Jose Antonio' name = 'name' onChange={handleOnChange}></input>

          <input type="text" class="field2D" placeholder='Ej. Almonte Hernández' name = 'surname' onChange={handleOnChange}></input>

          <input type="text" class="field3D" placeholder='Ej. 0424 162 22 23' name = 'phone' onChange={handleOnChange}></input>

          <input type="text" class="field4D" placeholder='Ej. PsicopanaCorporation@gmail.com' name = 'email' onChange={handleOnChange}></input>

          <input type="password" class="field5D" placeholder='Mínimo 6 caracteres' name = 'password' onChange={handleOnChange}></input>

          <input type="password" class="field6D" placeholder='Confirmar Contraseña' name = 'confirmPassword' onChange={handleOnChange}></input>

          <input type="text" class="field7D" placeholder='Tu edad' name = 'age' onChange={handleOnChange}></input>

          <input type="text" class="field8D" placeholder='Universidad donde estudió' name = 'universityName' onChange={handleOnChange}></input>

          <input type="text" class="field9D" placeholder='Nombre de su carrera' name = 'career' onChange={handleOnChange}></input>

          <input type="text" class="field10D" placeholder='Licencia de verificación de carrera' name = 'License' onChange={handleOnChange}></input>

          <input type="text" class="field11D" placeholder='Universidad donde la cursó (Opcional)' name = 'specialtyUniversityName' onChange={handleOnChange}></input>

          <input type="text" class="field12D" placeholder='Nombre de la especialidad (Opcional)' name = 'specialty' onChange={handleOnChange}></input>

          <input type="text" class="field13D" placeholder='Licencia (Opcional)' name = 'specialtyLicense' onChange={handleOnChange}></input>

          <input type="text" class="field14D" placeholder='Cantidad en número entero (en años)' name = 'laborExperience' onChange={handleOnChange}></input>



          <button type="button" class="button1D" id="searchButtom" onClick={onSubmit}>Crear cuenta</button>

        </form>


        <h3 className='OD'>O</h3>

        <div className='linea1D'></div>

        <div className='linea2D'></div>


        <button type="button" className="button2D" id="searchButtom" onClick={handleSignWithGoogle}>Continuar con Google</button>

        <img className="logoGoogleD" src="img/google.png" alt="" />

       

        <Link to={LOGIN_URL} className='titulo3D'>
            ¿Ya tienes cuenta?{" "}
            <span className="enlace">Inicia sesión aquí</span>
        </Link>

        <h5 className='titulo4D'>Todos los derechos reservados</h5>






    </div>

    
  )
}

export default RegDocPage;