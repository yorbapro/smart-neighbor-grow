import { MapPin, Phone } from "lucide-react";

const Locations = () => {
  const locations = [
    {
      city: "Sacramento",
      areaCode: "916",
      specialty: "AI Sales Strategy & Lead Generation",
      industry: "Tech startups and professional consulting firms",
      description: "The capital is a fast-growing center for professional services.",
    },
    {
      city: "Stockton",
      areaCode: "209",
      specialty: "AI Logistics & New Business Growth",
      industry: "Logistics, shipping, and service sectors",
      description: "A critical center for moving goods.",
    },
    {
      city: "Fresno",
      areaCode: "559",
      specialty: "AI Ag-Tech & Production Sales",
      industry: "Agriculture, food processing, and manufacturing",
      description: "In the heart of the region's economy.",
    },
    {
      city: "Bakersfield",
      areaCode: "661",
      specialty: "AI Energy & Industrial Sales",
      industry: "Energy, natural resources, and heavy industry",
      description: "Built on energy and hard work.",
    },
  ];

  return (
    <section id="locations" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            Regional Hubs
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            We Are in Your Neighborhood
          </h2>
          <p className="text-lg text-muted-foreground">
            While our technology is world-class, we know that successful business is local. 
            We maintain strategic hubs in key cities because understanding a local market 
            requires a human touch and regional knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <div
              key={location.city}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-gradient-hero transition-all duration-300">
                  <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">
                    {location.city}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {location.areaCode} Area
                  </span>
                </div>
              </div>

              {/* Specialty */}
              <p className="text-sm font-semibold text-primary mb-2">
                {location.specialty}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">
                {location.description}
              </p>

              {/* Industry Focus */}
              <div className="pt-4 border-t border-border">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Industry Focus
                </span>
                <p className="text-sm text-foreground mt-1">{location.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
