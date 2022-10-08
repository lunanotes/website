import stripe from './_stripe';

export async function post(req) {
  if (typeof req.body.priceId !== 'string') {
    return {
      status: 400,
      headers: {},
      body: JSON.stringify({
        error: {
          message: 'priceId is required'
        }
      })
    };
  }

  const priceId = req.body.priceId;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1
        }
      ],
      success_url: `${req.headers.origin}/thank-you?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/`
    });
    return {
      status: 200,
      headers: {},
      body: JSON.stringify({
        sessionId: session.id
      })
    };
  } catch (err) {
    return {
      status: 500,
      headers: {},
      body: JSON.stringify({
        error: err
      })
    };
  }
}