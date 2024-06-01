import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <div className="text-center mt-6"><span className="loading loading-spinner text-secondary loading-lg"></span></div>;
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} replace={true} to="/login"></Navigate>
};


export default PrivateRoute;