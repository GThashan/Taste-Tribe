import burgerImg from "@/assets/burger.jpg";
import pizzaImg from "@/assets/pizza.jpg";

export const FeaturedProducts = () => {
  const products = [
    {
      title: "Burger",
      description: "Juicy, flavorful beef burger",
      price: "$5.99",
      image: burgerImg,
      bgColor: "bg-primary",
    },
    {
      title: "Pizza",
      description: "Cheese-loaded pizza delight",
      price: "$12.99",
      image: pizzaImg,
      bgColor: "bg-secondary",
    },
    {
      title: "Sweet",
      description: "Delicious sweet treats",
      price: "$4.99",
      image: pizzaImg,
      bgColor: "bg-[#FFA500]",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className={`${product.bgColor} border-none rounded-lg overflow-hidden relative group cursor-pointer transition-transform hover:scale-105`}
            >
              <div className="p-6 flex items-center justify-between">
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">{product.title}</h3>
                  <p className="text-white/90 mb-4">{product.description}</p>
                  <button 
                    className="border-2 border-white text-white hover:bg-white hover:text-background px-4 py-2 rounded-lg transition-colors font-medium"
                  >
                    Order Now
                  </button>
                </div>
                <div className="w-32 h-32 relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-full shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
