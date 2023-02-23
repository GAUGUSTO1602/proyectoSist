

import './App.css'

function App() {

  return (
    <div className='Container'>
      

        <div className='bloque1'>
            <h1 className='titulo'>¡Bienvenidos a Psicopana!</h1>
            <img class="imagen" src="img/Logo.png" alt="" />
        </div>

        <div className='rectangulo'></div>

        <h3 className='titulo2'>Regístrate como paciente.</h3>

        <div className='subtitulos'>

          <h5 className='sub1'>Nombres</h5>

          <h5 className='sub2'>Apellidos</h5>

          <h5 className='sub3'>Número de teléfono</h5>

          <h5 className='sub4'>Correo electrónico</h5>

          <h5 className='sub5'>Contraseña</h5>

          <h5 className='sub6'>Confirmar contraseña</h5>

          <h5 className='sub7'>Edad</h5>

          <h5 className='sub8'>¿Primera vez que asiste a consulta psicológica?</h5>

          <h5 className='sub9'>Sí.</h5>

          <h5 className='sub10'>No.</h5>

          <h5 className='sub11'>Prefiero no contestar.</h5>

        </div>


        <input type="text" class="field1"></input>

        <input type="text" class="field2"></input>

        <input type="text" class="field3"></input>

        <input type="text" class="field4"></input>

        <input type="text" class="field5"></input>

        <input type="text" class="field6"></input>

        <input type="text" class="field7"></input>




        <button type="button" class="button1" >Crear cuenta</button>


        <h3 className='O'>O</h3>

        <div className='linea1'></div>

        <div className='linea2'></div>


        <button type="button" class="button2" >Continuar con Google</button>

        <img class="logoGoogle" src="img/google.png" alt="" />

        <h3 className='titulo3'>¿Ya tienes cuenta? Inicia sesión aquí.</h3>

        <h5 className='titulo4'>Todos los derechos reservados</h5>


        <div className='rectangulo2'></div>

        <div className='titulosSelec'>

          <h3 className='tituloSelec'>¿Eres doctor o paciente?</h3>

          <h3 className='selec1'>Doctor</h3>

          <h3 className='selec2'>Paciente</h3>

        </div>

        <div className='radioButtons'>

          <label>
              <input className='b1' type="radio" value="Si" name='option' />
            <span></span>
          </label>

          <label>
            <input className='b2' type="radio" value="No" name='option' />
            <span></span>
          </label>

          <label>
            <input className='b3' type="radio" value="Prefiero no contestar." name='option' />
            <span></span>
          </label>

          <label>
            <input className='b4' type="radio" value="Doctor" name='selection' />
            <span></span>
          </label>

          <label>
            <input className='b5' type="radio" value="Paciente" name='selection' />
            <span></span>
          </label>

        </div>

        <button type="button" class="buttonSelec" >Siguiente</button>






    </div>

    
  )
}

export default App