import { Star } from "lucide-react";
import burgerImg from "@/assets/burger.jpg";
import friesImg from "@/assets/fries.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import chickenImg from "@/assets/chicken.jpg";
import donutImg from "@/assets/donut.jpg";
import sandwichImg from "@/assets/sandwich.jpg";

export const PopularMenu = () => {
  const menuItems = [
    { name: "Burger", price: "$5.99", rating: 4.5, image: burgerImg },
    { name: "French Fries", price: "$3.99", rating: 4.8, image: friesImg },
    { name: "Milkshake", price: "$4.99", rating: 4.6, image: pizzaImg },
    { name: "Chicken Wings", price: "$8.99", rating: 4.7, image: chickenImg },
    { name: "Pizza", price: "$12.99", rating: 4.9, image: pizzaImg },
    { name: "Fried Chicken", price: "$9.99", rating: 4.8, image: chickenImg },
    { name: "Donut", price: "$2.99", rating: 4.5, image: donutImg },
    { name: "Sandwich", price: "$6.99", rating: 4.6, image: sandwichImg },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Popular <span className="text-primary">Tasty</span> Foods
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved dishes, carefully prepared with premium ingredients 
            and served fresh daily.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group cursor-pointer hover:shadow-xl transition-all border border-border rounded-lg overflow-hidden bg-card"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(item.rating)
                          ? "fill-primary text-primary"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xl font-bold text-primary">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-4 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};
