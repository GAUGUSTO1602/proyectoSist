import React from 'react';
import './PlanesCard.css'; 

function PlanesCard(props) {
  return (
    <div className="tarjeta">
      <div className='circulo-imagen'>
        <img src={props.imagen} alt={props.alt} />
      </div>
      
      <div className="contenido">
        <h2>{props.titulo}</h2>
        <p>{props.descripcion}</p>        
      </div>

      <div className="precio">
        <h3>{props.precio}</h3>
      </div>
    </div>
  );
}

export default PlanesCard;
