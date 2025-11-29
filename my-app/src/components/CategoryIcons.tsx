import { Beer, Pizza, Sandwich, UtensilsCrossed, IceCream, Coffee } from "lucide-react";

export const CategoryIcons = () => {
  const categories = [
    { icon: UtensilsCrossed, label: "Burger" },
    { icon: Pizza, label: "Pizza" },
    { icon: Sandwich, label: "Fries" },
    { icon: Beer, label: "Pasta" },
    { icon: Coffee, label: "Drinks" },
    { icon: IceCream, label: "Dessert" },
  ];

  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.label}
              className="flex flex-col items-center gap-3 group transition-transform hover:scale-110"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <category.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-sm font-medium text-foreground">{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
