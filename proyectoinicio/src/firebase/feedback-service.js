import {db} from './config';
import { doc, setDoc } from "firebase/firestore";

export async function crearEspacioComentario(name, data){
    
    return setDoc(doc(db, 'feedback', name), data);
}

export const registrarFeedback = async (
    name,
    message,
    extraData
    ) => {
    try{
        const result = await crearComentario(name, message);
        console.log("REGISTER nombre y mensaje", result);
        await crearEspacioComentario(result.feedback.fid, {
            fid: result.feedback.fid,
            name,
            ...extraData
        });

        await setDoc(doc(db, "feedback", result.feedback.fid), {});

        return true;
    }catch(error){
        console.error(error);
        alert(error);

        return false;
    } 
};