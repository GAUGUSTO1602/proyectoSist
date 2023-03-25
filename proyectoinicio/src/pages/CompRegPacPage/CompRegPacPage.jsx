import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { HOME_URL } from '../../constants/urls';
import { useUser } from '../../context/UserContext'
import { completeValuesUser } from '../../firebase/auth-service';
import Styles from './CompRegPacPage.module.css'
import ReactDatePicker, {registerLocale} from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";


export function CompRegPacPage() {

  const navigate = useNavigate();

  const {user} = useUser();
  
  // alert(user.rol)

  const [formData, setFormData] = useState({
    name: user.name,
    surname: '',
    phone: '',
    email: user.email,
    password: '',
    confirmPassword: '',
    age: '',
    rol: user.rol
  });

  const handleOnChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value,
    })
    // console.log(value)
  }

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

    

    const handleDate = (e) =>{

        const name = "age";
        const options = {month: "numeric", day: "numeric", year: "numeric" }
        const value = e.toLocaleDateString("es-ES", options)
        setStartDate(e)
        

        setFormData({
        ...formData,
        [name]: value,
        })


    }

  const onSubmit = async (event) => {
    event.preventDefault();
    const{email,password, ...extraData} = formData;

    
    if(formData.password == ""){
      alert('El campo no puede ser vacío')
    }else if(formData.password.length < 6){
      alert('Contraseña tiene que tener mas de 6 caracteres')
    }else if(formData.password != formData.confirmPassword){
      alert('Contraseñas distintas')
    }else if(formData.age == ''){
      alert('campo edad vacío')
    }else if(formData.age < 18){
      alert('menor a 18 años')
    }else{     
      const isFinished = await completeValuesUser(user.id, formData.email, formData.password, extraData);

      if (isFinished){
        user.password = formData.password;
        alert(user.password);
        navigate(HOME_URL);
      }
      
    }

  }

  return (
    <div className={Styles.bigBox}>

    
      <div className={Styles.titleBox}>
        <h1>¡Completa los datos para continuar!</h1>
      </div>

      <div className={Styles.contentBox}>

        <form onSubmit={onSubmit}>

          <div className={Styles.inputsBoxTop}>
            
          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Contraseña</h1>
            <input type="password" className={Styles.textField} placeholder='password' name = 'password' onChange = {handleOnChange} />
          </div>

          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Confirmar Contraseña</h1>
            <input type="password" className={Styles.textField} placeholder='confirmPassword' name = 'confirmPassword' onChange = {handleOnChange} />
          </div> 

          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Edad</h1>
            <ReactDatePicker className={Styles.textField}
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
            
        </div>

        <div className={Styles.contentBoxBottomPart}>

          <div className={Styles.imageBox}>
            <img src="img\psychologicalConsultation.png" alt="" />
          </div>

          <div className={Styles.rightBox}>

            <div className={Styles.inputBoxBottom}>
              
              <div className="">
                <h1 className={Styles.text}>Teléfono (Opcional)</h1>
                <input type="text" className={Styles.textField} placeholder='phone' name = 'phone' onChange = {handleOnChange}/>
              </div>

            </div>
            
            <div className = {Styles.createAccountButton}>
              <button onClick={onSubmit}><h1>Crear Cuenta</h1></button>
            </div>

          </div>


        </div>

        </form>

      </div>





    </div>

  )
}
