import Lottie from "lottie-react";
import animationData from "../../assets/spinner.json";
import {  useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CampCard from "../../components/CampCard/CampCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AvailableCamps = () => {
    const [search, setSearch]=useState('');
    const [sort, setSort]=useState('');
    const [colNum, setColNum]=useState(2);
  

  const axiosPublic = useAxiosPublic();

  const {data: allCamps = [], isPending: loading} = useQuery({
    queryKey: ['camps', search, sort], 
    queryFn: async() =>{
        const res = await axiosPublic.get(`/camps?search=${search}&sort=${sort}`);
        return res.data;
    }
})

    const handleSearch=e=>{
      e.preventDefault()
        const text= e.target.search.value;
        setSearch(text);
    }

    const handleLayout=e=>{
        setColNum(parseInt(e.target.value));
    }
    const handleSort=e=>{
        setSort(e.target.value);
    }
    if(loading){
        return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
    }
    
    return (
        <div className="my-10 max-w-6xl mx-auto px-2 min-h-[calc(100vh-318px)]">
          <div className="flex flex-col md:flex-row  gap-4 md:gap-20  justify-around mb-6">
            {/* sort  */}
          
            <select onChange={handleSort} className="w-full lg:w-72 select select-bordered" name="sort">
                <option value="sort" disabled selected>Sort</option>
                <option value="fees">Camp Fees</option>
                <option value="participant">Most Registered</option>
                <option value="campName">Alphabetical</option>
            </select>
     
            {/* search  */}
            <form onSubmit={handleSearch}>
            <div className="mx-auto">
                <label className="input input-bordered flex items-center gap-2">
                <input type="text" name="search" className="" placeholder="Search" />
                <button className="btn btn-sm px-1 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
                </label>
            </div>
            </form>

            {/* layout  */}
            <select onChange={handleLayout} className="hidden lg:block w-72 select select-bordered" name="Layout" id="">
                <option disabled selected>Layout</option>
                <option value='2'>2 coulmn</option>
                <option value='3'>3 coulmn</option>
            </select>
          </div>

            <div className={`grid grid-cols-1 gap-6  ${colNum === 2 && "lg:grid-cols-2"} 
            ${colNum === 3 && "lg:grid-cols-3"}`}>
                {
                     allCamps?.map(camp=><CampCard key={camp._id} colNum={colNum} camp={camp}></CampCard>)
                }
            </div>
        </div>
    );
};

export default AvailableCamps;