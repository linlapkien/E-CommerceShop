import { NextApiRequest, NextApiResponse } from 'next';
import { buffer } from 'stream/consumers';
import Stripe from 'stripe';

// Tutorial webhook endpoint (Stripe)
// https://dashboard.stripe.com/test/webhooks/create?endpoint_location=local

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-06-20',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const buf = await buffer(req);
  const sig = req.headersDistinct['stripe-signature'];

  if (!sig) {
    return res.status(400).send('Missing the stripe signature');
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return res.status(400).send('Webhook error' + err);
  }

  switch (event.type) {
    case 'charge.succeeded':
      const charge: any = event.data.object as Stripe.Charge;

      if (typeof charge.payment_intent == 'string') {
        await prisma?.order.update({
          where: { paymentIntentId: charge.payment_intent },
          data: { status: 'complete', address: charge.shipping?.address },
        });
      }
      break;
    default:
      console.log('Unhandled event type: ' + event.type);
  }

  res.json({ received: true });
}
