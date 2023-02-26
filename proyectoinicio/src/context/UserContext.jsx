import { onAuthStateChanged } from "@firebase/auth";
import React, {useContext, createContext, useEffect, useState} from "react";
import { auth } from "../firebase/config";


export const UserContext = createContext(null);

export function UserContextProvider({children}){

    const [user, setUser] = useState(null);

    useEffect (() => {
        onAuthStateChanged(auth, (firebaseUser) => {
            console.log(firebaseUser);
            if(firebaseUser){
                //TODO: Update this
                setUser({
                    id: firebaseUser.uid,
                    email: firebaseUser.ail,
                    name: firebaseUser.displayName,

                })
            }else{
                setUser(null)
            }            
        });
    }, []);

    return <UserContext.Provider value = {{user}}>
        {children}
    </UserContext.Provider>
}

export function useUser(){
    return useContext(UserContext);
}