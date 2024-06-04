import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


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
        <div>
            <h2 className="text-xl text-right">Total Payments: {payments.length}</h2>
            <h2 className="text-4xl pb-6 font-semibold text-center">Payment History</h2> 
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