import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext'
import { completeValuesUser } from '../../firebase/auth-service';
import ReactDatePicker, {registerLocale} from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import "./ModalCita.css"
import Select from 'react-select'
import { db } from '../../firebase/config';
import { collection, query, where, getDocs, getDoc, setDoc, doc, updateDoc, addDoc} from "firebase/firestore";
import { serverTimestamp } from 'firebase/firestore';


export const ModalCita = ({doctor, openModal, setOpenModal}) => {



    const navigate = useNavigate();

    const {user} = useUser();

    const [options, setOptions] = useState([{ value: "No hay disponibilidad", label: "No hay disponibilidad"}])


    const [formData, setFormData] = useState({
        name: user.name,
        surname: user.surname,
        phone: user.phone,
        email: user.email,
        docName: doctor.name,
        docId: doctor.uid,
        ailment: " ",
        aDate: " ",
      });
  

   const handleClick = () => {
        if(doctor.availability != null){
            const {date, date2, date3, date4, date5} = doctor.availability

            const options =[
                { value: date, label: date },
                { value: date2, label: date2 },
                { value: date3, label: date3 },
                { value: date4, label: date4 },
                { value: date5, label: date5 }
            
            ]

            setOptions(options)
        }
   }
  
    const handleOnChange = (event) => {
      const {name, value} = event.target;
      setFormData({
        ...formData,
        [name]: value,
      })
      console.log(value)
    }

    const handleDate = (event) => {
        const name = "aDate"
        const date = event;
        const {value} = date;

        setFormData({
          ...formData,
          [name]: value,
        })
        console.log(value)
      }
  
    
  
    const onSubmit = async (event) => {
      event.preventDefault();
      const{name, surname, phone, email, docName, docId, ailment, aDate} = formData;
  
      
      if(formData.ailment == ""){
        alert('Coloque N/A en "padecimiento"')
      }else if(formData.aDate == ""){
        alert('No ha seleccionado una fecha o el doctor seleccionado no se encuentra disponible')
      }else{
        
            const combinedId = user.uid > docId ? user.uid + docId : docId + user.uid;
            
            await setDoc(doc(db, "dates", user.uid), {
                ["dateInfo"]: {
                uid: docId,
                name: docName,
                date: aDate,
                },
                ["executed"]: serverTimestamp(),
            });
  
            await setDoc(doc(db, "dates", docId), {
                ["dateInfo"]: {
                uid: user.uid,
                pName: name,
                pSurname: surname,
                pEmail: email,
                pPhone: phone,
                pAilment: ailment,
                date: aDate,
                },
                ["executed"]: serverTimestamp(),
            });

            alert('Cita registrada con exito')

            setOpenModal(false)
        
      }
  
    }
  
    return (
        <div className={'bigBox'}>
  
      
            <div className={"titleBox"}>
                <h1>Complete los campos para solicitar su cita</h1>
            </div>
    
            <div className={''}>
    
            <form onSubmit={onSubmit}>
    
                <div className={'inputsBoxTop'}>
                
                    <div className={'individualInputBox'}>
                        <h1 className={'text'}>Nombre del paciente</h1>
                        <h1 className='textField'>{user.name} {user.surname}</h1>
                    </div>
        
                    <div className={'individualInputBox'}>
                        <h1 className={'text'}>Correo del paciente</h1>
                        <h1 className='textField'>{user.email}</h1>
                    </div> 
        
                    <div className={'individualInputBox'}>
                        <h1 className={'text'}>Telefono del paciente</h1>
                        <h1 className='textField'>{user.phone}</h1>
                    
                    </div>

                    
                
            </div>

            <div className={'inputsBoxTop'}>
                
                    <div className={'individualInputBox'}>
                        <h1 className={'text'}>Nombre del Doctor</h1>
                        <h1 className='textField'>{doctor.name} {doctor.surname}</h1>
                    </div>
        
                    <div className={'individualInputBox'}>
                        <h1 className={'text'}>Padecimiento</h1>
                        <input type="text" className="textField" placeholder='Ej: Ansiedad' name = 'ailment' onChange={handleOnChange}/>
                    </div> 
        
                    <div className={'individualInputBox'}>
                        <h1 className={'text'}>Dia a agendar</h1>
                        <div className='textField' onClick={handleClick}>
                            <Select className='selector'placeholder="Selecionar.." options={options} onChange={(e) => handleDate(e)}/>
                        </div>
                    </div>              
                
            </div>

            <div className='btnsC'>
                <button className="btn1C" onClick={onSubmit}>Agendar cita</button>
                <button className="btn2C" onClick={() => {setOpenModal(false)}}>Cancelar</button>
            </div>
    
            </form>
    
            </div>
  
  
  
  
  
        </div>
  
    )
  }