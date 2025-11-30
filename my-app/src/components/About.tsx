import { Check } from "lucide-react";
import chickenImg from "../assets/chicken.jpg";

export const About = () => {
  const features = [
    "Best quality foods",
    "Fast food delivery",
    "24/7 customer support",
    "Fresh ingredients daily",
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={chickenImg}
              alt="Delicious food"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Tasty</span> Foods
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We believe that food is more than just sustenance – it's an experience. 
              Our chefs carefully craft each dish using the finest ingredients, ensuring 
              every bite is packed with flavor and quality. From quick snacks to full meals, 
              we're dedicated to serving you the best.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
