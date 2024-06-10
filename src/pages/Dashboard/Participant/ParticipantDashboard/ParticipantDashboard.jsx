import { FaChartArea } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { MdHomeWork } from 'react-icons/md'
import { FaUserCog } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdMedicalInformation } from "react-icons/md";

const ParticipantDashboard = () => {
    return (
        <div className='space-y-3'>
         {/* Profile  */}
         <NavLink
                  to='participant-info'
                  className={({ isActive }) =>
                  `flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg scale-105 hover:bg-[#DAE0E5]   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-[#264653]'
                  }`
                  }
                >
                  <MdMedicalInformation className='w-5 h-5' />
  
                  <span className='mx-4 font-medium'>Participant Info</span>
                </NavLink>
         <NavLink
                  to='/dashboard/participant-profile'
                  className={({ isActive }) =>
                  `flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg scale-105 hover:bg-[#DAE0E5]   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-[#264653]'
                  }`
                  }
                >
                  <FaUserCog className='w-5 h-5' />
  
                  <span className='mx-4 font-medium'>Participant Profile</span>
                </NavLink>
  
                {/* Analytics */}
                <NavLink
                  to='/dashboard/analytics'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg scale-105 hover:bg-[#DAE0E5]   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-[#264653]'
                    }`
                  }
                >
                  <FaChartArea className='w-5 h-5' />
  
                  <span className='mx-4 font-medium'>Analytics</span>
                </NavLink>
                {/* registered camps */}
                <NavLink
                  to='/dashboard/registered-camp'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg scale-105 hover:bg-[#DAE0E5]   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-[#264653]'
                    }`
                  }
                >
                  <MdHomeWork className='w-5 h-5' />
  
                  <span className='mx-4 font-medium'>Registered Camps</span>
                </NavLink>
                {/* Payment history */}
                <NavLink
                  to='/dashboard/payment-history'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg scale-105 hover:bg-[#DAE0E5]   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-[#264653]'
                    }`
                  }
                >
                  <FaFileInvoiceDollar className='w-5 h-5' />
  
                  <span className='mx-4 font-medium'>Payment History</span>
                </NavLink>
        </div>
    );
};

export default ParticipantDashboard;