
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import ProfileUpdateModal from "../../../../components/ProfileUpdateModal/ProfileUpdateModal";

const OrganizerProfile = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false)


  const closeModal = () => {
    setIsOpen(false)
  }

  console.log(user)
  return (
    <div className="flex flex-col items-center justify-center space-y-5 mt-16 p-4 md:w-1/2 w-full shadow-xl rounded-lg mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-5">Organizer</h2>
      <div className="avatar">
        <div data-aos="zoom-in" data-aos-duration="1000" className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={user?.photoURL} />
        </div>
      </div>
      <h2 data-aos="flip-left" data-aos-duration="1000" className="text-2xl">{user?.displayName}</h2>
      <p>{user?.email}</p>

      <button onClick={() => setIsOpen(true)} className='btn bg-[#2A9D8F] text-white'>Edit Profile</button>
      {/* modal  */}
      <ProfileUpdateModal
        isOpen={isOpen}
        closeModal={closeModal}
        user={user}
      ></ProfileUpdateModal>

      <div className='bg-slate-100 rounded-xl'><h2 className='py-2 px-4 font-semibold'>Joined at {user?.metadata?.
creationTime
}</h2></div>
    </div>
  );
};

export default OrganizerProfile;