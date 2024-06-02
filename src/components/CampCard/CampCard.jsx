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
      } = camp;
      return (
     
        <div className=" rounded-md flex flex-col  shadow-md space-y-3 border border-opacity-70 border-[#9ACCC9]">
          <div className=" border-8 border-opacity-50 border-[#DAE0E5]">
          <img className="h-80 w-full object-cover" src={photo} alt="" />
          </div>
          
        
     
        <div className="space-y-2 flex flex-col px-4 ">
        <h2 className="text-3xl font-semibold">{campName}</h2>
          <p className="opacity-95 grow">{description}</p>
         {/* <p className="text-lg">
            <span className="opacity-85">Participants: </span>
            <span className="font-semibold">{participant}</span>
          </p> */}
          <p className="">
            <span className="opacity-85">Location: </span>
            <span className="">{location}</span>
          </p>

          <h2 className="text-lg">Date & Time: {date}</h2>
        
      
        <h2 className="text-lg">Total Participants: {participant}</h2>
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