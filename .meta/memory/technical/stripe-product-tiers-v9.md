# Memory: technical/stripe-product-tiers-v9
Updated: 2025-02-06

## Product Tiers & Stripe Price IDs

The site uses a 4-tier value ladder with all Stripe products and prices configured:

### Tier 1: LocalLift™ (The Foundation)
- **Setup**: $1,500 one-time
  - Product ID: `prod_Tp02Cb1v5ektfC`
  - Price ID: `price_1SrM2NCUVmu4OLZneWNhhb7K`
- **Monthly**: $299/month
  - Product ID: `prod_TvkXt8jykZkK0F`
  - Price ID: `price_1Sxt2ACUVmu4OLZn801dJhrz`
- Daily cost: $9.97/day
- Focus: AEO optimization, local visibility, being found by AI assistants

### Tier 2: LeadLine™ (AI Voice Assistant)
- **Setup**: $1,500 one-time
  - Product ID: `prod_TvjnKrc2LVsA4T`
  - Price ID: `price_1SxsJSCUVmu4OLZnt5E5JP3o`
- **Monthly**: $399/month
  - Product ID: `prod_Tvjok3Zy350Q0N`
  - Price ID: `price_1SxsKaCUVmu4OLZnAWqwpSn9`
- Daily cost: $13.30/day
- Focus: 24/7 AI voice assistant, instant lead qualification, appointment booking

### Tier 3: LaunchPad 360™ (The Growth Engine) [FEATURED]
- **Setup**: $1,500 one-time
  - Product ID: `prod_Tju0zb8H1hqOcs`
  - Price ID: `price_1SmQCECUVmu4OLZn8JQo9bnb`
- **Monthly**: $500/month
  - Product ID: `prod_Tju0BiqCgZglkJ`
  - Price ID: `price_1SmQCVCUVmu4OLZnzHzOpbjz`
- Daily cost: $16.60/day
- Focus: Full AI lead generation, multi-channel outreach, strategy sessions

### Tier 4: OmniLogic™ (Enterprise)
- Custom pricing (Contact Us model)
- Starts at $5,000 setup + custom monthly quote
- Focus: Custom business intelligence, cognitive architecture

## Implementation Details
- Product configuration centralized in `src/lib/products.ts`
- Edge function `create-checkout` accepts `product` parameter
- Product selector added to Get Started page as first step
- All tiers have 14-day trial before first monthly charge
