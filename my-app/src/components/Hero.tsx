import { Button } from "./ui/button";
import heroBurrito from "@/assets/hero-burrito.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/30" />
      
      {/* Hero image */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-2/3 lg:w-1/2">
        <img
          src={heroBurrito}
          alt="Delicious burrito"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-primary block mb-2">Hungry?</span>
            <span className="text-hero-text">We've Got You Covered!</span>
          </h1>
          
          <p className="text-hero-subtext text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
            From quick bites to full meals, we serve fresh, mouth-watering dishes made just for you. 
            Explore a menu packed with flavor, crafted with care and quality ingredients. Order online 
            or dine in great food is always ready when you are.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full transition-transform hover:scale-105"
            >
              Order Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full transition-all"
            >
              Book a Table
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative spices elements */}
      <div className="absolute bottom-10 left-10 w-32 h-32 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-primary/30 rounded-full blur-3xl" />
      </div>
    </section>
  );
};
