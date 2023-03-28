import React from 'react'
import Styles from './DateCard.module.css'
import { PayPage } from '../../../pages/PayPage/PayPage';

export function DateCard({dateInfo, DateCardToPayPage}) {
  
    const onSubmit = async (event) =>{
        event.preventDefault();
    }

  
  return (
    <>
    
        <div className={Styles.container}>

            <div className={Styles.backGround}>

                <div className={Styles.imageContainer}>
                    <img src='/img/Logo.png' alt="" className={Styles.image} />
                </div>

                <div className={Styles.dateContainer}>
                    <h1 className={Styles.cardText}> Fecha: {dateInfo.date} </h1>
                </div>

                <div className={Styles.selectionContainer}>
                    <button onClick={() => DateCardToPayPage(dateInfo)}>
                        <h1 className={Styles.cardText}> Seleccionar </h1>
                    </button>
                </div>

            </div>

        </div>


    </>

  )
}

