import React from 'react'
import NavbarChat from './NavbarChat'
import Search from './Search'
import Chats from './Chats'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <NavbarChat/>
        <Search/>
        <Chats/>
    </div>
  )
}

export default SideBar