import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const OrganizerInfo = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();

    const { data: camps = [] } = useQuery({
      queryKey: ['camps'],
      queryFn: async () => {
        const res = await axiosSecure.get(`/manage-camps?email=${user?.email}`);
        return res.data;
      }
    })

    const { data: regCamps = [] } = useQuery({
        queryKey: ['regCamps'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/registers-organizer?email=${user?.email}`);
          return res.data;
        }
      })

    return (
        <div className="text-center mt-2 grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-2 border border-teal-700">
            {/* img  */}
            <div className="bg-black bg-opacity-50 bg-blend-overlay bg-center relative flex flex-col justify-center items-center text-white"
                style={{
                    'height': '280px',
                    'width': '100%',
                    'backgroundSize': 'cover',
                    backgroundImage: 'url("https://i.ibb.co/BqQxz27/medical-organizer.jpg")'
                }}
            >
                <h1 className="text-4xl font-bold pb-4">Welcome, {user.displayName}!</h1>
                <h1 className="text-2xl font-semibold max-w-96 mx-auto">We are delighted to have you as an Organizer at CampMedix!</h1>
            </div>
            {/* info  */}
            <div className="flex flex-col justify-center items-center max-w-96 mx-auto">
                <h2 className="text-3xl font-semibold pb-3">You are hosting a total of <span className="text-4xl font-bold text-teal-700">{camps.length}</span> camps</h2>
                <p className="">As an organizer, you can manage your camps, update your camp information, view participant registrations, and more.</p>
            </div>

            {/* Info  */}
            <div className="flex flex-col justify-center items-center max-w-96 mx-auto">
                <h2 className="text-3xl font-semibold pb-3">You have <span className="text-4xl font-bold text-teal-700">{regCamps.length}</span> registered camps to manage</h2>
                <p className=""> For managing registered camps, you can confirm or cancel registrations as needed.</p>
            </div>

            {/* img  */}
            <div className="bg-black bg-opacity-70 bg-blend-overlay bg-center relative flex flex-col justify-center items-center text-white"
                style={{
                    'height': '280px',
                    'width': '100%',
                    'backgroundSize': 'cover',
                    backgroundImage: 'url("https://i.ibb.co/WKfXy06/organizer2.jpg")'
                }}
            >
                <p className="text-2xl font-semibold text-center max-w-[400px] mx-auto">If you need any assistance, our support team is here to help. Thank you for choosing CampMedix to host your medical camps.
                </p>

            </div>


        </div>
    );
};

export default OrganizerInfo;