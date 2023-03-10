// import { signInWithGoogle } from '../../firebase/auth-service';
import { registerWithEmailAndPassword, signInWithGooglePatient } from '../../firebase/auth-service';
import './RegPacPage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CompRegPacPage_URL, HOME_URL, LOGIN_URL } from '../../constants/urls';
import { Link } from 'react-router-dom';

function RegPacPage() {
    
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
      name: '',
      surname: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      age: 0,
      rol:'paciente'
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
      const {email, password, ...extraData} = formData;

      if(formData.name == ''){
        alert('Nombre no puede ser vacío');
      }else if(formData.surname == ''){
        alert('Apellido no puede ser vacío')
      }else if(formData.phone == ''){
        alert('Telefono no puede ser vacío')
      }else if(formData.email == ''){
        alert('Email no puede ser vacío')
      }else if(password == ''){
        alert('La contraseña no puede estar vacía')
      }else if(formData.password != formData.confirmPassword){
        alert('Contraseñas distintas')
      }else if(formData.password.length < 6){
        alert('Contraseña debe ser al menos 6 caracteres')
      }else if(formData.age < 18){
        alert('Debe tener mínimo 18 años')
      }else{
        
        const isFinished = await registerWithEmailAndPassword(formData.email, formData.password, extraData);
  
        if(isFinished){
          navigate(HOME_URL);        
        }
      }


    };

    const handleSignWithGoogle = async () => {
      console.log('registro con google')   
      const isFinished = await signInWithGooglePatient();
      
      if(isFinished){
        // IF THE USER IS NEW, WE SHOULD NAVIGATE HIM TO COMPLETE THE FORM
        navigate(HOME_URL);
      }
      
    };
    
  return (
    <div className='ContainerP'>
      

        <div className='bloque1'>
            <h1 className='titulo'>¡Bienvenidos a Psicopana!</h1>
            <img className="imagen" src="img/Logo.png" alt="" />
        </div>

        <div className='rectanguloP'></div>

        <h3 className='titulo2P'>Regístrate como paciente.</h3>

        <div className='subtitulosP'>

          <h5 className='sub1P'>Nombres</h5>

          <h5 className='sub2P'>Apellidos</h5>

          <h5 className='sub3P'>Número de teléfono</h5>

          <h5 className='sub4P'>Correo electrónico</h5>

          <h5 className='sub5P'>Contraseña</h5>

          <h5 className='sub6P'>Confirmar contraseña</h5>

          <h5 className='sub7P'>Edad</h5>

          <h5 className='sub8P'>¿Primera vez que asiste a consulta psicológica?</h5>

          <h5 className='sub9P'>Sí.</h5>

          <h5 className='sub10P'>No.</h5>

          <h5 className='sub11P'>Prefiero no contestar.</h5>

        </div>

        <form onSubmit = {onSubmit}>

          <input type="text" className="field1P" placeholder='name' name = 'name' onChange={handleOnChange}></input>

          <input type="text" className="field2P" placeholder='surname' name = 'surname' onChange={handleOnChange}></input>

          <input type="text" className="field3P" placeholder='phone' name = 'phone' onChange={handleOnChange}></input>

          <input type="text" className="field4P" placeholder='email' name = 'email' onChange={handleOnChange}></input>

          <input type="password" className="field5P" placeholder='password' name = 'password' onChange={handleOnChange}></input>

          <input type="password" className="field6P" placeholder='confirmPassword' name = 'confirmPassword' onChange={handleOnChange}></input>

          <input type="text" className="field7P" placeholder='age' name = 'age' onChange={handleOnChange}></input>


          <div className='radioButtonsP'>

            <label>
                <input className='b1P' type="radio" value="Si" name='option' />
              <span></span>
            </label>

            <label>
              <input className='b2P' type="radio" value="No" name='option' />
              <span></span>
            </label>

            <label>
              <input className='b3P' type="radio" value="Prefiero no contestar." name='option' />
              <span></span>
            </label>

          </div>


          <button type="button" className="button1P" id="searchButtom" onClick={onSubmit}>Crear cuenta</button>
        </form>



        <h3 className='OP'>O</h3>

        <div className='linea1P'></div>

        <div className='linea2P'></div>


        <button type="button" className="button2P" id="searchButtom" onClick={handleSignWithGoogle}>Continuar con Google</button>

        <img className="logoGoogleP" src="img/google.png" alt="" />


        <Link to={LOGIN_URL} className='titulo3P'>
            ¿Ya tienes cuenta?{" "}
            <span className="enlace">Inicia sesión aquí</span>
        </Link>

        <h5 className='titulo4P'>Todos los derechos reservados</h5>






    </div>

    
  )
}

export default RegPacPage;