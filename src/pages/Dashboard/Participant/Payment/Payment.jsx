import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const axiosSecure = useAxiosSecure();
    const {id} =useParams()
    const {data: camp= [], refetch }= useQuery({
      queryKey: ['camp'], 
      queryFn: async() =>{
          const res = await axiosSecure.get(`/register/${id}`);
          return res.data;
      }
  })

    return (
        <div className="mt-6 shadow-xl w-full md:w-2/3 mx-auto px-8 py-4" >
           <h2 className="text-4xl pb-6 font-semibold text-center">Payment</h2>

           <div className="space-y-1 mb-6">
                <h2>Came Name: {camp.campName}</h2>
                <h2>Professional Name: {camp.professionalName}</h2>
                <h2>Camp Fees: ${camp.fees}</h2>
           </div>
          
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm camp={camp} refetch={refetch}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;