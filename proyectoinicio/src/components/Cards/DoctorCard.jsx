import React, { useState } from 'react';
import './DoctorCard.css';
import { ModalCita } from '../modals/ModalCita';
import {} from "../../constants/urls"
import { Link } from 'react-router-dom';


const DoctorCard = ({doctor}) => {


  const [openModal, setOpenModal] = useState(false)

  return (

    <div className='container'> 
      {openModal && <ModalCita doctor={doctor} openModal={openModal} setOpenModal={setOpenModal}/>}
      <div className="doctor-card">
        {/* <img src={Imagen} alt={Nombre} /> */}
        <h2>{doctor.name}</h2>
        
        <div className='info'>
          {/* <h3>Género: {Género}</h3> */}
          <h3>Fecha Nac: {doctor.age}</h3>
          <h3>Especialidad: {doctor.specialty}</h3>
          <h3>Experiencia laboral: {doctor.laborExperience}</h3>
        </div>
      
        <button>Ver perfil</button>
        <button onClick={() => {setOpenModal(true)}}>Agendar cita</button>
      </div>
    </div>
  );
}

export default DoctorCard;
