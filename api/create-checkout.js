import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { deficiencies, userPreferences, sessionId } = req.body;

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'blik', 'p24'],
      line_items: [
        {
          price_data: {
            currency: 'pln',
            product_data: {
              name: 'Tygodniowy Plan Żywieniowy',
              description: 'Spersonalizowana dieta na 7 dni z przepisami i listą zakupów',
              images: ['https://your-domain.com/diet-plan-image.png'],
            },
            unit_amount: 1000, // 10.00 PLN in grosze
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/dieta-sukces?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/wyniki`,
      metadata: {
        deficiencies: JSON.stringify(deficiencies),
        userPreferences: JSON.stringify(userPreferences),
        sessionId: sessionId,
      },
    });

    res.status(200).json({ 
      checkoutUrl: session.url,
      sessionId: session.id 
    });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
}

