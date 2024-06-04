import { useQuery } from "@tanstack/react-query";
import DashboardTitles from "../../../../components/DashboardTitles/DashboardTitles";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAuth from './../../../../hooks/useAuth';
import { Link } from "react-router-dom";

const ManageRegCamps = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const {data: camps = [], isPending: loading} = useQuery({
      queryKey: ['camps'], 
      queryFn: async() =>{
          const res = await axiosPublic.get(`/register?email=${user?.email}`);
          return res.data;
      }
  })
    return (
        <div className="my-8">
            <DashboardTitles title={'Manage Registered Camps'}></DashboardTitles>
            <div className="mt-8 min-h-60">
      {
          camps.length < 1 && <h2 className="text-center text-2xl font-semibold my-6  text-red-500 ">You have not added any camp yet!</h2>
      }
      <div className="overflow-x-auto">
        <table className="table table-xs md:table-md lg:table-md overflow-x-auto">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Participant Name</th>
              <th>Camp Name</th>
              <th>Professional Name</th>
              <th>Date & Time</th>
              <th>Camp Fees</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
            camps?.map((camp, idx) => (
              <tr
                key={camp._id}
              >
                <td>{idx + 1}</td>
                <td>{camp.participantName}</td>
                <td>{camp.campName}</td>
                <td>{camp.professionalName}</td>
                <td>{camp.date}</td>
                <td>${camp.fees}</td>
                <td><Link to={`/dashboard/update/${camp._id}`}><button className="btn">Update</button></Link></td>
                <td><button className="btn">Delete</button></td>
      
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
            
        </div>
    );
};

export default ManageRegCamps;