import { useMutation, useQuery } from "@tanstack/react-query";
import DashboardTitles from "../../../../components/DashboardTitles/DashboardTitles";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from './../../../../hooks/useAuth';
import Lottie from "lottie-react";
import animationData from "../../../../assets/spinner.json";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const ManageRegCamps = () => {
  const axiosSecure = useAxiosSecure();
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const { user } = useAuth();

  const { data: camps = [], isPending: loading, refetch } = useQuery({
    queryKey: ['camps', search, currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(`/registers-organizer?email=${user?.email}&search=${search}&page=${currentPage}&size=${itemsPerPage}`);
      return res.data;
    }
  })

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosSecure(
        `/campscount-organizer?email=${user?.email}&search=${search}`
      )

      setCount(data.count)
      setCurrentPage(1)
    }
    getCount()
  }, [search, axiosSecure])

  const numberOfPages = Math.ceil(count / itemsPerPage)
  const pages = [...Array(numberOfPages).keys()].map(p => p + 1);

  const handleSearch = e => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
    setCurrentPage(0)
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1)
    }
  }



  //cancel registered camp
  const { mutateAsync } = useMutation({
    mutationFn: async id => {
      const { data } = await axiosSecure.delete(`/register/${id}`)
      return data
    },
    onSuccess: data => {
      console.log(data)
      refetch()
      toast.success('Successfully deleted.')
    },
  })
  //  Handle Delete
  const handleCancel = async id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await mutateAsync(id)
          Swal.fire({
            title: "Deleted!",
            text: "Camp has been canceled.",
            icon: "success"
          });
        } catch (err) {
          console.log(err)
        }
      }
    });
  }

  const handleStatus = id => {
    axiosSecure.patch(`/paymentinfo/${id}`, { status: "Confirmed" })
      .then(data => {
        if (data.data.modifiedCount > 0) {
          console.log(data.data)
        }
      })

    axiosSecure.patch(`/register/${id}`, { status: "Confirmed" })
      .then(data => {
        if (data.data.modifiedCount > 0) {
          toast.success('Status hase been updated!')
          refetch();
        }
      })
  }
  if (loading) {
    return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
  }

  return (
    <div className="my-5">
      <DashboardTitles title={'Manage Registered Camps'}></DashboardTitles>
      <form onSubmit={handleSearch} className="mt-4">
        <div className="w-1/3 mb-6 mx-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" name="search" className="grow" placeholder="Search" />
            <button className="btn btn-sm px-1 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
          </label>
        </div>
      </form>
      <div className="mt-8 min-h-60">
        {
          camps.length < 1 && <h2 className="text-center text-2xl font-semibold my-6  text-red-500 ">There is no camp to be managed!</h2>
        }
        <div className="overflow-x-auto">
          <table className="table table-xs md:table-md lg:table-md overflow-x-auto  shadow-2xl">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Participant Name</th>
                <th>Camp Name</th>
                <th>Professional Name</th>
                <th>Camp Fees</th>
                <th>Payment Status</th>
                <th>Confirmation Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                camps?.map((camp, idx) => (
                  <tr
                    key={camp._id}
                  >
                    <td>{idx + 1 + (currentPage - 1) * itemsPerPage}</td>
                    <td>{camp.participantName}</td>
                    <td>{camp.campName}</td>
                    <td>{camp.professionalName}</td>
                    <td>${camp.fees}</td>
                    <td className={`${camp.paymentStatus === 'Paid' && "text-emerald-700"} ${camp.paymentStatus === 'Unpaid' && 'text-red-400'}`}>{camp.paymentStatus}</td>
                    
                    <td><button onClick={() => { handleStatus(camp._id) }} disabled={camp.paymentStatus === 'Unpaid' || camp.status === 'Confirmed'} className={`btn ${camp.status === 'Confirmed' && "!bg-[#d4edda] !text-[#155724] !border-[#c3e6cb]"} ${camp.status === 'Pending' && 'bg-[#fff3cd] text-[#856404] border-[#ffeeba]'}`}>{camp.status}</button></td>
                    
                    <td><button onClick={() => { handleCancel(camp._id) }} disabled={camp.paymentStatus === 'Paid' && camp.status === 'Confirmed'} className="btn bg-[#f9e2e3] text-[#842029] border-[#f8d7da]">Cancel</button></td>

                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <button onClick={handlePrev} className="btn mr-2 bg-slate-300 btn-sm">Prev</button>
        {
          pages.map(page => <button onClick={() => setCurrentPage(page)} className={currentPage === page ? 'bg-[#2A9D8F] btn text-white mr-2 btn-sm' : 'btn bg-gray-800 mr-2 text-white btn-sm'} key={page}>{page}</button>)
        }
        <button onClick={handleNext} className="btn ml-2 bg-slate-300 btn-sm">Next</button>
      </div>
    </div>
  );
};

export default ManageRegCamps;