import {doc, setDoc} from 'firebase/firestore';
import { db } from './config';

export async function createUserProfile(userId, data){
    return setDoc(doc(db, 'users', userId), data);
}