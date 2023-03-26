import React, { useContext } from 'react'
import { ChatContext } from '../../context/ChatContext';
import { useUser } from '../../context/UserContext'

const Message = ({ message }) => {

  const {user} = useUser();
  const {data} = useContext(ChatContext)

  return (
    <div className={`message ${message.senderId === user.uid && 'owner'}`}>
      <div className="messageInfo">
        <img src="" alt="" />
        <span>Justo ahora</span>
      </div>

      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src="" alt="" />}
      </div>
    </div>
  )
}

export default Message