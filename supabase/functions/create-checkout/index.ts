import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Price IDs from Stripe
const SETUP_PRICE_ID = "price_1SmQCECUVmu4OLZn8JQo9bnb"; // $1,500 one-time
const MONTHLY_PRICE_ID = "price_1SmQCVCUVmu4OLZnzHzOpbjz"; // $500/month

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, businessName, industry } = await req.json();

    if (!email) {
      throw new Error("Email is required");
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Check if customer already exists
    const customers = await stripe.customers.list({ email, limit: 1 });
    let customerId: string | undefined;

    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    } else {
      // Create new customer with metadata
      const customer = await stripe.customers.create({
        email,
        metadata: {
          businessName: businessName || "",
          industry: industry || "",
        },
      });
      customerId = customer.id;
    }

    // Create checkout session with both setup fee and subscription
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      line_items: [
        {
          price: SETUP_PRICE_ID,
          quantity: 1,
        },
        {
          price: MONTHLY_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${req.headers.get("origin")}/payment-success`,
      cancel_url: `${req.headers.get("origin")}/get-started`,
      subscription_data: {
        trial_period_days: 14, // First monthly charge after 14 days
        metadata: {
          businessName: businessName || "",
          industry: industry || "",
        },
      },
      metadata: {
        businessName: businessName || "",
        industry: industry || "",
      },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Checkout error:", errorMessage);
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
