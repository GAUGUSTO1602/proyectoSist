import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({doctor}) => {
  return (
    <div className='container'>    
      <div className="doctor-card">
        {/* <img src={Imagen} alt={Nombre} /> */}
        <h2>{doctor.name}</h2>
        
        <div className='info'>
          {/* <h3>Género: {Género}</h3> */}
          <h3>Edad: {doctor.age}</h3>
          <h3>Especialidad: {doctor.specialty}</h3>
          <h3>Experiencia laboral: {doctor.laborExperience}</h3>
        </div>
      
        <button>Ver perfil</button>
        <button>Agendar cita</button>
      </div>
    </div>
  );
}

export default DoctorCard;