import { Navigate } from "react-router-dom";
import { AnyElsePage_URL, CompRegDocPage_URL, CompRegPacPage_URL, HOME_URL, LOGIN_URL } from "../constants/urls";
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

export function PrivateRouteIncompleteUser({children}){
    const{user, isLoading} = useUser();
    
    if(isLoading){
        return <h1>LOADING USER...</h1>
    }
    
    if(!isLoading && user){

        if(user.password == ''){
            switch(user.rol){                
                case "doctor":
                    return <Navigate to={CompRegDocPage_URL}/>
                default:
                    return <Navigate to={CompRegPacPage_URL}/>                    
            }
        }
    }

    return children;
}

export function PrivateRouteCompleteUserPatient({children}){
    const{user, isLoading} = useUser();
    
    if(isLoading){
        return <h1>LOADING USER...</h1>
    }
    
    if(!isLoading && user){
        
        if(user.rol == "doctor"){
            
            switch(user.password){
                case "":
                    return <Navigate to={CompRegDocPage_URL}/>
                default:
                    return <Navigate to={HOME_URL}/>
            }

        }

        if(user.password != ""){
            return <Navigate to={HOME_URL}/>
        }
        
    }

    return children;
}

export function PrivateRouteCompleteUserDoctor({children}){
    const{user, isLoading} = useUser();
    
    if(isLoading){
        return <h1>LOADING USER...</h1>
    }
    
    if(!isLoading && user){
        
        if(user.rol == "paciente"){
            
            switch(user.password){
                case "":
                    return <Navigate to={CompRegPacPage_URL}/>
                default:
                    return <Navigate to={HOME_URL}/>
            }

        }

        if(user.password != ""){
            return <Navigate to={HOME_URL}/>
        }
        
    }

    return children;
}

