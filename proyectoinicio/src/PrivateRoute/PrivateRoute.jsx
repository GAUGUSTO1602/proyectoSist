import { Navigate } from "react-router-dom";
import { SelReg_URL } from "../constants/urls";
import { useUser } from "../context/UserContext";

export function PrivateRoute({children}){
    const {user, isLoading} = useUser();
    
    if(isLoading){
        return <h1>LOADING USER...</h1>
    }

    if(!isLoading && !user){
        return <Navigate to = {SelReg_URL}/>
    }

    return children;
}