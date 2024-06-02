import { BsFillHouseAddFill, BsGraphUp } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { MdHomeWork } from 'react-icons/md'
const ParticipantDashboard = () => {
    return (
        <div>
         {/* Profile  */}
         <NavLink
                  to='participant-profile'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <BsGraphUp className='w-5 h-5' />
  
                  <span className='mx-4 font-medium'>Participant Profile</span>
                </NavLink>
  
                {/* Add Camp */}
                <NavLink
                  to='analytics'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <BsFillHouseAddFill className='w-5 h-5' />
  
                  <span className='mx-4 font-medium'>Analytics</span>
                </NavLink>
                {/* Manage camps */}
                <NavLink
                  to='registered-camp'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <MdHomeWork className='w-5 h-5' />
  
                  <span className='mx-4 font-medium'>Registered Camps</span>
                </NavLink>
                {/* Manage registered camps */}
                <NavLink
                  to='payment-histroy'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <MdHomeWork className='w-5 h-5' />
  
                  <span className='mx-4 font-medium'>Payment History</span>
                </NavLink>
        </div>
    );
};

export default ParticipantDashboard;