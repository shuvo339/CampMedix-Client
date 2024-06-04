import { useQuery } from "@tanstack/react-query";
import {  useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import JoinCampModal from "../../components/JoinCampModal/JoinCampModal";

const CampDetails = () => {
    const {id} = useParams();
    const axiosPublic = useAxiosPublic();
    const [isOpen, setIsOpen] = useState(false)

    const {data: camp = [], isPending: loading} = useQuery({
      queryKey: ['camp'], 
      queryFn: async() =>{
          const res = await axiosPublic.get(`/camp/${id}`);
          return res.data;
      }
  })

  const closeModal = () => {
    setIsOpen(false)
  }


  const {
    campName,
    photo,
    location,
    date,
    fees,
    description,
    professionalName,
    participant,
  } = camp;
    return (
        <div className="my-10">
     
        <div className="flex flex-col md:flex-row-reverse gap-3 md:gap-12 shadow-lg rounded-lg p-2 md:p-6 my-10 bg-blue-50">
      <img
        className="rounded-tl-[100px] md:w-1/2 h-80 rounded-br-[50px] border-4"
        src={photo}
        alt=""
      />
      <div className="space-y-3 flex flex-col md:w-1/2">
        <h2 className="text-3xl font-semibold">{campName}</h2>
        <p className="opacity-95 grow">{description}</p>
        <div className="flex gap-12">
          <p className="text-lg">
            <span className="opacity-85">Camp Fees: </span>
            <span className="font-semibold">${fees}</span>
          </p>
          <p className="text-lg">
            <span className="opacity-85">Location: </span>
            <span className="font-semibold">{location}</span>
          </p>
        </div>
        <h2 className=" text-xl font-semibold">Date & Time: {date}</h2>
        <h2 className=" text-xl font-semibold">Total Participants: {participant}</h2>
          <h2>
            <span className="opacity-85">Healthcare Professional Name:</span>
            <span className=" text-xl font-semibold">{professionalName}</span>
          </h2>
     
      {/* modal button  */}
        <button onClick={() =>setIsOpen(true)} className="btn bg-[#2A9D8F] w-full mt-3">Join Camp</button>
     {/* modal  */}
     <JoinCampModal
     isOpen={isOpen}
     closeModal={closeModal}
     camp={camp}
     ></JoinCampModal>
          
      </div>
    </div>
    </div>
    );
};

export default CampDetails;