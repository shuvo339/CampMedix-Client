import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from './../../../../hooks/useAxiosPublic';

const Feedback = () => {
    const { user } = useAuth();
    const axiosPublic= useAxiosPublic();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = user.displayName;
    const userPic = user.photoURL;
    const eventName = form.eventName.value;
    const providerName = form.providerName.value;
    const overallRating = form.overallRating.value;
    const quality = form.quality.value;
    const professionalism = form.professionalism.value;
    const creativity = form.creativity.value;
    const attitude = form.attitude.value;
    const coordination = form.coordination.value;
    const opinion = form.opinion.value;
    const feedback = {
      userName,
      userPic,
      eventName,
      providerName,
      overallRating,
      quality,
      professionalism,
      creativity,
      attitude,
      coordination,
      opinion,
    };
    axiosPublic.post("/feedback", feedback).then((data) => {
      if (data.data.insertedId) {
        toast.success("Your feedback has been posted");
      }
      form.reset();
    });
  };

  return (
    <div className="mt-10 shadow-xl w-full md:w-2/3 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Your Feedback</h2>

        {/* write reviews  */}
        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <div className="flex md:flex-row flex-col gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="text-lg">Event Name</span>
                </label>
                <input
                  type="text"
                  name="eventName"
                  placeholder="Event name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="text-lg">Service Provider Name</span>
                </label>
                <input
                  type="text"
                  name="providerName"
                  placeholder="Service provider name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-6">
              <div className="border p-2 rounded-lg">
                <label>Overall Rating:</label>
                <select name="overallRating">
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>
              <div>
                <label>Quality of Service:</label>
                <select name="quality">
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>
              <div>
                <label>Professionalism:</label>
                <select name="professionalism">
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>
              <div>
                <label>Creativity:</label>
                <select name="creativity">
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>
              <div>
                <label>Behavior:</label>
                <select name="attitude">
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>
              <div>
                <label>Coordination:</label>
                <select name="coordination">
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