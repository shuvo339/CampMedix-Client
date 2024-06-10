import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import DashboardTitles from "../../../../components/DashboardTitles/DashboardTitles";
import Lottie from "lottie-react";
import animationData from "../../../../assets/spinner.json";
import { useEffect, useState } from "react";

const PaymentHistory = () => {
    const { user } = useAuth();
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const axiosSecure = useAxiosSecure();

    const { data: payments = [], isPending: loading } = useQuery({
        queryKey: ['payments', user?.email, search, currentPage, itemsPerPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}?search=${search}&page=${currentPage}&size=${itemsPerPage}`)
            return res.data;
        }
    })

    useEffect(() => {
        const getCount = async () => {
            const { data } = await axiosSecure(
                `/campscount-payment?email=${user?.email}&search=${search}`
            )

            setCount(data.count)
            setCurrentPage(1)
        }
        getCount()
    }, [search, axiosSecure, user.email])
    console.log(count)
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


    const paymentsData = payments.map(allPayments => ({
        ...allPayments,
        date: new Date(allPayments.date).toLocaleDateString('en-GB'),
    }));

    if (loading) {
        return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
    }

    return (
        <div className="my-5">
            <DashboardTitles title='Payment History'></DashboardTitles>
            <form onSubmit={handleSearch} className="mt-4">
                <div className="w-1/3 mb-6 mx-auto">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" name="search" className="grow" placeholder="Search" />
                        <button className="btn btn-sm px-1 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
                    </label>
                </div>
            </form>
            <h2 className="text-xl text-left pl-4">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-xs md:table-md lg:table-md overflow-x-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Camp Name</th>
                            <th>Camp Fee</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                            <th>Confirmation Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentsData.map((payment, index) => <tr key={payment._id}>
                            <td>{index + 1}</td>
                            <td>{payment.campName}</td>
                            <td>${payment.fees}</td>
                            <td>{payment.transactionId}</td>
                            <td>{payment.date}</td>
                            <td className={`${payment.status === 'Pending' && "text-pink-400"} ${payment.status === 'Confirmed' && 'text-emerald-800 font-semibold'}`}>{payment.status}</td>
                        </tr>)}

                    </tbody>
                </table>
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

export default PaymentHistory;