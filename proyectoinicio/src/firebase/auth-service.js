// Todos los métodos de autenticación
import {signInWithPopup, signOut} from 'firebase/auth'
import { auth, googleProvider } from './config';

export const signInWithGoogle = async () => {
    try{
        const result = await signInWithPopup(auth, googleProvider);
        console.log(result);

    }catch(error){
        console.log(error);

    }
};
export const registerWithEmailAndPassword = async () => {};
export const signInWithEmailAndPassword = async () => {};

export const logout = async () => {
    try{
        await signOut(auth);
    }catch(error){}
};