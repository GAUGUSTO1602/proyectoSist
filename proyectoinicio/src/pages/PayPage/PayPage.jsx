import React from 'react'
import Styles from './PayPage.module.css'

export function PayPage() {
  return (
    <>
        <div className={Styles.topBox}>
            <div className={Styles.titleTopBox}>

                <h1 className={Styles.title}>
                    
                    ¡Asegura tu cita con&nbsp; <h1 className={Styles.titleBlue}>Psicopana</h1>!
                    
                </h1>
            </div>

            <div className={Styles.imageTopBox}>
                <img className={Styles.imagePayPal} src='img/payPalLogo.png'/>
            </div>
        </div>

        <div className={Styles.downBox}>
            <div className={Styles.downBoxInside}>
                <div className={Styles.firstTextDownBox}>
                    <p className={Styles.paragraphText}>
                        Bienvenido a la ventana de pago. Puede enviar su transacción al siguiente correo: <br/> <br/> 
                        <p className={Styles.paragraphTextBlue}>    &nbsp;joseyv5@gmail.com</p> <br/>
                        &nbsp; Vía PayPal. Una vez completada, copie y pegue la referencia de la misma en el campo de abajo y click en el botón “enviar”. Se tardará un poco en validar su pago. Tenga paciencia!.
                    </p>
                </div>

                <div className={Styles.secondTextDownBox}>
                    <p className={Styles.paragraphText}>A continuación, pegue la referencia que valida su transacción hecha en PayPal</p>
                </div>

                <div className={Styles.inputsDownBox}>
                    <div className={Styles.textFieldInputsDownBox}>
                        <input type="text" className={Styles.textField} placeholder='referencia del pago'/>
                    </div>

                    <div className={Styles.buttonInputsDownBox}>
                        <button className={Styles.buttonSendReference}>¡Validar Pago!</button>
                    </div>
                </div>

                <div className={Styles.comeBackDownBox}>

                </div>
            </div>
        </div>
    </>
  )
}

