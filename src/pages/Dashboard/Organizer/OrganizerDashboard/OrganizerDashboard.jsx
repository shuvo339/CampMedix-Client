import { FaHouseMedicalCircleExclamation } from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import { MdHomeWork } from 'react-icons/md'

import { FaUserCog } from "react-icons/fa";
const OrganizerDashboard = () => {
    return (
        <div className="space-y-2">
            {/* Profile  */}
            <NavLink
                  to='organizer-profile'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg scale-105 hover:bg-[#DAE0E5]   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-[#264653]'
                    }`
                  }
                >
                  <FaUserCog className='w-5 h-5' />
  
                  <span className='mx-4 font-medium'>Organizer Profile</span>
                </NavLink>
  
                {/* Add Camp */}
                <NavLink
                  to='add-camp'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg scale-105 hover:bg-[#DAE0E5]   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-[#264653]'
                    }`
                  }
                >
                  <FaClinicMedical className='w-5 h-5' />
  
                  <span className='mx-4 font-medium'>Add A Camp</span>
                </NavLink>
                {/* Manage camps */}
                <NavLink
                  to='manage-camp'
                  className={({ isActive }) =>
                  `flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg scale-105 hover:bg-[#DAE0E5]   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-[#264653]'
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
                  `flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg scale-105 hover:bg-[#DAE0E5]   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-[#264653]'
                  }`
                  }
                >
                  <FaHouseMedicalCircleExclamation className='w-7 h-7' />
  
                  <span className='mx-4 font-medium'>Manage Registerted Camps</span>
                </NavLink>
        </div>
    );
};

export default OrganizerDashboard;