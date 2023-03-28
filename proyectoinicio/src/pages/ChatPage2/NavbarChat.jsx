import React from 'react'
import { useUser } from '../../context/UserContext'

const NavbarChat = () => {

  const {user} = useUser()

  return (
    <div className='navbarC'>
      <span className="logo">Chat</span>
      <div className="user">
        <img src='img/profile.png' alt="" />
        <span>{user.name}</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default NavbarChat