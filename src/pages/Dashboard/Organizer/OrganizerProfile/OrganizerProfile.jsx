import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const OrganizerProfile = () => {
        const {user} = useAuth();
        console.log(user)
        return (
          <div className="flex flex-col items-center justify-center space-y-3 mt-10">
                 
            <div className="avatar">
              <div data-aos="zoom-in" data-aos-duration="1000" className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
              <h2 data-aos="flip-left" data-aos-duration="1000" className="text-3xl">{user?.displayName}</h2>
              <p>{user?.email}</p>
      
              <Link to='/update'><button className='btn bg-[#7E5E60] text-white'>Edit Profile</button></Link>
              <div className='bg-slate-100 rounded-xl'><h2 className='py-2 px-4 font-semibold'>Joined at March, 2024</h2></div>
          </div>
    );
};

export default OrganizerProfile;