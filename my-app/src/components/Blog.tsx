import { Calendar } from "lucide-react";
import burgerImg from "@/assets/burger.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import chickenImg from "@/assets/chicken.jpg";

export const Blog = () => {
  const posts = [
    {
      title: "10 Reasons Why Our Burgers Are the Best in Town",
      date: "March 15, 2024",
      excerpt: "Discover what makes our burgers stand out from the competition and why customers keep coming back...",
      image: burgerImg,
    },
    {
      title: "The Secret Behind Our Crispy Fried Chicken",
      date: "March 12, 2024",
      excerpt: "Learn about our special recipe and cooking techniques that make our chicken irresistibly crispy...",
      image: chickenImg,
    },
    {
      title: "Introducing Our New Artisan Pizza Collection",
      date: "March 10, 2024",
      excerpt: "Explore our latest pizza offerings featuring authentic Italian flavors and premium ingredients...",
      image: pizzaImg,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Latest <span className="text-primary">Food</span> News
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest recipes, menu additions, and food stories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.title}
              className="group cursor-pointer hover:shadow-xl transition-all border border-border rounded-lg overflow-hidden bg-card"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
