import { Navigate } from "react-router-dom";
import { AnyElsePage_URL, LOGIN_URL } from "../constants/urls";
import { useUser } from "../context/UserContext";

export function PrivateRouteUser({children}){
    const {user, isLoading} = useUser();
    
    if(isLoading){
        return <h1>LOADING USER...</h1>
    }

    if(!isLoading && !user){
        return <Navigate to = {LOGIN_URL}/>
    }

    return children;
}

export function PrivateRouteNotUser({children}){
    const{user, isLoading} = useUser();

    if(isLoading){
        return <h1>LOADING USER...</h1>
    }

    if(!isLoading && user){
        return <Navigate to={AnyElsePage_URL}/>
    }

    return children;
}