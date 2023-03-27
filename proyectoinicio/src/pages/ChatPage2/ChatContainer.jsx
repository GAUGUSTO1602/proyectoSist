import React from 'react'
import SideBar from './SideBar'
import Chat from './Chat'
import "./ChatDesign.scss"

const ChatContainer = () => {

  return (
    <div className='page'>
        <div className='containerC'>
            <SideBar/>
            <Chat/>

        </div>

    </div>
  )
}

export default ChatContainer