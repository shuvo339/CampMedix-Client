import useRoles from "../../../hooks/useRoles";
import Lottie from "lottie-react";
import animationData from "../../../assets/spinner.json" 

const DashboardProfile = () => {
    const [role, isLoading] = useRoles()
    if (isLoading) {
        return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
      }
    return (
        <div className="text-center mt-20">
            {
                role==='organizer' && <h2 className="text-3xl font-semibold">Welcome to Organizer Dashboard</h2>
            }
            {
                role==='participant' && <h2 className="text-3xl font-semibold">Welcome to Participant Dashboard</h2>
            }
            
        </div>
    );
};

export default DashboardProfile;