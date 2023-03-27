import React from 'react';
import './DoctorCard.css';
import {} from "../../constants/urls"
import { Link } from 'react-router-dom';


const DoctorCard = ({doctor}) => {
  return (
    <div className='container'>    
      <div className="doctor-card">
        {/* <img src={Imagen} alt={Nombre} /> */}
        <h2>{doctor.name}</h2>
        
        <div className='info'>
          {/* <h3>Género: {Género}</h3> */}
          <h3>Fecha Nac: {doctor.age}</h3>
          <h3>Especialidad: {doctor.specialty}</h3>
          <h3>Experiencia laboral: {doctor.laborExperience}</h3>
        </div>
      
        <button>
          <Link >
            <span>Ver Perfil</span>
          </Link>                                           
        </button>
        <button>
          <Link >
            <span>Agendar cita</span>
          </Link>                                           
        </button>
      </div>
    </div>
  );
}

export default DoctorCard;
