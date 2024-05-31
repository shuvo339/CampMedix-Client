import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
    const allvalues = useContext(AuthContext);
    return allvalues;
};

export default useAuth;