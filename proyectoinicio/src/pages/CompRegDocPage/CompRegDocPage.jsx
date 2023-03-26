import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import Styles from './CompRegDocPage.module.css'
import ReactDatePicker, {registerLocale} from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import { UserContext, useUser } from '../../context/UserContext';
import { completeValuesUser } from '../../firebase/auth-service';
import { HOME_URL } from '../../constants/urls';


export function CompRegDocPage() {
  
  const {user} = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user.name,
    surname: '',
    phone: '',
    email: user.email,
    password: '',
    confirmPassword: '',
    age: '',
    universityName: '',
    career: '',
    License: '',
    specialty: '',
    specialtyUniversityName: '',
    specialtyLicense: '',
    laborExperience: 0, 
    rol: user.rol
  })

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
    const {email, password, ...extraData} = formData;

    if(formData.password == ''){
      alert('Revise el campo contraseña')
    }else if(formData.password.length < 6){
      alert('número de caracteres de la contraseña debe ser mayor o igual a 6')
    }else if(formData.confirmPassword != password){
      alert('Las contraseñas no coinciden');
    }else if(formData.universityName == ''){
      alert('El campo del nombre de la universidad que estudió no puede estar vacío')
    }else if(formData.career == ''){
      alert('Nombre de la carrera que estudió no puede estar vacío');
    }else if(formData.License == ''){
      alert('La licencia no puede estar vacía');
    }else if((formData.specialty != '' || formData.specialtyUniversityName != '' || formData.specialtyLicense != '') && (formData.specialty == '' || formData.specialtyUniversityName == '' || formData.specialtyLicense == '')){
      alert('Rellene o vacíe los datos de especialidad opcional para continuar');
    }else if(formData.laborExperience == ''){
      alert('Años de experiencia no pueden estar vacío')
    }else if(formData.laborExperience < 0){
      alert('Dato inválido')
    }else{
      
      const isFinished = await completeValuesUser(user.id, formData.email, formData.password, extraData);
      if(isFinished){
        
        console.log(formData);
        navigate(HOME_URL);

      }
    }

    

  }

  return (
    <>    
      <div className={Styles.titleBox}>
        <h1>¡Completa los datos para continuar!</h1>
      </div>

      <div className={Styles.contentBox}>
        
        <form onSubmit={onSubmit}>


          <div className={Styles.inputsBoxTop}>
              
            <div className={Styles.individualInputBox}>
              <h1 className={Styles.text}>Contraseña</h1>
              <input type="password" className={Styles.textField} placeholder='Mínimo 6 caracteres' name = 'password' onChange = {handleOnChange} />
            </div>

            <div className={Styles.individualInputBox}>
              <h1 className={Styles.text}>Confirmar Contraseña</h1>
              <input type="password" className={Styles.textField} placeholder='Confirmar Contraseña' name = 'confirmPassword' onChange = {handleOnChange} />
            </div> 

            <div className={Styles.individualInputBox}>
              <h1 className={Styles.text}>Fecha de nacimiento(MM/DD/AAAA)</h1>
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


        <div className={Styles.inputsBoxTop}>
            
          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Universidad donde estudio</h1>
            <input type="text" className={Styles.textField} placeholder='Universidad donde estudió' name = 'universityName' onChange = {handleOnChange} />
          </div>

          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Licencia</h1>
            <input type="text" className={Styles.textField} placeholder='Licencia de verificación de carrera' name = 'License' onChange = {handleOnChange} />
          </div>

          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Carrera</h1>
            <input type="text" className={Styles.textField} placeholder='Nombre de su carrera' name = 'career' onChange = {handleOnChange} />
          </div>

          
            
        </div>

        <div className={Styles.inputsBoxTop}>
            
          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Universidad donde estudio (opcional)</h1>
            <input type="text" className={Styles.textField} placeholder='Universidad donde la cursó (Opcional)' name = 'specialtyUniversityName' onChange = {handleOnChange} />
          </div> 

          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Licencia (opcional)</h1>
            <input type="text" className={Styles.textField} placeholder='Licencia (Opcional)' name = 'specialtyLicense' onChange = {handleOnChange} />
          </div>

          <div className={Styles.individualInputBox}>
              <h1 className={Styles.text}>Especialidad (opcional)</h1>
              <input type="text" className={Styles.textField} placeholder='Nombre de la especialidad (Opcional)' name = 'specialty' onChange = {handleOnChange}/>
          </div>
          
            
        </div>

        

        <div className={Styles.contentBoxBottomPart}>

            <div className={Styles.rightBox}>

                <div className={Styles.inputBoxBottom}>

                    <div className={Styles.individualInputBox}>
                      <h1 className={Styles.text}>Experiencia laboral</h1>
                      <input type="text" className={Styles.textField} placeholder='Cantidad en número entero (en años)' name = 'laborExperience' onChange = {handleOnChange} />
                    </div>
                
                    <div className={Styles.individualInputBox}>
                        <h1 className={Styles.text}>Teléfono (Opcional)</h1>
                        <input type="text" className={Styles.textField} placeholder='Ej. 0424 162 22 23' name = 'phone' onChange = {handleOnChange}/>
                    </div>

                </div>
                
                
                <div className = {Styles.createAccountButton}>
                    <button onClick={onSubmit}><h1>Crear Cuenta</h1></button>
                </div>

            </div>


        </div>

        </form>

      </div>





    </>

  )
}
