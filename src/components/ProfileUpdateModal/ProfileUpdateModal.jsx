import { useForm } from "react-hook-form";
import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
import { Fragment } from 'react'

import toast from 'react-hot-toast';
import useAuth from "../../hooks/useAuth";


const ProfileUpdateModal = ({ closeModal, isOpen }) => {
    const { profileUpdate, user } = useAuth();
    console.log(user);
const {
    register,
    handleSubmit,
} = useForm();
const onSubmit = (data) => {
    let { name, photo } = data;
    if (name === '') {
        name = `${user?.displayName}`
    }
    if (photo === '') {
        photo = `${user?.photoURL}`
    }
    profileUpdate(name, photo)
        .then(() => {
            toast.success("Profile updated successfully")
        })

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
                                    Update Profile
                                </DialogTitle>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Name: {user?.displayName}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Email: {user?.email}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Photo Url: {user?.photoURL}
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-2">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Please provide your new name"
                                            className="input input-bordered"
                                            {...register("name")}
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Photo URL</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="photo"
                                            placeholder="Please provide your new photo url"
                                            className="input input-bordered"
                                            {...register("photo")}
                                        />
                                    </div>
                                  <button className="btn bg-[#2A9D8F] text-white">Save the Changes</button>
                                </form>


                                <hr className='mt-1' />
                                
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ProfileUpdateModal;