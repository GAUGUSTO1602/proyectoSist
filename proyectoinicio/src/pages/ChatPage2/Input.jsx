import React, { useState } from 'react'
import Img from "./img/img.png"
import Attach from "./img/attach.png"
import { useUser } from '../../context/UserContext'
import { useContext } from 'react'
import { ChatContext } from '../../context/ChatContext'
import { arrayUnion, doc, Timestamp, updateDoc } from '@firebase/firestore'
import { v4 as uuid } from 'uuid'
import { ref, uploadBytesResumable } from '@firebase/storage'
import { db } from '../../firebase/config'
import { serverTimestamp } from '@firebase/firestore'

const Input = () => {

  const [text, setText] = useState('')
  const [img, setImg] = useState(null)

  const {user} = useUser();
  const {data} = useContext(ChatContext)

  const handleSend = async () => {

    if(img){

      const storageRef = ref(stoarge, uuid);

      const uploadTask = uploadBytesResumable(storageRef, img)

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );

    } else{

      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: user.uid,
          date: Timestamp.now(),
        }),
      });

    }

    await updateDoc(doc(db, "userChats", user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText('')
    setImg(null)
  };

  return (
    <div className='input'>
      <input 
        type="text" 
        placeholder='Escribir un mensaje..' 
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <div className='send'>
        <img src={Attach} alt=""/>
        <input type="file" style={{display: "none"}} id="file" onChange={e => setImg(e.target.files[0])}/>
        <label htmlFor='file'>
          <img src={Img} alt=""/>
        </label>
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  )
}

export default Input