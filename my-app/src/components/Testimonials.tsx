import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Blogger",
      comment: "Absolutely amazing! The burger was juicy and flavorful. Best fast food I've ever had. Will definitely order again!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      name: "Mike Chen",
      role: "Regular Customer",
      comment: "Quick delivery and hot food every time. The quality is consistently excellent. My go-to place for tasty meals!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
    },
    {
      name: "Emma Wilson",
      role: "Office Worker",
      comment: "Love their lunch specials! Great variety and the portions are generous. Perfect for office lunches.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Customer <span className="text-primary">Feedbacks</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear what our satisfied customers have to say!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="p-6 border border-border rounded-lg bg-background">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
