import React from 'react'
import { useUser } from '../../context/UserContext'
import { Link } from 'react-router-dom'
import { HOME_URL } from '../../constants/urls'

const NavbarChat = () => {

  const {user} = useUser()

  return (
    <div className='navbarC'>
      <span className="logo">Chat</span>
      <div className="user">
        <img src='img/profile.png' alt="" />
        <span>{user.name}</span>
        <Link to={HOME_URL}>
          <button>logout</button>
        </Link>
      </div>
    </div>
  )
}

export default NavbarChat