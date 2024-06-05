import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import DashboardTitles from "../../../../components/DashboardTitles/DashboardTitles";
import { useParams } from "react-router-dom";

const ModifiedCamps = () => {
    const axiosPublic = useAxiosPublic()
    const {id} = useParams()
    console.log(id);
    const {data: camp = [], isPending: loading} = useQuery({
        queryKey: ['camp'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/camp/${id}`);
            return res.data;
        }
    })
    console.log(camp);
    const handleSubmit=e=>{
        e.preventDefault();
    }

    return (
        <div className="card w-3/4 mx-auto shadow-2xl bg-base-100 mb-4 mt-8">
              <DashboardTitles title={'Update Camp'}></DashboardTitles>
        <form onSubmit={handleSubmit} className="card-body space-y-2">
  
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Camp Name</span>
            </label>
            <input
            defaultValue={camp.campName}
              type="text"
              name="campName"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Location</span>
            </label>
            <input
              type="text"
              name="location"
              defaultValue={camp.location}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Camp Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={camp.photo}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Date and Time</span>
            </label>
            <input
              type="text"
              name="date"
              defaultValue={camp.date}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Camp Fees</span>
            </label>
            <input
              type="text"
              name="fees"
              defaultValue={camp.fees}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Healthcare Professional Name</span>
            </label>
            <input
              type="text"
              name="professionalName"
              defaultValue={camp.professionalName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Participant Count</span>
            </label>
            <input
              type="text"
              name="participant"
              defaultValue={camp.participant}
              className="input input-bordered"
            />
          </div>
        
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Descrition</span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={camp.description}
              className="input input-bordered"
            />
          </div>
        
          <div className="form-control mt-6">
              <button className="btn text-white text-lg font-semibold bg-[#2A9D8F]">Update Camp</button>
          </div>
        </form>
        </div>
    );
};

export default ModifiedCamps;