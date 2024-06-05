import { useMutation, useQuery } from "@tanstack/react-query";
import DashboardTitles from "../../../../components/DashboardTitles/DashboardTitles";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAuth from './../../../../hooks/useAuth';
import Lottie from "lottie-react";
import animationData from "../../../../assets/spinner.json";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ManageRegCamps = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const {data: camps = [], isPending: loading, refetch} = useQuery({
      queryKey: ['camps'], 
      queryFn: async() =>{
          const res = await axiosPublic.get(`/registers?email=${user?.email}`);
          return res.data;
      }
  })

   //cancel registered camp
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
            text: "Camp has been canceled.",
            icon: "success"
          });
        } catch (err) {
          console.log(err)
        }
      }
    });
  }

  const handleStatus=id=>{
    axiosPublic.patch(`/paymentinfo/${id}`)


    axiosPublic.patch(`/register/${id}`, {status: "Confirmed"})
    .then(data=>{
      if(data.data.modifiedCount>0){
        toast.success('Status hase been updated!')
        refetch();
      }
    })
  }
  if(loading){
    return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
}

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
              <th>Camp Fees</th>
              <th>Payment Status</th>
              <th>Confirmation Status</th>
              <th>Action</th>
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
                <td>${camp.fees}</td>
                <td>{camp.paymentStatus}</td>
                <td><button onClick={()=>{handleStatus(camp._id)}} disabled={camp.paymentStatus === 'Unpaid' || camp.status === 'Confirmed'} className="btn">{camp.status}</button></td>
                <td><button onClick={()=>{handleCancel(camp._id)}} disabled={camp.paymentStatus === 'Paid' && camp.status === 'Confirmed'} className="btn">Cancel</button></td>
      
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