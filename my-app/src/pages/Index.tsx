import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { CategoryIcons } from "../components/CategoryIcons";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { About } from "../components/About";
import { PopularMenu } from "../components/PopularMenu";
import { Testimonials } from "../components/Testimonials";
import { Blog } from "../components/Blog";
import { Gallery } from "../components/Gallery";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CategoryIcons />
      <FeaturedProducts />
      <About />
      <PopularMenu />
      <Testimonials />
      <Blog />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
