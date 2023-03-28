import React from 'react'
import "./ModalDateP.css"
import { useState, useEffect } from 'react'
import ReactDatePicker, {registerLocale} from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import { useUser } from '../../context/UserContext'
import { db } from '../../firebase/config'
import { query, collection, getDocs, onSnapshot, doc } from '@firebase/firestore'


export const ModalDateP = ({openModal, setOpenModal}) => {

    const {user} = useUser()
    const [dates, setDates] = useState([])
    const [name, setName] = useState("")
    const [date, setDate] = useState("")

    useEffect(() =>{
        const getDates = () => {
          const unsub = onSnapshot(doc(db, "dates", user.uid), (doc) => {
            setDates(doc.data());
            setName(dates.dateInfo.name)
            setDate(dates.dateInfo.date)
          });
    
          return () => {
            unsub();
          };
        };
    
        user.uid && getDates();
      }, [user.uid]);

  
  return (
    <div className='container'>

        <div className='modalP-container'>


            <h1 className='til'>CITAS AGENDADAS</h1>


            <div >
                <h2 className='subTil1'>Cita con: {name}</h2>
                <h2 className='subTil2'>Fecha: {date}</h2>
            </div>



            <div className='btns'>
                <button className="btn2" onClick={() => {setOpenModal(false)}}>Cerrar</button>
            </div>

                
            
        </div>

        

    </div>
  )
}
