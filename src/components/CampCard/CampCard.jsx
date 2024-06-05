import { Link } from "react-router-dom";

const CampCard = ({camp}) => {
    const {
        _id,
        campName,
        photo,
        location,
        date,
        description,
        professionalName,
        participant,
        fees
      } = camp;
      return (
     
        <div className="relative rounded-md flex flex-col  shadow-md space-y-3 border border-opacity-70 border-[#9ACCC9]">
          <div className="border-8 border-opacity-50  border-[#DAE0E5]">
          <img className="h-80 w-full object-cover" src={photo} alt="" />
          </div>
          
        <div className="border-2 rounded-2xl py-3 px-8 space-y-4 max-w-[550px] mx-auto bg-black bg-opacity-50 absolute bottom-44 text-teal-400 right-[22%]">
            <h2 className="text-3xl font-semibold text-center">{campName}</h2>
            <div className="flex justify-between items-center">
              <h2>Fees: ${fees}</h2>
              <p className="">
            {/* <span className="opacity-85">Date & Time: </span> */}
            <span className="">{date}</span>
          </p>
            </div>
        </div>

       <div className="absolute bg-black rounded-2xl text-teal-600 font-semibold p-3 bg-opacity-60 right-3 z-10"> <h2 className="text-lg">Participants: <span className="font-bold text-teal-400">{participant}</span></h2></div>
     
        <div className="space-y-2 flex flex-col px-4">
        
          <p className="opacity-95 grow mt-12">{description}</p>
          <p className="">
            <span className="opacity-85">Location: </span>
            <span className="">{location}</span>
          </p>
           
            <h2>
              <span className="opacity-85">Healthcare Professional:</span>
              <span className=" text-lg font-medium"> {professionalName}</span>
            </h2>
           <Link to={`/details/${_id}`}><button className="btn bg-[#2A9D8F] w-full mt-3">View Details</button></Link>
        </div>
         
        </div>
    );
};

export default CampCard;