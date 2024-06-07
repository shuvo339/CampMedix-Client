
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../../assets/spinner.json";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import CampCard from "../../../components/CampCard/CampCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const PopularCamps = () => {
    const axiosPublic = useAxiosPublic();

    const {data: popularCamps = [], isPending: loading} = useQuery({
      queryKey: ['popularCamps'], 
      queryFn: async() =>{
          const res = await axiosPublic.get(`/popular-camps`);
          return res.data;
      }
  })
    if(loading){
        return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
    }
    return (
        <div className="md:mt-20 mt-8">
            <SectionTitle title={'Popular Services'} subTitle={'Explore Our Most Popular Service'}></SectionTitle>
           
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    popularCamps?.slice(0,6).map(camp=><CampCard key={camp._id} camp={camp}></CampCard>)
                }
            </div>

            <div className="flex justify-center items-center mt-8">
                <Link to="/available-camps"><button className="btn bg-[#2A9D8F] w-full font-semibold text-lg ">See All Camps</button></Link>
            </div>
        </div>
    );
};

export default PopularCamps;