import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Lottie from "lottie-react";
import animationData from "../assets/spinner.json";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} replace={true} to="/login"></Navigate>
};


export default PrivateRoute;