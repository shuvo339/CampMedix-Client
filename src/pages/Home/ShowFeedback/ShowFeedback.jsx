import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineRateReview } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const ShowFeedback = () => {
    const axiosPublic = useAxiosPublic();

    const {data: feedbacks = [] }= useQuery({
      queryKey: ['feedbacks'], 
      queryFn: async() =>{
          const res = await axiosPublic.get(`/feedback`);
          return res.data;
      }
  })
    return (
        <div className="md:mt-24 mt-12">
          <SectionTitle title={'Feedback and Ratings'} subTitle={'What Our Users Say'}></SectionTitle>
     
      <div className=" gap-8">
        {/* show Reviews  */}
        <div className=" p-3">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper relative">
          <p className="text-md font-semibold p-2 rounded-lg absolute top-0 right-10 z-10">
              Total Reviews: {feedbacks.length}
            </p>
            {feedbacks.map((feedback) => (
              <SwiperSlide key={feedback._id}>
                <div className="flex md:flex-row gap-2 md:gap-16 justify-center flex-col items-center rounded-lg py-12 mx-2 md:mx-6 bg-stone-100 space-y-2 shadow-lg">
                <div className="space-y-3 text-center max-w-80">
               <div className="opacity-85 text-center pb-6">
               
               <p className="max-w-[300px] text-justify"><MdOutlineRateReview className="text-2xl "/> {feedback.opinion}</p>
               </div>
                      <div className="flex justify-center items-center gap-4">
                      <img className="!size-16 border-4 rounded-full !object-contain" src={feedback.userPic} alt="" />
                        <h2 className="font-bold">{feedback.userName}</h2>
                      </div>
                  </div>
                  {/* review  */}
                 <div className="">
                
                  <h2 className="text-lg font-semibold text-center">
                    Camp: {feedback.campName}
                  </h2>
                  <h2 className="text-lg font-semibold text-center">
                  Professional: {feedback.professionalName}
                  </h2>
                  
                  <div className="flex gap-4 justify-center py-2">
                    <Rating
                      className="text-blue-300"
                      style={{ maxWidth: 140 }}
                      value={feedback.overallRating}
                      readOnly
                    />
                    <div className="text-2xl font-semibold flex items-center">
                      {feedback.overallRating > 4
                        ? "Excellent"
                        : feedback.overallRating > 3
                        ? "Good"
                        : "Poor"}
                    </div>
                  </div>
                  <div>
                    <p className="text-center md:text-right">
                      <span className="pr-1 md:pr-3">Medical Service's Quality:</span>
                      <progress
                        className="progress progress-info w-56"
                        value={feedback.quality}
                        max="5"
                      ></progress>
                    </p>
                    <p className="text-center md:text-right">
                      <span className="pr-1 md:pr-3">Staff Professionalism:</span>
                      <progress
                        className="progress progress-info w-56"
                        value={feedback.professionalism}
                        max="5"
                      ></progress>
                    </p>
                    <p className="text-center md:text-right">
                      <span className="pr-1 md:pr-3">Facilities and Resources:</span>
                      <progress
                        className="progress progress-info w-56"
                        value={feedback.facilities}
                        max="5"
                      ></progress>
                    </p>
                    <p className="text-center md:text-right">
                      <span className="pr-1 md:pr-3">Registration Process:</span>
                      <progress
                        className="progress progress-info w-56"
                        value={feedback.process}
                        max="5"
                      ></progress>
                    </p>
                    <p className="text-center md:text-right">
                      <span className="pr-1 md:pr-3">Avgerage Waiting Time:</span>
                      <progress
                        className="progress progress-info w-56"
                        value={feedback.wait}
                        max="5"
                      ></progress>
                    </p>
                  </div>
                 </div>
                 
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
    );
};

export default ShowFeedback;