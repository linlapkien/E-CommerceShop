'use client';

import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Button from '../components/Button';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

const CheckoutClient = () => {
  const { cartProducts, paymentIntent, handleSetPaymentIntent } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const router = useRouter();

  console.log('cartProducts: ', cartProducts);
  console.log('paymentIntent: ', paymentIntent);
  console.log('clientSecret: ', clientSecret);

  useEffect(() => {
    //create a paymentIntent as soon as the page loads
    if (cartProducts) {
      setLoading(true);
      setError(false);
      toast.error('Step 0');

      // Perform fetch /api/create-payment-intent
      fetch('/api/create-payment-intent', {
        // make req POST
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        // If we dont have payment-intent, we create and return it. If we have payment-intent, we update and return it
        body: JSON.stringify({
          items: cartProducts,
          payment_intent_id: paymentIntent,
        }),
      })
        .then((res) => {
          console.log(res);
          toast.error('Step 1');
          setLoading(false);
          // if response is error: unauthorized, push user to login
          if (res.status == 401) {
            return router.push('/login');
          }

          // return req we get from the above api
          return res.json();
        })
        .then((data) => {
          toast.error('Step 2');
          // get paymentIntent.client_secret,
          setClientSecret(data.paymentIntent.client_secret);
          // set paymentIntent or update it
          handleSetPaymentIntent(data.paymentIntent.id);
        })
        .catch((error) => {
          setError(true);
          console.log('Error: ', error);
          toast.error('Something went wrong');
        });
    }
  }, [cartProducts, paymentIntent]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'stripe',
      labels: 'floating',
    },
  };

  const handleSetPaymentSuccess = useCallback((value: boolean) => {
    setPaymentSuccess(value);
  }, []);

  return (
    <div className="w-full">
      {clientSecret && cartProducts && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm
            clientSecret={clientSecret}
            handleSetPaymentSuccess={handleSetPaymentSuccess}
          />
        </Elements>
      )}
      {/* payment is loading */}
      {loading && <div className="text-center">Loading Checkout . . .</div>}
      {/* error */}
      {error && (
        <div className="text-center text-rose-500">
          Something went wrong . . .
        </div>
      )}
      {/* payment is success */}
      {paymentSuccess && (
        <div className="flex items-center flex flex-col gap-4">
          <div className="text-teal-500 text-center">Payment Success</div>
          <div className="max-w-[220px] w-full">
            <Button
              label="View Your Orders"
              onClick={() => router.push('/order')}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutClient;
