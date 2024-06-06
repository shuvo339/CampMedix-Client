import { Navigate } from "react-router-dom"
import Lottie from "lottie-react";
import animationData from "../assets/spinner.json";
import useRoles from "../hooks/useRoles";


const ParticipantRoute = ({children}) => {
    const [role, isLoading] = useRoles()
    console.log(role);

  if (isLoading) return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
  if (role === 'participant') return children
  return <Navigate to='/' />
}


export default ParticipantRoute;