import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ParticipantInfo = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();

    const { data: camps = [] } = useQuery({
      queryKey: ['camps'],
      queryFn: async () => {
        const res = await axiosSecure.get(`/registers-participant?email=${user?.email}`);
        return res.data;
      }
    })

    const { data: payments = []} = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    })

    return (
        <div className="text-center mt-2 grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-2 border border-teal-700">
        {/* img  */}
        <div className="bg-black bg-opacity-40 bg-blend-overlay bg-center relative flex flex-col justify-center items-center text-white"
            style={{
                'height': '280px',
                'width': '100%',
                'backgroundSize': 'cover',
                backgroundImage: 'url("https://i.ibb.co/kmYx7g8/participant.jpg")'
            }}
        >
            <h1 className="text-4xl font-bold pb-4">Welcome, {user.displayName}!</h1>
            <h1 className="text-2xl font-semibold max-w-96 mx-auto">We're excited to have you join the CampMedix community!</h1>
        </div>
        {/* info  */}
        <div className="flex flex-col justify-center items-center max-w-96 mx-auto">
            <h2 className="text-3xl font-semibold pb-3">You have registered a total of <span className="text-4xl font-bold text-teal-700">{camps.length}</span> camps</h2>
            <p className="">You can register for camps, make secure payments, and provide feedback to help us improve your experience.</p>
        </div>

        {/* Info  */}
        <div className="flex flex-col justify-center items-center max-w-96 mx-auto">
            <h2 className="text-3xl font-semibold pb-3">You have paid for a total of<span className="text-4xl font-bold text-teal-700"> {payments.length}</span> camps.</h2>
            <p className="">In payment history, you can see all of your payment details along the with organizer's confirmation</p>
        </div>

        {/* img  */}
        <div className="bg-black bg-opacity-50 bg-blend-overlay bg-center relative flex flex-col justify-center items-center text-white"
            style={{
                'height': '280px',
                'width': '100%',
                'backgroundSize': 'cover',
                backgroundImage: 'url("https://i.ibb.co/ggMZHTS/participant2.jpg")'
            }}
        >
            <p className="text-2xl font-semibold text-center max-w-[400px] mx-auto">If you need any assistance, our support team is here to help. Thank you for choosing CampMedix to host your medical camps.
            </p>

        </div>


    </div>
    );
};

export default ParticipantInfo;