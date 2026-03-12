import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const heroImages = [
  { src: "/images/hero-hvac.webp", alt: "HVAC technician using AI receptionist" },
  { src: "/images/hero-plumbing.webp", alt: "Plumbing professional with AI receptionist" },
  { src: "/images/hero-medical.webp", alt: "Medical practice manager with AI receptionist" },
  { src: "/images/hero-legal.webp", alt: "Legal professional with AI receptionist" },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(215, 28%, 12%) 0%, hsl(215, 28%, 7%) 50%, hsl(220, 30%, 3%) 100%)' }}>
      {/* GitHub-style glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] md:w-[1200px] h-[300px] md:h-[600px] rounded-full opacity-20" style={{ background: 'radial-gradient(ellipse at center, hsl(212, 92%, 45%) 0%, transparent 70%)' }} />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[200px] md:h-[400px] rounded-full opacity-15" style={{ background: 'radial-gradient(ellipse at center, hsl(260, 80%, 55%) 0%, transparent 70%)' }} />
        <div className="absolute top-[5%] left-[20%] md:left-[30%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(ellipse at center, hsl(190, 80%, 45%) 0%, transparent 70%)' }} />
      </div>

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
              <span className="uppercase text-xs font-bold tracking-[0.25em] text-primary">
                AI Receptionist
              </span>
              <span className="w-12 h-[2px] bg-gradient-hero" />
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8 animate-slide-up">
              Never Miss Another
              <br />
              <span className="text-gradient">Customer Call.</span>
            </h2>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-6 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Our AI voice agents answer 24/7, qualify leads with custom logic, and book appointments directly into your CRM — so you capture opportunities that would otherwise go to voicemail.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/ai-receptionist/resources/ai-receptionist-readiness-assessment" aria-label="Take the free AI Receptionist Readiness Assessment">
                  Get My Free AI Score
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:1-877-879-5552" aria-label="Talk to an AI Receptionist">Talk to an AI Receptionist</a>
              </Button>
            </div>

            <p className="text-sm text-white/50 mb-8 animate-slide-up" style={{ animationDelay: "0.25s" }}>
              No contracts. Fast setup. Works with your existing number.
            </p>

            <div className="flex flex-wrap gap-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              {["Founded by business owners", "Live in days, not months", "Enterprise-grade security"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/60">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Dynamic Carousel */}
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {heroImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-auto object-cover transition-opacity duration-1000 ${
                    index === 0 ? "relative" : "absolute inset-0"
                  } ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "low"}
                  decoding="async"
                  width={1200}
                  height={800}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`View image ${index + 1} of ${heroImages.length}`}
                />
              ))}
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-sm rounded-2xl shadow-card-hover p-5 border border-border animate-float">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <Phone className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">24/7</p>
                  <p className="text-sm text-muted-foreground">Every Call Answered</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-primary/90 backdrop-blur-sm rounded-2xl shadow-glow px-5 py-3 animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-semibold text-primary-foreground">AI Active 24/7</span>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-primary/20" />
          </div>
        </div>
      </div>

      {/* Seamless fade into next dark section */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(180deg, transparent, hsl(220, 30%, 3%))' }} />
    </section>
  );
};

export default Hero;
