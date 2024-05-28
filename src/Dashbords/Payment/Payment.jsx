import SectionTitle from '../../Compment/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ChackOutForm from './ChackOutForm';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);
const Payment = () => {
  return (
    <div>
      <SectionTitle heading={'PAYMENT'}></SectionTitle>

      <Elements stripe={stripePromise}>
        <ChackOutForm></ChackOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
