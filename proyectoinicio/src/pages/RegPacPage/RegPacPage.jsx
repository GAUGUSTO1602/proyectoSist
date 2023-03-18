// import { signInWithGoogle } from '../../firebase/auth-service';
import { registerWithEmailAndPassword, signInWithGooglePatient } from '../../firebase/auth-service';
import './RegPacPage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME_URL, LOGIN_URL } from '../../constants/urls';
import { Link } from 'react-router-dom';
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";

function RegPacPage() {
    
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState(new Date());


    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    

    const [formData, setFormData] = useState({
      name: '',
      surname: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      age: '',
      rol:'paciente'
    });
    
    const handleOnChange = (event) => {
      const {name, value} = event.target;
      setFormData({
        ...formData,
        [name]: value,
      })
      console.log(value)
    }

    const handleDate = (e) =>{
      
      setStartDate(e)

      console.log(e)

   }

    const onSubmit = async (event) => {
      event.preventDefault();
      const {email, password, ...extraData} =formData;
      await registerWithEmailAndPassword(formData.email, formData.password, extraData);
      navigate(HOME_URL);
    };

    const handleSignWithGoogle = async () => {
      console.log('registro con google')   
      await signInWithGooglePatient();  
      navigate(HOME_URL);
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

          <h5 className='sub7P'>Fecha de nacimiento(MM/DD/AAAA)</h5>

          <h5 className='sub8P'>¿Primera vez que asiste a consulta psicológica?</h5>

          <h5 className='sub9P'>Sí.</h5>

          <h5 className='sub10P'>No.</h5>

          <h5 className='sub11P'>Prefiero no contestar.</h5>

        </div>

        <form className='fieldP' onSubmit = {onSubmit}>

          <input type="text" className="field1P" placeholder='Ej: Antonio' name = 'name' onChange={handleOnChange}></input>

          <input type="text" className="field2P" placeholder='Ej: Herrera' name = 'surname' onChange={handleOnChange}></input>

          <input type="text" className="field3P" placeholder='Ej: 04242798715' name = 'phone' onChange={handleOnChange}></input>

          <input type="text" className="field4P" placeholder='ejemplo@gmail.com' name = 'email' onChange={handleOnChange}></input>

          <input type="text" className="field5P" placeholder='*********' name = 'password' onChange={handleOnChange}></input>

          <input type="text" className="field6P" placeholder='*********' name = 'confirmPassword' onChange={handleOnChange}></input>

          {/* <input type="text" className="field7P" placeholder='age' name = 'age' onChange={handleOnChange}></input> */}

          <div className="field7P">
              <ReactDatePicker
            renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
            }) => (
                <div
                >
                <select
                    value={getYear(date)}
                    onChange={({ target: { value } }) => changeYear(value)}
                >
                    {years.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                    ))}
                </select>

                <select
                    value={months[getMonth(date)]}
                    onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                    }
                >
                    {months.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                    ))}
                </select>

                </div>
            )}
            selected={startDate}
            onChange={handleDate}
            />
          </div>

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