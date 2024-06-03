import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAuth from "../../../../hooks/useAuth";
import RegisteredTable from "./RegisteredTable";

const RegisteredCamps = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const {data: registeredCamps = [], isPending: loading} = useQuery({
      queryKey: ['register'], 
      queryFn: async() =>{
          const res = await axiosPublic.get(`/register?email=${user?.email}`);
          return res.data;
      }
  })
    return (
        <div className="my-8">
        <div className="h-20 bg-blue-100 flex justify-center items-center">
        <h2 className="text-3xl font-semibold">Registered Camps</h2>
        </div>
        <div className="mt-8 min-h-60">
      {
          registeredCamps.length < 1 && <h2 className="text-center text-2xl font-semibold my-6  text-red-500 ">You have not booked any service yet!</h2>
      }
      <div className="overflow-x-auto">
        <table className="table table-xs md:table-md lg:table-lg ">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Service Name</th>
              <th>Service Area</th>
              <th>Price</th>
              <th>Service Taker</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
            registeredCamps?.map((camp, idx) => (
              <tr
                key={camp._id}
              >
                <td>{idx + 1}</td>
                <td>{camp.campName}</td>
                <td>{camp.professionaName}</td>
                <td>${camp.fees}</td>
                <td>{}</td>
            
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
    );
};

export default RegisteredCamps;