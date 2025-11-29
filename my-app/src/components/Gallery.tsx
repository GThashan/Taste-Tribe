import burgerImg from "@/assets/burger.jpg";
import friesImg from "@/assets/fries.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import chickenImg from "@/assets/chicken.jpg";
import donutImg from "@/assets/donut.jpg";
import sandwichImg from "@/assets/sandwich.jpg";

export const Gallery = () => {
  const images = [
    burgerImg,
    friesImg,
    pizzaImg,
    chickenImg,
    donutImg,
    sandwichImg,
    burgerImg,
    pizzaImg,
    chickenImg,
    friesImg,
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Food <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through our delicious offerings
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image}
                alt={`Food gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
