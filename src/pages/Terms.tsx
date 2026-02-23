import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  useEffect(() => {
    document.title = "Subscription Terms & Cancellation Policy | BrightLaunchIQ";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Subscription Terms & Cancellation Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-lg">
              Last Updated: January 2026
            </p>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                1. Subscription Overview
              </h2>
              <p>
                BrightLaunchIQ offers AI receptionist and revenue infrastructure services through multiple product tiers. 
                Each service consists of:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>One-Time Setup Fee:</strong> A non-refundable fee charged at signup that covers custom infrastructure build, configuration, and initial optimization.</li>
                <li><strong>Monthly Subscription:</strong> Recurring monthly fee charged at signup and automatically on the same date each subsequent month.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                2. Billing Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The one-time setup fee and first month's subscription are both charged immediately at signup.</li>
                <li>Subsequent monthly payments are automatically charged on the same date each month.</li>
                <li>There is no free trial period. Your subscription begins immediately upon enrollment.</li>
                <li>All payments are processed securely through Stripe.</li>
                <li>Prices are in USD and exclude applicable taxes.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                3. Service Commitment
              </h2>
              <p>
                Your service is active from the moment of enrollment. We are committed to fast implementation — 
                from zero to live in days, not months. Our team works with you to configure your AI receptionist, 
                integrations, and workflows as quickly as possible so you start seeing results right away.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                4. Cancellation Policy
              </h2>
              <h3 className="font-semibold text-foreground text-xl mb-2">How to Cancel</h3>
              <p>
                You may cancel your subscription at any time through one of the following methods:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email us at <a href="mailto:success@BrightLaunchIQ.com" className="text-primary hover:underline">success@BrightLaunchIQ.com</a></li>
                <li>Call 1-877-879-5552 during business hours</li>
                <li>Use the "Manage Subscription" link in your client portal</li>
              </ul>

              <h3 className="font-semibold text-foreground text-xl mb-2 mt-6">Cancellation Terms</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>No Long-Term Contracts:</strong> There are no annual commitments. You can cancel month-to-month.</li>
                <li><strong>Cancel Anytime:</strong> You may cancel at any time before your next billing date to avoid the next charge.</li>
                <li><strong>Service Access:</strong> Upon cancellation, you will retain access to your services through the end of your current paid period.</li>
                <li><strong>Setup Fee Non-Refundable:</strong> The one-time setup fee is non-refundable as it covers completed infrastructure work.</li>
                <li><strong>No Partial Month Refunds:</strong> Monthly subscription fees are not refunded for partial months. Your service remains active through the end of the billing period.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                5. Refund Policy
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Setup Fee:</strong> Non-refundable. Covers completed infrastructure and configuration work.</li>
                <li><strong>Monthly Subscription:</strong> No partial-month refunds. Your service remains active through the end of the paid billing period.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                6. Infrastructure Ownership
              </h2>
              <p>
                All custom sales infrastructure, automation workflows, and lead data generated during your subscription 
                remain your property. Upon cancellation, we will provide:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Export of all leads and contact data</li>
                <li>Documentation of workflows created</li>
                <li>Transition support for CRM integrations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                7. Service Modifications
              </h2>
              <p>
                BrightLaunchIQ reserves the right to modify service features and pricing with 30 days advance notice. 
                Existing subscribers will be grandfathered at their current rate for 90 days following any price increase.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                8. Contact Information
              </h2>
              <p>
                For questions about these terms or your subscription:
              </p>
              <ul className="list-none space-y-2">
                <li><strong>Email:</strong> <a href="mailto:success@BrightLaunchIQ.com" className="text-primary hover:underline">success@BrightLaunchIQ.com</a></li>
                <li><strong>Phone:</strong> 1-877-879-5552</li>
                <li><strong>Business Hours:</strong> Monday–Friday, 8AM–6PM Pacific Time</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
