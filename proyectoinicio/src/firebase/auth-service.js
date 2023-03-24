// Todos los métodos de autenticación
import {signInWithPopup,
    signOut,
     createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      getAdditionalUserInfo
   } from 'firebase/auth'
import { auth, googleProvider } from './config';
import { createUserProfile } from './users-service';


// export const signInWithGoogle = async () => {
//     const navigate = useNavigate();
//     try{
//         const result = await signInWithPopup(auth, googleProvider);
//         console.log(result);
       
//         const { isNewUser } = getAdditionalUserInfo(result);
       
//         if(isNewUser){
           
           
//             navigate(SelReg_URL);

//             // await createUserProfile(result.user.uid, {
//             //     email: result.user.email,
//             //     name: result.user.displayName,
//             //     age: 0,
//             //     rol: 'hardcodeadoMALAMENTE',
//             // })
//         }

//     }catch(error){
//         console.error(error);

//     }
// };

// Se usa para registrar al paciente con google
export const signInWithGooglePatient = async () => {

   try{

       const result = await signInWithPopup(auth, googleProvider);
       console.log(result);
       
       const { isNewUser } = getAdditionalUserInfo(result);
       
       console.log('NEWUSER', isNewUser);
       
       if(isNewUser){           

           await createUserProfile(result.user.uid, {
               name: result.user.displayName,
               phone:'',
               email: result.user.email,
               password: '',
               confirmPassword: '',
               age: 0,                               
               rol: 'paciente',
           })

       }

       return true;
   }catch(error){
        
        switch(error["code"]){
            case "auth/popup-closed-by-user":
                alert("Se cerró la ventana de ingreso");
                break;
            default:
                console.error(error);
                alert(error);         
        }
        return false;
   }
};

// Se usa para registrar al doctor con google
export const signInWithGoogleDoctor = async () => {
    try{
        const result = await signInWithPopup(auth, googleProvider);
        console.log(result);        
        const { isNewUser } = getAdditionalUserInfo(result); 
        
        if(isNewUser){    
            await createUserProfile(result.user.uid, {
                email: result.user.email,
                name: result.user.displayName,
                phone: '',
                email: result.user.email,
                password: '',
                confirmPassword: '',
                age: 0,
                universityName: '',
                career: '',
                License: '',
                specialty: '',
                specialtyUniversityName: '',
                specialtyLicense: '',
                laborExperience: 0, 
                rol: 'doctor',
            })
        }
        return true;

    }catch(error){

        switch(error["code"]){
            case "auth/popup-closed-by-user":
                alert("Se cerró la ventana de ingreso");
                break;
            default:
                console.error(error);
                alert(error);         
        }

        return false

    }
};

export const registerWithEmailAndPassword = async (email,
    password,
    extraData
    ) => {
    try{
        const result = await createUserWithEmailAndPassword(auth, email, password);
        console.log("REGISTER EMAIL AND PASSWORD", result);
        await createUserProfile(result.user.uid, {
            email,
            ...extraData
        });

        return true;
    }catch(error){
        console.error(error);
        alert(error);

        return false;
    } 
};

export const loginWithEmailAndPassword = async (email, password) => {
    try{
        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log('LOGIN', result);

        return true;
    }catch(error){

    switch(error["code"]){
        case "auth/invalid-email":
            alert("email invalido");
            break;
        case "auth/user-not-found":
            alert("Usuario o contraseña incorrectos");
            break;
        case "auth/wrong-password":
            alert("Usuario o contraseña incorrectos");
            break;
        case "auth/internal-error":
            alert("Verifique sus datos");
            break;
        default:
            alert(error);
    }
    return false;
    
   }
};

// export const signInWithEmailAndPassword = async () => {};

export const logout = async () => {
   try{
       await signOut(auth);
       
       return true;
   }catch(error){
    alert(error);
    
    return false;
   }
};