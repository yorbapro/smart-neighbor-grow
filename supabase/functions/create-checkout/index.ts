import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Product Price IDs from Stripe
const PRICE_IDS = {
  localLift: {
    setup: "price_1SrM2NCUVmu4OLZneWNhhb7K", // $1,500 one-time
    monthly: "price_1Sxt2ACUVmu4OLZn801dJhrz", // $299/month
  },
  leadLine: {
    setup: "price_1SxsJSCUVmu4OLZnt5E5JP3o", // $1,500 one-time
    monthly: "price_1SxsKaCUVmu4OLZnAWqwpSn9", // $399/month
  },
  launchPad360: {
    setup: "price_1SmQCECUVmu4OLZn8JQo9bnb", // $1,500 one-time
    monthly: "price_1SmQCVCUVmu4OLZnzHzOpbjz", // $500/month
  },
};

type ProductTier = "localLift" | "leadLine" | "launchPad360";

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CREATE-CHECKOUT] ${step}${detailsStr}`);
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, businessName, industry, product = "launchPad360" } = await req.json();
    logStep("Request received", { email, businessName, industry, product });

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

    // Get the correct price IDs for the selected product
    const productTier = product as ProductTier;
    if (!PRICE_IDS[productTier]) {
      throw new Error(`Invalid product tier: ${product}`);
    }
    
    const { setup: setupPriceId, monthly: monthlyPriceId } = PRICE_IDS[productTier];
    logStep("Using price IDs", { setupPriceId, monthlyPriceId, productTier });

    // Create checkout session with both setup fee and subscription
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      line_items: [
        {
          price: setupPriceId,
          quantity: 1,
        },
        {
          price: monthlyPriceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${req.headers.get("origin")}/payment-success`,
      cancel_url: `${req.headers.get("origin")}/get-started`,
      subscription_data: {
        trial_period_days: 14,
        metadata: {
          businessName: businessName || "",
          industry: industry || "",
          product: productTier,
        },
      },
      metadata: {
        businessName: businessName || "",
        industry: industry || "",
        product: productTier,
      },
    });

    logStep("Checkout session created", { sessionId: session.id, url: session.url });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in create-checkout", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
