import React from 'react';
import './FeedbackCard.css'; 

function FeedbackCard(props) {
  return (
    <div className="tarjetaf">
        <div className='circulo-imagenf'>
            <img className="cara" src={props.imagen} alt={props.alt} />
        </div>
      
      <div className="contenidof">
        <h2>{props.titulo}</h2>
        <p>{props.descripcion}</p>        
      </div>

      <div className="mas_info">
        <h3>{props.mas_info}</h3>
      </div>
    </div>
  );
}

export default FeedbackCard;
