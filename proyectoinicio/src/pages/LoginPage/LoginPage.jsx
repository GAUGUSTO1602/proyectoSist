import "./LoginPage.css";

function LoginPage() {

    return (
      <div className='Container'>
        
  
          <div className='bloque1'>
              <h1 className='titulo'>¡Bienvenidos a Psicopana!</h1>
              <img class="imagen" src="img/Logo.png" alt="" />
          </div>
  
          <img class="imagen2" src="img/img2.png" alt="" />
  
          <h3 className='titulo2'>Iniciar sesión</h3>
  
          <div className='rectangulo'></div>
  
          <h5 className='subtitulo1' id='sub1'>Usuario</h5>
  
          <input type="text" class="search-field1"></input>
  
          <h5 className='subtitulo2'>Contraseña</h5>
  
          <input type="text" class="search-field2"></input>
  
          <button type="button" class="button1" id="searchButtom">Iniciar sesión</button>
  
          <button type="button" class="button2" id="searchButtom">Continuar con Google</button>
  
          <img class="logoGoogle" src="img/google.png" alt="" />
  
          <h3 className='titulo3'>¿No tienes cuenta? Regístrate aquí.</h3>
  
          <h5 className='titulo4'>Todos los derechos reservados</h5>
  
  
  
  
  
  
      </div>
  
      
    )
  }
  
  export default LoginPage;