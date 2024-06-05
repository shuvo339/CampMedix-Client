import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import DashboardTitles from "../../../../components/DashboardTitles/DashboardTitles";
import Lottie from "lottie-react";
import animationData from "../../../../assets/spinner.json";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const UpdateCamps = () => {
    const {id} = useParams();
    const axiosPublic = useAxiosPublic();

    const {data: camp, isPending: loading} = useQuery({
      queryKey: ['camp', id], 
      queryFn: async() =>{
          const res = await axiosPublic.get(`/camp/${id}`);
          return res.data;
      }
  })

      const {
          register,
          handleSubmit,
          formState: { errors },
          reset
        } = useForm()
      const onSubmit = (data) => {
          axiosPublic.put(`/camp/${id}`, {data})
          .then(res=>{
              if(res.data.modifiedCount>0){
                toast.success('Camp Updated')
              }
          })
      }
      console.log(camp)
useEffect(()=>{
  if(camp){
    reset(camp)
  }
},[reset, camp])
      if(loading){
        return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
    }
      return (
           <div className="card w-3/4 mx-auto shadow-2xl bg-base-100 mb-4 mt-8">
              <DashboardTitles title={'Update Camp'}></DashboardTitles>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-2">
  
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Camp Name</span>
            </label>
            <input
              type="text"
              name="campName"
              className="input input-bordered"
              {...register("campName", { required: true })}
            />
            {errors.campName && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Location</span>
            </label>
            <input
              type="text"
              name="location"
              className="input input-bordered"
              {...register("location", { required: true })}
            />
            {errors.location && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Camp Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              className="input input-bordered"
              {...register("photo", { required: true })}
            />
            {errors.photo && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Date and Time</span>
            </label>
            <input
              type="text"
              name="date"
              className="input input-bordered"
              {...register("date", { required: true })}
            />
            {errors.date && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Camp Fees</span>
            </label>
            <input
              type="text"
              name="fees"
              className="input input-bordered"
              {...register("fees", { required: true })}
            />
            {errors.fees && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Healthcare Professional Name</span>
            </label>
            <input
              type="text"
              name="professionalName"
              className="input input-bordered"
              {...register("professionalName", { required: true })}
            />
            {errors.professionalName && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Participant Count</span>
            </label>
            <input
              type="text"
              name="participant"
              className="input input-bordered"
              {...register("participant", { required: true })}
            />
            {errors.participant && <span className="text-red-600">This field is required</span>}
          </div>
        
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Descrition</span>
            </label>
            <input
              type="text"
              name="description"
              className="input input-bordered"
              {...register("description", { required: true })}
            />
            {errors.description && <span className="text-red-600">This field is required</span>}
          </div>
        
          <div className="form-control mt-6">
              <button className="btn text-white text-lg font-semibold bg-[#2A9D8F]">Update Camp</button>
          </div>
        </form>
        </div>
    );
};

export default UpdateCamps;