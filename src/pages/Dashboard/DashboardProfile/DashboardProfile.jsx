import useRoles from "../../../hooks/useRoles";
import Lottie from "lottie-react";
import animationData from "../../../assets/spinner.json" 
import OrganizerInfo from "./OrganizerInfo";
import ParticipantInfo from "./ParticipantInfo";

const DashboardProfile = () => {
    const [role, isLoading] = useRoles()
    if (isLoading) {
        return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
      }
    return (
        <div className="text-center mt-2">
            {
                role==='organizer' && <OrganizerInfo></OrganizerInfo>
            }
            {
                role==='participant' && <ParticipantInfo></ParticipantInfo>
            }
            
        </div>
    );
};

export default DashboardProfile;