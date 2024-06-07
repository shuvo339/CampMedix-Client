import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import './CheckoutForm.css'
import toast from "react-hot-toast";

const CheckoutForm = ({camp, refetch}) => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
            axiosSecure.post('/create-payment-intent', { price: camp.fees})
                .then(res => {
                  
                    setClientSecret(res.data.clientSecret);
                })

    }, [axiosSecure, camp.fees])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
             
                setTransactionId(paymentIntent.id);

                //change payment status
                const result = await axiosSecure.patch(`/register/${camp._id}`, {paymentStatus: "Paid"});
                
                // now save the payment in the database
                const payment = {
                    email: user.email,
                    campName: camp.campName,
                    fees: camp.fees,
                    transactionId: paymentIntent.id,
                    date: new Date(), 
                    campId: camp._id,
                    status: 'pending',
                    registerId: camp._id
                }

                const res = await axiosSecure.post('/payments', payment)
                
                // console.log('payment saved', res.data);
                refetch();
                console.log(res.data);
                if (res.data?.insertedId) {
                   toast.success('Successful Payment')
                    navigate('/dashboard/payment-history')
                }

            }
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
           <div className="flex justify-center items-center">
           <button className="btn bg-[#2A9D8F] mt-8 mb-3 w-1/2  m-auto text-md" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
           </div>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-[#2A9D8F]"> Your transaction id: {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;