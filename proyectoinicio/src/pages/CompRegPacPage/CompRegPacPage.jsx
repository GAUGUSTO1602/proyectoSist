import React from 'react'
import Styles from './CompRegPacPage.module.css'


export function CompRegPacPage() {
  return (
    <>

    
      <div className={Styles.titleBox}>
        <h1>¡Completa los datos para continuar!</h1>
      </div>

      <div className={Styles.contentBox}>
        
          <div className={Styles.inputsBoxTop}>
            
          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Contraseña</h1>
            <input type="text" className={Styles.textField} placeholder='password' />
          </div>

          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Confirmar Contraseña</h1>
            <input type="text" className={Styles.textField} placeholder='confirmPassword' />
          </div> 

          <div className={Styles.individualInputBox}>
            <h1 className={Styles.text}>Edad</h1>
            <input type="text" className={Styles.textField} placeholder='age' />
          </div>
            
        </div>

        <div className={Styles.contentBoxBottomPart}>

          <div className={Styles.imageBox}>
            <img src="img\psychologicalConsultation.png" alt="" />
          </div>

          <div className={Styles.inputBoxBottom}>
            
            <div className="">
              <h1 className={Styles.text}>Teléfono (Opcional)</h1>
              <input type="text" className={Styles.textField} placeholder='phoneNumber'/>
            </div>

          </div>

        </div>


      </div>





    </>

  )
}
