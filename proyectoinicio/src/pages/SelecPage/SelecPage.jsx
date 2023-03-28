import './SelecPage.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RegDoc_URL, RegPac_URL } from '../../constants/urls';

function SelecPage() {

  const [selectedOption, setSelectedOption] = useState({
    checked: null,
  })

  const handleChange = e => {
    setSelectedOption({
      checked: e.target.value
    })
  }



  return (
    <div className='ContainerS'>
      

        <div className='bloque1'>
            <h1 className='titulo'>¡Bienvenidos a Psicopana!</h1>
            <img class="imagen" src="img/Logo.png" alt="" />
        </div>

        <div className='rectanguloS'></div>

        <h3 className='titulo2S'>Regístrate como paciente.</h3>

        <div className='subtitulosS'>

          <h5 className='sub1S'>Nombres</h5>

          <h5 className='sub2S'>Apellidos</h5>

          <h5 className='sub3S'>Número de teléfono</h5>

          <h5 className='sub4S'>Correo electrónico</h5>

          <h5 className='sub5S'>Contraseña</h5>

          <h5 className='sub6S'>Confirmar contraseña</h5>

          <h5 className='sub7S'>Edad</h5>

          <h5 className='sub8S'>¿Primera vez que asiste a consulta psicológica?</h5>

          <h5 className='sub9S'>Sí.</h5>

          <h5 className='sub10S'>No.</h5>

          <h5 className='sub11S'>Prefiero no contestar.</h5>

        </div>


        <input type="text" class="field1S"></input>

        <input type="text" class="field2S"></input>

        <input type="text" class="field3S"></input>

        <input type="text" class="field4S"></input>

        <input type="text" class="field5S"></input>

        <input type="text" class="field6S"></input>

        <input type="text" class="field7S"></input>




        <button type="button" className="button1S" >Crear cuenta</button>


        <h3 className='OS'>O</h3>

        <div className='linea1S'></div>

        <div className='linea2S'></div>


        <button type="button" className="button2S" >Continuar con Google</button>

        <img class="logoGoogleS" src="img/google.png" alt="" />

        <h3 className='titulo3S'>¿Ya tienes cuenta? Inicia sesión aquí.</h3>

        <h5 className='titulo4S'>Todos los derechos reservados</h5>


        <div className='rectangulo2S'></div>

        <div className='titulosSelecS'>

          <h3 className='tituloSelecS'>¿Eres doctor o paciente?</h3>

          <h3 className='selec1S'>Doctor</h3>

          <h3 className='selec2S'>Paciente</h3>

        </div>

        <div className='radioButtonsS'>

          <label>
              <input className='b1S' type="radio" value="Si" name='option' />
            <span></span>
          </label>

          <label>
            <input className='b2S' type="radio" value="No" name='option' />
            <span></span>
          </label>

          <label>
            <input className='b3S' type="radio" value="Prefiero no contestar." name='option' />
            <span></span>
          </label>

          <label>
            <input 
            className='b4S' 
            type="radio" 
            value= {RegDoc_URL}
            name='selection'
            checked = {selectedOption.checked === RegDoc_URL} 
            onChange = {handleChange}
            />
            <span></span>
          </label>

          <label>
            <input 
            className='b5S' 
            type="radio" 
            value= {RegPac_URL}
            name='selection'
            checked ={selectedOption.checked === RegPac_URL }
            onChange = {handleChange}/>
            <span></span>
          </label>

        </div>

        <Link to={selectedOption.checked}>
          <button type="button" className="buttonSelecS">Siguiente</button>
        </Link>






    </div>

    
  )
}

export default SelecPage;

