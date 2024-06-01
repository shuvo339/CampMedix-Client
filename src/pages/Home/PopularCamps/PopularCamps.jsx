import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../../assets/spinner.json";
import PopularCampCard from "./PopularCampCard";
import { useQuery } from "@tanstack/react-query";
const PopularCamps = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading]=useState(true);
    const {data: camps=[]} = useQuery()
    useEffect(()=>{
        axios('https://b9-a11-eventful-soirees-server.vercel.app/services')
        .then(data=>{
            setServices(data.data)
            setLoading(false)
        })
    }, [])
    if(loading){
        return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
    }
    return (
        <div className="md:mt-24 mt-12">
            <h2 className="text-3xl md:text-5xl font-bold">Popular Services</h2>
            <h2 className="text-xl text-gray-400 font-bold pb-8">Explore Our Most Popular Service</h2>
            <div className="grid grid-cols-1 gap-6">
                {
                    camps?.slice(0,6).map(camp=><PopularCampCard key={camp._id} camp={camp}></PopularCampCard>)
                }
            </div>

            <div className="flex justify-center items-center mt-8">
                <Link to="/available-camps"><button className="btn bg-[#9ACCC9] w-full font-semibold text-lg ">See All Camps</button></Link>
            </div>
        </div>
    );
};

export default PopularCamps;