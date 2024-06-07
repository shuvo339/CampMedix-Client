import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import animationData from "../../../../assets/spinner.json";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import DashboardTitles from "../../../../components/DashboardTitles/DashboardTitles";

const ManageCamps = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const {data: camps = [], isPending: loading, refetch} = useQuery({
      queryKey: ['register'], 
      queryFn: async() =>{
          const res = await axiosPublic.get(`/camps?email=${user?.email}}`);
          return res.data;
      }
  })


    //   delete
    const { mutateAsync } = useMutation({
        mutationFn: async id => {
          const { data } = await axiosPublic.delete(`/camp/${id}`)
          return data
        },
        onSuccess: data => {
          console.log(data)
          refetch()
          toast.success('Successfully deleted.')
        },
      })
    

  //  Handle Delete
  const handleDelete = async id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        try {
          await mutateAsync(id)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        } catch (err) {
          console.log(err)
        }
      }
    });
  }
  if(loading){
    return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
}
    return (
        <div className="my-5">
        <DashboardTitles title={'Manage Camps'}></DashboardTitles>
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
                <td>{camp.campName}</td>
                <td>{camp.professionalName}</td>
                <td>{camp.date}</td>
                <td>${camp.fees}</td>
                <td><Link to={`/dashboard/update/${camp._id}`}><button className="btn">Update</button></Link></td>
                <td><button onClick={()=>{handleDelete(camp._id)}} className="btn">Delete</button></td>
      
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
    );
};

export default ManageCamps;