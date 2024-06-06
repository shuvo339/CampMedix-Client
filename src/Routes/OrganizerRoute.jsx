import { Navigate } from 'react-router-dom'
import Lottie from "lottie-react";
import animationData from "../assets/spinner.json";
import useRoles from '../hooks/useRoles';


const OrganizerRoute = ({children}) => {
    const [role, isLoading] = useRoles()

  if (isLoading) return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
  if (role === 'organizer') return children
  return <Navigate to='/' />
}

export default OrganizerRoute;