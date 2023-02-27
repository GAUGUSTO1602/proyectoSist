import React from 'react';
import Styles from './DoctorCard.css';

const DoctorCard = ({ Nombre, Género, Edad, Imagen, Especialización, Experiencia }) => {
  return (
    <div className={Styles.container}>    
      <div className="doctor-card">
        <img src={Imagen} alt={Nombre} />
        <h2>{Nombre}</h2>
        <h3>{Género}</h3>
        <h3>{Edad}</h3>
        <h3>{Especialización}</h3>
        <h3>{Experiencia}</h3>
        
        <button>Ver perfil</button>
        <button>Agendar cita</button>
      </div>
    </div>
  );
}

export default DoctorCard;