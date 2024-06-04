import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from './../../../../hooks/useAxiosPublic';
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Feedback = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  const { data: camp = []} = useQuery({
    queryKey: ['camp'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/register/${id}`);
      return res.data;
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = user.displayName;
    const userPic = user.photoURL;
    const campName = camp.campName;
    const professionalName = camp.professionalName;
    const overallRating = form.overallRating.value;
    const quality = form.quality.value;
    const professionalism = form.professionalism.value;
    const facilities = form.facilities.value;
    const process = form.process.value;
    const wait = form.wait.value;
    const opinion = form.opinion.value;
    const feedback = {
      userName,
      userPic,
      campName,
      professionalName,
      overallRating,
      quality,
      professionalism,
      facilities,
      process,
      wait,
      opinion,
    };
    console.log(feedback);
    axiosPublic.post("/feedback", feedback).then((data) => {
      if (data.data.insertedId) {
        toast.success("Your feedback has been posted");
      }
      form.reset();
    });
  };

  return (
    <div className="mt-6 shadow-xl w-full md:w-2/3 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Your Feedback</h2>

      {/* write reviews  */}
      <div className="p-4">
        <form onSubmit={handleSubmit}>
       
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-3">
          <div className='mt-2'>
              <p className=''>
                <span className="text-lg ">Camp Name:</span> <br />
                <span className="text-gray-600 bg-slate-100 border px-8 py-2 block mt-2 rounded-lg">{camp.campName}</span>
              </p>
            </div>
            <div className='mt-2'>
              <p className=''>
                <span className="text-lg ">Professional Name:</span> <br />
                <span className="text-gray-600 bg-slate-100 border px-4 py-2 block mt-2 rounded-lg">{camp.professionalName}</span>
              </p>
            </div>
            <div className="border p-2 rounded-lg">
              <label className="mr-4">Overall Experience:</label>
              <select name="overallRating">
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
            <div className="border p-2 rounded-lg">
              <label className="mr-4">Quality of Medical Services:</label>
              <select name="quality">
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
            <div className="border p-2 rounded-lg">
              <label className="mr-4">Staff Professionalism:</label>
              <select name="professionalism">
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
            <div className="border p-2 rounded-lg">
              <label className="mr-4">Facilities and Resources:</label>
              <select name="facilities">
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
            <div className="border p-2 rounded-lg">
              <label className="mr-4">Registration Process:</label>
              <select name="process">
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
            <div className="border p-2 rounded-lg">
              <label className="mr-4">Waiting Time:</label>
              <select name="wait">
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
          </div>
          <label className="form-control mt-5">
            <div className="label">
              <span>Your Opinion</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              name="opinion"
              placeholder="Your opinion"
            ></textarea>
          </label>
          <div className="flex justify-center mt-6">
            <input
              className="btn bg-[#2A9D85] w-1/2 font-semibold text-lg"
              type="submit"
              value="Post Your Feedback"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;