

// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';

// import { auth } from '../../firebase/config';
// import ChatRoom from './ChatRoom';
// import "./ChatDesign.css"
// import { useUser } from '../../context/UserContext';

// function ChatPage2() {

//     const {user} = useUser()

//   return (
//     <div className="App">
//       <header>
//         <h1>⚛️🔥💬</h1>
//       </header>

//       <section>
//         {user ? <ChatRoom /> : null}
//       </section>

//     </div>
//   );
// }

// function SignIn() {

//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }

//   return (
//     <>
//       <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
//       <p>Do not violate the community guidelines or you will be banned for life!</p>
//     </>
//   )

// }

// function SignOut() {
//   return auth.currentUser && (
//     <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
//   )
// }








// export default ChatPage2;