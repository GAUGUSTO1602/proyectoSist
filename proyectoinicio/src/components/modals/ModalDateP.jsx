import React from 'react'
import "./ModalDateP.css"
import { useState, useEffect} from 'react'
import "react-datepicker/dist/react-datepicker.css"
import { useUser } from '../../context/UserContext'
import { db } from '../../firebase/config'
import { query, collection, getDocs, where, onSnapshot, doc, updateDoc } from '@firebase/firestore'


export const ModalDateP = ({openModal, setOpenModal}) => {

    const {user, isLoading} = useUser();
    const [dates, setDate] = useState([]);



    async function receiveQueryObjectsDate(){ 
        
        const queryObjects = query(collection(db, "dates"), where("dateInfo.pEmail", "==", user.email));
        
        const querySnapshot = await getDocs(queryObjects);
        
        
        querySnapshot.forEach((doc) => {
            
            // doc.data() is never undefined for query doc snapshots
            
            const newDate = doc.data()['dateInfo'];
            
            addToDateList(newDate);
            
        });
        
    }
    
    
    
    const addToDateList = (newDate) => {
        // console.log('Date list', newDate);
        
        setDate(newDate.date)
        
        // console.log('Date list added', newDate);

    }

    useEffect(() => {
        try{
            
            if(!isLoading){
                
                receiveQueryObjectsDate();

                // console.log(dates);
                
            }else{
                console.log('isLoading...');
            }
            
        }catch(error){
            console.log(error);
        }
        
    }, [])

  
  return (
    <div className='container'>

        <div className='modalP-container'>


            <h1 className='til'>CITAS AGENDADAS</h1>


            <div >

                <div>
                    <h2 className='subTil1'>Fecha: {dates}</h2>
                </div>
                
              
                
            </div>



            <div className='btns'>
                <button className="btn2" onClick={() => {setOpenModal(false)}}>Cerrar</button>
            </div>

                
            
        </div>

        

    </div>
  )
}
