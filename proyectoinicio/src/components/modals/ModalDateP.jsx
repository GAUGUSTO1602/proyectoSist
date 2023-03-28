import React from 'react'
import "./ModalDateP.css"
import { useState, useEffect} from 'react'
import "react-datepicker/dist/react-datepicker.css"
import { useUser } from '../../context/UserContext'
import { db } from '../../firebase/config'
import { query, collection, getDocs, onSnapshot, doc, updateDoc } from '@firebase/firestore'


export const ModalDateP = ({openModal, setOpenModal}) => {

    const {user} = useUser()
    const [dates, setDates] = useState([])
    const [dname, setDname] = useState('')
    const [aDate, setAdate] = useState('')


    useEffect ( () =>{   
        
            const getDates =() => {

                const unsub = onSnapshot(doc(db, "dates", user.uid), (doc) => {
                    setDates(doc.data());
                    setDname(dates.dateInfo.name)
                    setAdate(dates.dateInfo.date)
                });

        
            return () => {
              unsub();
              console.log(dname)   
            };
            };
        
            user.uid && getDates();

      }, [user.uid]);

  
  return (
    <div className='container'>

        <div className='modalP-container'>


            <h1 className='til'>CITAS AGENDADAS</h1>


            <div >

                <div>
                    <h2 className='subTil1'>Cita con: {dname}</h2>
                </div>
                
              
                
            </div>



            <div className='btns'>
                <button className="btn2" onClick={() => {setOpenModal(false)}}>Cerrar</button>
            </div>

                
            
        </div>

        

    </div>
  )
}
