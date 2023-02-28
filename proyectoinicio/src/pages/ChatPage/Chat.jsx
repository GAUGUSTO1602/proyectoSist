import React from 'react';
import NavbarChat from '../../components/NavbarChat/NavbarChat';
import ChatPage from './ChatPage';
import { useUser } from '../../context/UserContext';
import "./ChatPage.css";


const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function Chat() {
  const { user } = useUser();
  //  console.log(user)
  return (
    <div className={style.appContainer}>
      <section className='{style.sectionContainer}'>
        {/* Navbar */}
        <NavbarChat />
        {user ? <ChatPage /> : null}
      </section>
    </div>
  );
}

export default Chat;