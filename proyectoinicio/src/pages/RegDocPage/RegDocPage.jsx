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
    const {email, password, ...extraData} =formData;
    console.log(formData);
    await registerWithEmailAndPassword(formData.email, formData.password, extraData);
    navigate(HOME_URL);
  };

  const handleSignWithGoogle = async () => {
    console.log('registro con google')   
    const isNewUser = await signInWithGoogleDoctor();
    
    if(isNewUser){
      
      navigate(CompRegDocPage_URL);

    }else{
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

        <form onSubmit={onSubmit}>

          <input type="text" class="field1D" placeholder='name' name = 'name' onChange={handleOnChange}></input>

          <input type="text" class="field2D" placeholder='surname' name = 'surname' onChange={handleOnChange}></input>

          <input type="text" class="field3D" placeholder='phone' name = 'phone' onChange={handleOnChange}></input>

          <input type="text" class="field4D" placeholder='email' name = 'email' onChange={handleOnChange}></input>

          <input type="text" class="field5D" placeholder='password' name = 'password' onChange={handleOnChange}></input>

          <input type="text" class="field6D" placeholder='confirmPassword' name = 'confirmPassword' onChange={handleOnChange}></input>

          <input type="text" class="field7D" placeholder='age' name = 'age' onChange={handleOnChange}></input>

          <input type="text" class="field8D" placeholder='universityName' name = 'universityName' onChange={handleOnChange}></input>

          <input type="text" class="field9D" placeholder='career' name = 'career' onChange={handleOnChange}></input>

          <input type="text" class="field10D" placeholder='License' name = 'License' onChange={handleOnChange}></input>

          <input type="text" class="field11D" placeholder='specialtyUniversityName' name = 'specialtyUniversityName' onChange={handleOnChange}></input>

          <input type="text" class="field12D" placeholder='specialty' name = 'specialty' onChange={handleOnChange}></input>

          <input type="text" class="field13D" placeholder='specialtyLicense' name = 'specialtyLicense' onChange={handleOnChange}></input>

          <input type="text" class="field14D" placeholder='laborExperience' name = 'laborExperience' onChange={handleOnChange}></input>



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