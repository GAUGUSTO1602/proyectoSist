import "./PerPacPage.css"

function PerPacPage() {

    return (
      <div className='Container'>
        
        <header className="header">
            <nav>
                
                <div className="logo">
                    <img src="img/Logo.png" alt="" />
                </div>
  
                <ul className="navLinks">
                      <li>Home</li>
                      <li>Doctores</li>
                      <li>Mi perfil</li>
                </ul>
  
                <div className="foto">
                    <img src="img/fotoPerfil.png" alt="" />
                </div>
  
                <div className="flecha">
                    <img src="img/flecha.png" alt="" />
                </div>
  
            </nav>
  
        </header>
  
        <div className='rectanguloPP'></div>
  
        <div className='opcionesP'>
  
          <h4 className='op1'>Datos personales</h4>
  
          <h4 className='op2'>Membresia</h4>
  
          <h4 className='op3'>Pago</h4>
  
          <h4 className='op4'>Chats archivados</h4>
  
        </div>
  
        <button className='Bchat'>Comenzar chat</button>
  
        <div className='rectangulosP'>
  
          <div className='recP1'></div>
  
          <div className='recP2'></div>
  
          <div className='recP3'></div>
  
          <div className='recP4'></div>
  
          <div className='recP5-S'></div>
  
  
        </div>
  
  
        <div className='subtitulos1P'>
  
          <h4 className='sub1-1p'>Nombres</h4>
  
          <h4 className='sub1-2p'>Apellidos</h4>
  
          <h4 className='sub1-3p'>Edad</h4>
  
          <h4 className='sub1-4p'>Teléfono</h4>
  
          <h4 className='sub1-5p'>Correo electrónico</h4>
  
        </div>
  
        <div className='subtitulos2P'>
  
          <h4 className='sub2-1p'>xxxxxxxxxxx</h4>
  
          <h4 className='sub2-2p'>xxxxxxxxxxx</h4>
  
          <h4 className='sub2-3p'>xxxxxxxxxxx</h4>
  
          <h4 className='sub2-4p'>xxxxxxxxxxx</h4>
  
          <h4 className='sub2-5p'>xxxxxxxxxxx</h4>
  
  
        </div>
  
  
  
      </div>
  
      
    )
  }
  
  export default PerPacPage;