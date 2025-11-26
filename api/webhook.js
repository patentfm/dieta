import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Disable body parsing, need raw body for webhook verification
export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    // Extract metadata
    const { deficiencies, userPreferences, sessionId } = session.metadata;
    
    console.log('Payment successful for session:', sessionId);
    console.log('Deficiencies:', deficiencies);
    
    // Here you would typically:
    // 1. Store the payment info in a database
    // 2. Trigger diet generation
    // 3. Send email with diet plan
    
    // For now, we'll store in a simple way that frontend can check
    // In production, use a database like Vercel KV, Supabase, or Firebase
  }

  res.status(200).json({ received: true });
}

