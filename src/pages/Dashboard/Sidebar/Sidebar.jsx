import { useState } from 'react'
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlineBars } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import logo from '../../../assets/logo.svg'
import OrganizerDashboard from '../Organizer/OrganizerDashboard/OrganizerDashboard'
import { IoHome } from "react-icons/io5";
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import ParticipantDashboard from '../Participant/ParticipantDashboard/ParticipantDashboard';


const Sidebar = () => {
    const { logOut } = useAuth()
    const [isActive, setActive] = useState(false)
    const axiosPublic = useAxiosPublic();

    const {data: users = [], isPending: loading} = useQuery({
      queryKey: ['users'], 
      queryFn: async() =>{
          const res = await axiosPublic.get(`/users`);
          return res.data;
      }
  })
    // Sidebar Responsive Handler
    const handleToggle = () => {
      setActive(!isActive)
    }
    return (
      <>
        {/* Small Screen Navbar */}
        <div className='bg-[#DAE0E5] text-slate-700 flex justify-between md:hidden'>
          <div>
            <div className='block cursor-pointer p-4 font-bold'>
              <Link to='/'>
                <img
                  // className='hidden md:block'
                  className='w-36'
                  src={logo}
                  alt='logo'
                  width='100'
                  height='100'
                />
              </Link>
            </div>
          </div>
  
          <button
            onClick={handleToggle}
            className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
          >
            <AiOutlineBars className='h-5 w-5' />
          </button>
        </div>
  
        {/* Sidebar */}
        <div
          className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
            isActive && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
          <div>
            <div>
              <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
                <Link to='/'>
                  <img
                    // className='hidden md:block'
                    className='w-36'
                    src={logo}
                    alt='logo'
                    width='100'
                    height='100'
                  />
                </Link>
              </div>
            </div>
  
            {/* Nav Items */}
            <div className='flex flex-col justify-between flex-1 mt-6'>
              {/* Conditional toggle button here.. */}
  
              {/*  Menu Items */}
              <nav>
                {/* organizer  */}
                {
                  users?.role==='organizer' ?   <OrganizerDashboard></OrganizerDashboard> : <ParticipantDashboard></ParticipantDashboard>
                }
              
              </nav>
            </div>
          </div>
  
          <div>
            <hr />


            <Link to='/'>
         <button
              className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 rounded-lg hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
            >
              <IoHome className='w-5 h-5' />
  
              <span className='mx-4 font-medium'>Go Back Home</span>
            </button>
         </Link>

  
            {/* logout */}
         <Link to='/'>
         <button
              onClick={logOut}
              className='flex w-full items-center px-4 py-2 mt-3 text-gray-600 rounded-lg hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
            >
              <RiLogoutBoxRLine className='w-5 h-5' />
  
              <span className='mx-4 font-medium'>Logout</span>
            </button>
         </Link>
          </div>
        </div>
        </>
    );
};

export default Sidebar;