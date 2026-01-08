import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Locations = () => {
  return (
    <section id="locations" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            Regional Hubs
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Lead Generation Near You
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Local expertise with world-class AI sales implementation. We serve businesses 
            across Sacramento, Bakersfield, Culver City, Henderson NV, and Monterey.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90">
              <Link to="/locations" className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                View All Locations
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
