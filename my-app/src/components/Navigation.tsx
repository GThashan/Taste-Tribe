import { ShoppingCart } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";

export const Navigation = () => {
  const navItems = ["Home", "Menu", "Order Food", "Blog", "Page"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                  index === 0 ? "text-primary border-b-2 border-primary pb-1" : ""
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-secondary rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
              Order Online
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
