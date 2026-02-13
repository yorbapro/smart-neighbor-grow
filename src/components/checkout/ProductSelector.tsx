import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { LEADLINE_TIERS, LAUNCHPAD_TIERS, ProductConfig, ProductTier } from "@/lib/products";

interface ProductSelectorProps {
  selectedProduct: ProductTier;
  onSelectProduct: (product: ProductTier) => void;
}

const ProductSelector = ({ selectedProduct, onSelectProduct }: ProductSelectorProps) => {
  // Show key tiers for the checkout flow
  const selectableProducts: ProductConfig[] = [
    LEADLINE_TIERS[0], // Core
    LEADLINE_TIERS[1], // Growth (highlighted)
    LAUNCHPAD_TIERS[0], // LP360 Growth
  ];

  return (
    <div className="space-y-4">
      <h2 className="font-display text-2xl font-bold text-foreground text-center">
        Choose Your Solution
      </h2>
      <p className="text-muted-foreground text-center mb-6">
        Select the plan that best fits your business needs
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {selectableProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={selectedProduct === product.id}
            onSelect={() => onSelectProduct(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

interface ProductCardProps {
  product: ProductConfig;
  isSelected: boolean;
  onSelect: () => void;
}

const ProductCard = ({ product, isSelected, onSelect }: ProductCardProps) => {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "relative p-5 rounded-xl border-2 text-left transition-all duration-200",
        "hover:border-primary/50 hover:shadow-md",
        isSelected
          ? "border-primary bg-primary/5 shadow-lg"
          : "border-border bg-card",
        product.highlighted && !isSelected && "border-accent/50"
      )}
    >
      {product.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full flex items-center gap-1">
          <Star className="w-3 h-3" />
          Most Popular
        </div>
      )}

      <div className="space-y-3">
        <div>
          <h3 className="font-display text-lg font-bold text-foreground">
            {product.name} — {product.tierName}
          </h3>
          <p className="text-sm text-muted-foreground">{product.tagline}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-foreground">
              ${product.monthlyPrice.toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>
          <p className="text-xs text-muted-foreground">
            {product.usageMinutes}
          </p>
        </div>

        <ul className="space-y-2 pt-2 border-t border-border/50">
          {product.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm">
              <Check className={cn(
                "w-4 h-4 mt-0.5 flex-shrink-0",
                isSelected ? "text-primary" : "text-accent"
              )} />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {isSelected && (
        <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
          <Check className="w-4 h-4 text-primary-foreground" />
        </div>
      )}
    </button>
  );
};

export default ProductSelector;
