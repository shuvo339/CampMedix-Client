import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddCamp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    const onSubmit = (data) => {
        const {campName, location, photo, date, fees, healthcareName, participant, description} = data;
        console.log(data)
      }
    return (
         <div className="card w-3/4 mx-auto shadow-2xl bg-base-100 mb-4 mt-6">
            <h2 className="text-2xl md:text-4xl font-semibold text-center">Add A Camp</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-2">

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Camp Name</span>
          </label>
          <input
            type="text"
            name="campName"
            placeholder="Please provide your camp name"
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
            placeholder="Please provide your location"
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
            placeholder="Please provide your camp photo url"
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
            placeholder="Please provide date and time"
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
            placeholder="Please provide camp fees"
            className="input input-bordered"
            {...register("fees", { required: true })}
          />
          {errors.fees && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Healthcare Name</span>
          </label>
          <input
            type="text"
            name="healthcareName"
            placeholder="Please provide health care name"
            className="input input-bordered"
            {...register("healthcareName", { required: true })}
          />
          {errors.healthcareName && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Participant Count</span>
          </label>
          <input
            type="text"
            name="participant"
            placeholder="Please provide health care name"
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
            placeholder="Please provide description"
            className="input input-bordered"
            {...register("description", { required: true })}
          />
          {errors.description && <span className="text-red-600">This field is required</span>}
        </div>
      
        <div className="form-control mt-6">
            <button className="btn text-white text-lg font-semibold bg-[#2A9D8F]">Add Camp</button>
        </div>
      </form>
      </div>
    );
};

export default AddCamp;