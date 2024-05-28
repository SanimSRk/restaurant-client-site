import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../Compment/Hooks/useAxiosSecure/useAxiosSecure';
import useCarts from '../../Compment/Hooks/useCart/useCarts';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const ChackOutForm = () => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCarts();
  const [clientSecret, SetClientSecret] = useState();

  const [transactionId, setTransactionId] = useState();
  const price = cart.reduce((total, item) => total + item?.price, 0);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post('/create-payment-intent', { price }).then(res => {
        SetClientSecret(res?.data?.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handileSubmit = async event => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log(' payment success', paymentMethod);
      setError('');
    }

    const { paymentIntent, confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous',
          },
        },
      }
    );

    if (confirmError) {
      console.log('confirmError is run', confirmError);
    } else {
      if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);

        const payment = {
          email: user.email,
          price: price,

          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map(item => item._id),
          menuItemIds: cart.map(items => items.menuId),
          status: 'pending',
        };

        axiosSecure.post('/payments', payment).then(res => {
          console.log(res.data.insertedId);
          if (res.data) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your payment Success fully done',
              showConfirmButton: false,
              timer: 1500,
            });
          }
          refetch();
        });
      }
    }
  };

  return (
    <div>
      <form onSubmit={handileSubmit}>
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
        ></CardElement>
        <button
          className="bg-blue-500 text-white btn"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-500 text-xl">{error}</p>

        {transactionId && (
          <p className="text-green-500">
            Your transaction id : {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default ChackOutForm;
