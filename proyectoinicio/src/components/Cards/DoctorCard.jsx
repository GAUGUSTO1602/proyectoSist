import React from 'react';
import './DoctorCard.css';
import { PerDoc_URL } from '../../constants/urls';

const DoctorCard = ({ Nombre, Género, Edad, Imagen, Especialización, Experiencia }) => {

  const handleButtonClick = () => {
    window.location.href = PerDoc_URL;
  }


  return (
    <div className='container'>    
      <div className="doctor-card">
        <img src={Imagen} alt={Nombre} />
        <h2>{Nombre}</h2>
        
        <div className='info'>
          <h3>Género: {Género}</h3>
          <h3>Edad: {Edad}</h3>
          <h3>Especialidad: {Especialización}</h3>
          <h3>Experiencia laboral: {Experiencia}</h3>
        </div>
      
        <button onClick={handleButtonClick}>Ver perfil</button>
        <button>Agendar cita</button>
      </div>
    </div>
  );
}

export default DoctorCard;