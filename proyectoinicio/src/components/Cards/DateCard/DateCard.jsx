import React from 'react'

export function DateCard({dateInfo}) {
  

  
  return (
    <>
    
        <div className="container">
            <div className="imageContainer">
                <img src='/img/Logo.png' alt="" className="image" />
            </div>

            <div className="dateContainer">
                <h1>Fecha: {dateInfo.date} </h1>
            </div>

            <div className="selectionContainer">
                <button>
                    Seleccionar
                </button>
            </div>

        </div>


    </>

  )
}

