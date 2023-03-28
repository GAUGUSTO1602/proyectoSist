import { collection, getDocs, query, where } from '@firebase/firestore'
import { setDate } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DateCard } from '../../components/Cards/DateCard/DateCard'
import { HOME_URL } from '../../constants/urls'
import { useUser } from '../../context/UserContext'
import { db } from '../../firebase/config'
import Styles from './PayPage.module.css'

export function PayPage() {

    const {user, isLoading} = useUser();
    const [dates, setDate] = useState([]);

    const handleClick = ()=>{
        window.open('https://www.paypal.com/', '_blank')
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
    
    async function receiveQueryObjectsDate(){ 
        
        // const queryObjects = query(collection(db, "dates"), where("dateInfo.pEmail", "==", user.email));
        const queryObjects = query(collection(db, "dates"), where("dateInfo.pEmail", "==", "paciente2@gmail.com"));
        
        const querySnapshot = await getDocs(queryObjects);
           
        
        querySnapshot.forEach((doc) => {
            
            // doc.data() is never undefined for query doc snapshots
            
            const newDate = doc.data()['dateInfo'];
            
            addToDateList(newDate);

        });
    
    }

    const addToDateList = (newDate) => {
        console.log('Date list', newDate);

        setDate((dates) => [...dates, newDate])
        
        console.log('Date list added', newDate);

    }

    const handleOnChange = (event) => {
        
        console.log(dates);

    }



  return (
    <>
        <div className={Styles.topBox}>
            <div className={Styles.titleTopBox}>

                <h1 className={Styles.title}>
                    
                    ¡Asegura tu cita con&nbsp; <h1 className={Styles.titleBlue}>Psicopana</h1>!
                    
                </h1>
            </div>

            <button className={Styles.imageTopBox} onClick={handleClick}>
                <img className={Styles.imagePayPal} src='img/payPalLogo.png'/>
            </button>
        </div>

        <div className={Styles.downBox}>
            <div className={Styles.downBoxInside}>
                <div className={Styles.firstTextDownBox}>
                    <p className={Styles.paragraphText}>
                        Bienvenido a la ventana de pago. Puede enviar su transacción al siguiente correo: <br/> <br/> 
                        <p className={Styles.paragraphTextBlue}>    &nbsp;joseyv5@gmail.com</p> <br/>
                        &nbsp; Vía PayPal. Una vez completada, copie y pegue la referencia de la misma en el campo de abajo y click en el botón “¡Validar Pago!”. Se tardará un poco en validar su pago. Tenga paciencia!.
                    </p>
                </div>

                <div className={Styles.cardsBox}>
                    {dates.map((date) => (
                        <DateCard dateInfo={date}/>
                    ))}
                </div>

                <div className={Styles.secondTextDownBox}>
                    <p className={Styles.paragraphText}>A continuación, pegue la referencia que valida su transacción hecha en PayPal</p>
                </div>

                <div className={Styles.inputsDownBox}>
                    <form action="">

                        <div className={Styles.textFieldInputsDownBox}>
                            <input type="text" className={Styles.textField} placeholder='referencia del pago' onChange={handleOnChange}/>
                        </div>

                        <div className={Styles.buttonInputsDownBox}>
                            <button className={Styles.buttonSendReference}>¡Validar Pago!</button>
                        </div>

                    </form>
                </div>

                <div className={Styles.comebackDownBox}>
                    <Link to={HOME_URL} className = {Styles.comebackText}>
                        <h1>Regresar a Home</h1>
                    </Link>                    
                </div>

            </div>
        </div>
    </>
  )
}

