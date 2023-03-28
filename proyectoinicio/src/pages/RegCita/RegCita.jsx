import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext'
import { completeValuesUser } from '../../firebase/auth-service';
import './RegCita.css'
import ReactDatePicker, {registerLocale} from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import { useDoctors } from '../../hooks/useDoctors';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs, getDoc, setDoc, doc, updateDoc,} from "firebase/firestore";


export function RegCita() {

    const {doctorId} = useParams()
    const [doctor, setDoctor] = useState({})


    useEffect(() => {
        const q = query(collection(db, "users"), where("uid", "==", doctorId))  
               
        getDocs(q).then(res => setDoctor(res.docs.map(person => ({id: person.id, ...person.data() }))));
    }, []);


    const navigate = useNavigate();

    const {user} = useUser();
    
    console.log(user)

    const prueba = () => {
        console.log(doctor)
        console.log(doctorId)
    }
    
    // alert(user.rol)
  
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
          
          navigate(HOME_URL);
        }
        
      }
  
    }
  
    return (
      <div className={'bigBox'}>
  
      
        <div className={"titleBox"}>
          <h1>Complete los campos para solicitar su cita</h1>
        </div>
  
        <div className={'contentBox'}>
  
          <form onSubmit={onSubmit}>
  
            <div className={'inputsBoxTop'}>
              
                <div className={'individualInputBox'} onClick={prueba}>
                    <h1 className={'text'}>Nombre del paciente</h1>
                    <h1 className='textField'>{user.name} {user.surname}</h1>
                </div>
    
                <div className={'individualInputBox'}>
                    <h1 className={'text'}>Correo</h1>
                    <h1 className='textField'>{user.email}</h1>
                </div> 
    
                <div className={'individualInputBox'}>
                    <h1 className={'text'}>Telefono</h1>
                    <h1 className='textField'>{user.phone}</h1>
                
                </div>

                
              
          </div>

          <div className={'inputsBoxTop'}>
              
                <div className={'individualInputBox'}>
                    <h1 className={'text'}>Nombre del paciente</h1>
                    <h1 className='textField'>{doctor.name}</h1>
                </div>
    
                <div className={'individualInputBox'}>
                    <h1 className={'text'}>Correo</h1>
                    <h1 className='textField'>{user.email}</h1>
                </div> 
    
                <div className={'individualInputBox'}>
                    <h1 className={'text'}>Telefono</h1>
                <ReactDatePicker className={'textField'}
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
  
          {/* <div className={'contentBoxBottomPart'}>
  
            <div className={'imageBox'}>
              <img src="img\psychologicalConsultation.png" alt="" />
            </div>
  
            <div className={'rightBox'}>
  
              <div className={'inputBoxBottom'}>
                
                <div className="">
                  <h1 className={'text'}>Teléfono (Opcional)</h1>
                  <input type="text" className={'textField'} placeholder='phone' name = 'phone' />
                </div>
  
              </div>
              
              <div className = {'createAccountButton'}>
                <button onClick={onSubmit}><h1>Crear Cuenta</h1></button>
              </div>
  
            </div>
  
  
          </div> */}
  
          </form>
  
        </div>
  
  
  
  
  
      </div>
  
    )
  }