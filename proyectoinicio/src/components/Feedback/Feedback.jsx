
import { registrarFeedback } from '../../firebase/feedback-service';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME_URL} from '../../constants/urls';
import { Link } from 'react-router-dom';



function Feedback() {
 
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      name: '',
      message: ''
    });
    
    const handleOnChange = (event) => {
      const {name, value} = event.target;
      setFormData({
        ...formData,
        [name]: value,
      })
      console.log(value)
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        const {name, message, ...extraData} = formData;
  
        if(formData.name == ''){
          alert('Nombre no puede ser vacío');
        }else if(formData.message == ''){
          alert('Apellido no puede ser vacío')
        }else{
          
            const isFinished = await registrarFeedback(formData.name, formData.message, extraData);
  
        if(isFinished){
          navigate(HOME_URL);        
        }
      }
  
  
      };

    
  return (
    <div className='ContainerP'>
      

        <div className='bloque1'>
            <h1 className='titulo'>¡Bienvenidos a Psicopana!</h1>
            <img className="imagen" src="img/Logo.png" alt="" />
        </div>

        <div className='rectanguloP'></div>

        <h3 className='titulo2P'>Califica a tu doctor</h3>

        <div className='subtitulosP'>

          <h5 className='sub1P'>Nombre</h5>

          <h5 className='sub2P'>Mensaje</h5>

        </div>

        <form className='fieldP' onSubmit = {onSubmit}>

          <input type="text" className="field1P" placeholder='Ej: Antonio Herrera' name = 'name' onChange={handleOnChange}></input>

          <input type="text" className="field2P" placeholder='Ej: Me pareció excelente' name = 'message' onChange={handleOnChange}></input>


          <button type="button" className="button1P" id="searchButtom" onClick={onSubmit}>Enviar feedback</button>
        </form>


        <h5 className='titulo4P'>Todos los derechos reservados</h5>


    </div>

    
  )
}

export default Feedback;