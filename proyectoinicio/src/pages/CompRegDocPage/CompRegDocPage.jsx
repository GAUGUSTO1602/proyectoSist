import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import Styles from './CompRegDocPage.module.css'
import ReactDatePicker, {registerLocale} from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";


export function CompRegDocPage() {

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

  return (
    <>

    
      <div className={Styles.titleBox}>
        <h1>¡Completa los datos para continuar!</h1>
      </div>

      <div className={Styles.contentBox}>
        
        <div className={Styles.inputsBoxTop}>
            
          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Contraseña</h1>
            <input type="text" className={Styles.textField} placeholder='Mínimo 6 caracteres' />
          </div>

          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Confirmar Contraseña</h1>
            <input type="text" className={Styles.textField} placeholder='Confirmar Contraseña' />
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
            <input type="text" className={Styles.textField} placeholder='Universidad donde estudió' />
          </div>

          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Universidad donde estudio (opcional)</h1>
            <input type="text" className={Styles.textField} placeholder='Universidad donde la cursó (Opcional)' />
          </div> 

          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Carrerra</h1>
            <input type="text" className={Styles.textField} placeholder='Nombre de su carrera' />
          </div>

          
            
        </div>

        <div className={Styles.inputsBoxTop}>
            
          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Licencia</h1>
            <input type="text" className={Styles.textField} placeholder='Licencia de verificación de carrera' />
          </div>

          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Licencia</h1>
            <input type="text" className={Styles.textField} placeholder='Licencia (Opcional)' />
          </div> 

          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Experiencia laboral</h1>
            <input type="text" className={Styles.textField} placeholder='Cantidad en número entero (en años)' />
          </div>

          
            
        </div>

        

        <div className={Styles.contentBoxBottomPart}>

            <div className={Styles.rightBox}>

                <div className={Styles.inputBoxBottom}>

                    <div className={Styles.individualInputBox}>
                        <h1 className={Styles.text}>Especialidad (opcional)</h1>
                        <input type="text" className={Styles.textField} placeholder='Nombre de la especialidad (Opcional)'/>
                    </div>
                
                    <div className={Styles.individualInputBox}>
                        <h1 className={Styles.text}>Teléfono (Opcional)</h1>
                        <input type="text" className={Styles.textField} placeholder='Ej. 0424 162 22 23'/>
                    </div>

                </div>
                
                
                <div className = {Styles.createAccountButton}>
                    <button><h1>Crear Cuenta</h1></button>
                </div>

            </div>


        </div>


      </div>





    </>

  )
}
