// import { signInWithGoogle } from '../../firebase/auth-service';
import { registerWithEmailAndPassword, signInWithGoogle } from '../../firebase/auth-service';
import './RegPacPage.css'
import { useState } from 'react';

function RegPacPage() {
    
    const [formData, setFormData] = useState({
      name: '',
      surname: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      age: 0,
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
      await registerWithEmailAndPassword(formData.email, formData.password, extraData);
    };

    const handleSignWithGoogle = async () => {
      console.log('registro con google')   
      await signInWithGoogle();  
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

          <input type="text" className="field5P" placeholder='password' name = 'password' onChange={handleOnChange}></input>

          <input type="text" className="field6P" placeholder='confirmPassword' name = 'confirmPassword' onChange={handleOnChange}></input>

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

        <h3 className='titulo3P'>¿Ya tienes cuenta? Inicia sesión aquí.</h3>

        <h5 className='titulo4P'>Todos los derechos reservados</h5>






    </div>

    
  )
}

export default RegPacPage;