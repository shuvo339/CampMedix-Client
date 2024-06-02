import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
import { Fragment } from 'react'
import useAuth from '../../hooks/useAuth';
const JoinCampModal = ({ closeModal, isOpen, camp }) => {
    const { user } = useAuth();
    const {
        campName,
        location,
        date,
        fees,
        description,
        professionalName,
        participant,
    } = camp;
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

                                <form>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">Age</span>
                                            </label>
                                            <input
                                                type="number"
                                                name="age"
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
                                </form>


                                <hr className='mt-8' />
                                <div className='flex mt-2 justify-around'>
                                    <button
                                        onClick={() => {
                                            //   handleJoin
                                            closeModal()
                                        }}
                                        type='button'
                                        className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                                    >
                                        Join
                                    </button>
                                    <button
                                        type='button'
                                        className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                                        onClick={closeModal}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default JoinCampModal;