import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
import { Fragment } from 'react'
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const JoinCampModal = ({ closeModal, isOpen, camp }) => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const navigate = useNavigate()
    const {
        _id,
        campName,
        location,
        fees,
        date,
        professionalName,
    } = camp;
 const handleSubmit=e=>{
    e.preventDefault();
    const form = e.target;
    const age = form.age.value;
    const phone = form.phone.value;
    const gender = form.gender.value;
    const emergency = form.emergency.value;
    const registrationData = {
        campName,
        location,
        fees,
        professionalName,
        participantName: user?.displayName,
        participantEmail: user?.email,
        age,
        phone,
        date,
        gender,
        emergency,
        status: 'Pending',
        paymentStatus: 'Unpaid'
    }
    axiosPublic.post('/register', registrationData)
    .then(data=>{
        if(data.data.insertedId){
          toast.success('Registration completed successfully')
          navigate('/dashboard/registered-camp')
        form.reset();
        }
    })

    // axiosPublic.patch(`/participant/${_id}`)
    // .then(data=>{
    //     if(data.data.modifiedCout>0){
    //       navigate('/dashboard/registered-camps')
    //     }
    // })

    console.log(registrationData);

 }
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <DialogTitle
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Join Now
                                </DialogTitle>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        {campName}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Location: {location}
                                    </p>
                                </div>


                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Fees: ${fees}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Healthcare Professional: {professionalName}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Participant Name: {user?.displayName}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Participant Email: {user?.email}
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">Age</span>
                                            </label>
                                            <input
                                                type="number"
                                                name="age"
                                                required
                                                placeholder="Provide your age"
                                                className="input input-bordered"
                                            />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">Phone Number</span>
                                            </label>
                                            <input
                                                type="number"
                                                name="phone"
                                                required
                                                placeholder="Provide your phone number"
                                                className="input input-bordered"
                                            />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">Emergency Contact</span>
                                            </label>
                                            <input
                                                type="number"
                                                required
                                                name="emergency"
                                                placeholder="Emergency contact"
                                                className="input input-bordered"
                                            />
                                        </div>
                                        <div className="">
                                            <label className="label">
                                                <span className="label-text font-bold">Gender</span>
                                            </label>
                                            <input type="radio" name="gender" value="male"/> Male <br />
                                            <input type="radio" name="gender" value="female"/> Female
                                        </div>
                                      
                                    </div>
                          


                                <hr className='mt-8' />
                                <div className='flex mt-2 justify-around'>
                                    <input
                                       
                                        type='submit' value="Join"
                                        className='inline-flex justify-center rounded-md border border-transparent bg-[#2A9D8F] px-6 py-2 text-sm font-medium hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                                    >
                                      
                                    </input>
                                    <button
                                        type='button'
                                        className='inline-flex justify-center rounded-md border border-transparent bg-red-300 px-4 py-2 text-sm font-medium  hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2A9D8F] focus-visible:ring-offset-2'
                                        onClick={closeModal}
                                    >
                                        Cancel
                                    </button>
                                </div>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default JoinCampModal;