import "./LoginPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SelReg_URL } from "../../constants/urls";

function LoginPage() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onSuccess = () => {
    navigate(HOME_URL);
  };

  const onFail = (_error) => {
    console.log("FALLO AL INICIAR SESION, Intenbte de nuevo");
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    await loginWithEmailAndPassword({ userData: formData, onSuccess, onFail });
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    setFormData((oldData) => ({ ...oldData, [name]: value }));
  };

  const handleGoogleClick = async () => {
    await signInWithGoogle({
      onSuccess: () => navigate(HOME_URL),
    });
  };

    return (
      <div className='Container'>
        <form onSubmit={onSubmit}>
  
          <div className='bloque1'>
              <h1 className='titulo'>¡Bienvenidos a Psicopana!</h1>
          </div>

          <img class="imagen" src="img/Logo.png" alt="" />
  
          <img class="imagen2" src="img/img2.png" alt="" />
  
          <h3 className='titulo2'>Iniciar sesión</h3>
  
          <div className='rectangulol'></div>
  
          <h5 className='subtitulo1' id='sub1'>Email</h5>
  
          <input type="email" name="email" id="email" className="search-field1" onChange={onChange}></input>
  
          <h5 className='subtitulo2'>Contraseña</h5>
  
          <input type="password" name="password" id="password" placeholder="*******" className="search-field2" onChange={onChange}></input>
  
          <button type="submit" className="button1L" >Iniciar sesión</button>
  
          <button type="button" className="button2L" onClick={handleGoogleClick}>Continuar con Google</button>
  
          <img class="logoGoogleL" src="img/google.png" alt="" />
  
          <Link to={SelReg_URL} className='titulo3'>
            ¿No tienes cuenta?{" "}
            <span className="enlace">Regístrate aquí</span>
          </Link>
  
          <h5 className='titulo4'>Todos los derechos reservados</h5>
  
        </form>
      </div>
  
      
    )
  }
  
  export default LoginPage;