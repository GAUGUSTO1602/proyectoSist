import React from 'react'
import "./ModalAva.css"
import { useState, useEffect } from 'react'
import ReactDatePicker, {registerLocale} from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import { useUser } from '../../context/UserContext'
import { db } from '../../firebase/config'
import { updateDoc, doc, onSnapshot } from '@firebase/firestore'


export const ModalDateP = ({openModal, setOpenModal}) => {

    const {user} = useUser()
    const [dates, setDates] = useState([]);

    useEffect(() =>{
        const getDates = () => {
          const unsub = onSnapshot(doc(db, "dates", user.uid), (doc) => {
            setDates(doc.data());
          });
    
          return () => {
            unsub();
          };
        };
    
        user.uid && getDates();
      }, [user.uid]);

  
  return (
    <div className='container'>

        <div className='modal-container'>
            <h2 className='til'>INGRESA TUS FECHAS DE DISPONIBILIDAD</h2>

            <div className='inputTime'>

            <div className=''>
                {Object.entries(dates).map(date =>(
                    alert(date.dateInfo.name)
                    
                ))}

            </div>



                <div className='btns'>
                    <button className="btn2" onClick={() => {setOpenModal(false)}}>Cancelar</button>
                </div>

                
            </div>
        </div>

        

    </div>
  )
}
