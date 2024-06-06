import { Link } from "react-router-dom";

const CampCard = ({camp, colNum}) => {
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
          
        {/* <div className={`border-2 rounded-2xl border-teal-400 py-4 px-3  space-y-4 w-[70%] mx-auto bg-black bg-opacity-60 absolute bottom-72 md:bottom-64 right-[15%] text-teal-400`}> */}
        <div className={`border-2 rounded-2xl border-teal-400 py-4 px-3  space-y-4 bg-black bg-opacity-60 absolute text-teal-400 bottom-72 ${colNum === 3 && "w-[100%] md:bottom-80 right-0"} w-[100%] right-0 md:w-[70%] md:bottom-64 md:right-[15%]`}>
            <h2 className="text-2xl font-semibold text-center">{campName}</h2>
            <div className="flex flex-col md:flex-row font-semibold justify-between items-center">
              <p className="">
            <span className="">{date}</span>
          </p>
              <h2>Fees: <span className="text-lg">${fees}</span></h2>
            </div>
        </div>

       <div className="absolute bg-black rounded-2xl text-teal-600 font-semibold p-3 bg-opacity-60 right-3 z-10"> <h2 className="text-lg">Participants: <span className="font-bold text-teal-400">{participant}</span></h2></div>
     
        <div className="space-y-1 flex flex-col px-4">
        
          <p className="opacity-95 h-auto grow mt-16 mb-4 indent-8 text-justify">{`${description.slice(0,250)} . . .`}</p>
           
          <p className="">
            <span className="opacity-85">Location: </span>
            <span className="font-semibold">{location}</span>
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