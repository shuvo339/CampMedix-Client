
import { BsFillHouseAddFill, BsGraphUp } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { MdHomeWork } from 'react-icons/md'
const OrganizerDashboard = () => {
    return (
        <div>
            {/* Profile  */}
            <NavLink
                  to='organizer-profile'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <BsGraphUp className='w-5 h-5' />
  
                  <span className='mx-4 font-medium'>Organizer Profile</span>
                </NavLink>
  
                {/* Add Camp */}
                <NavLink
                  to='add-camp'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <BsFillHouseAddFill className='w-5 h-5' />
  
                  <span className='mx-4 font-medium'>Add A Camp</span>
                </NavLink>
                {/* Manage camps */}
                <NavLink
                  to='manage-camp'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <MdHomeWork className='w-5 h-5' />
  
                  <span className='mx-4 font-medium'>Manage Camps</span>
                </NavLink>
                {/* Manage registered camps */}
                <NavLink
                  to='manage-registered-camp'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <MdHomeWork className='w-5 h-5' />
  
                  <span className='mx-4 font-medium'>Manage Registerted Camps</span>
                </NavLink>
        </div>
    );
};

export default OrganizerDashboard;