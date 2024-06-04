import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAuth from "../../../../hooks/useAuth";
import Lottie from "lottie-react";
import animationData from "../../../../assets/spinner.json";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const RegisteredCamps = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const {data: registeredCamps = [], isPending: loading, refetch} = useQuery({
      queryKey: ['register'], 
      queryFn: async() =>{
          const res = await axiosPublic.get(`/register?email=${user?.email}`);
          return res.data;
      }
  })

  //   delete
  const { mutateAsync } = useMutation({
    mutationFn: async id => {
      const { data } = await axiosPublic.delete(`/register/${id}`)
      return data
    },
    onSuccess: data => {
      console.log(data)
      refetch()
      toast.success('Successfully deleted.')
    },
  })

  //  Handle Delete
  const handleCancel = async id => {
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
        <div className="my-8">
        <div className="h-20 bg-blue-100 flex justify-center items-center">
        <h2 className="text-3xl font-semibold">Registered Camps</h2>
        </div>
        <div className="mt-8 min-h-60">
      {
          registeredCamps.length < 1 && <h2 className="text-center text-2xl font-semibold my-6  text-red-500 ">You have not booked any service yet!</h2>
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
              <th>Payment Status</th>
              <th>Confirmation Status</th>
              <th>Cancel</th>
              <th>Feedback</th>
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
                <td>{camp.professionalName}</td>
                <td>{camp.date}</td>
                <td>${camp.fees}</td>
                <td><Link to={`/dashboard/payment/${camp._id}`}><button className="btn">Pay</button></Link></td>
                <td>{camp.status}</td>
                <td><button onClick={()=>{handleCancel(camp._id)}} className="btn">Cancel</button></td>
                <td><Link to={`/dashboard/feedback/${camp._id}`}><button className="btn">FeedBack</button></Link></td>
      
            
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