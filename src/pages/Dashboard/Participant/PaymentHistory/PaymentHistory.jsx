import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import DashboardTitles from "../../../../components/DashboardTitles/DashboardTitles";


const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    })
    
    const paymentsData = payments.map(allPayments => ({
        ...allPayments,
        date: new Date(allPayments.date).toLocaleDateString('en-GB'), // Format: DD/MM/YYYY
      }));

    return (
        <div className="my-5 shadow-2xl">
            <DashboardTitles title='Payment History'></DashboardTitles>
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
                            <td>{payment.status}</td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;