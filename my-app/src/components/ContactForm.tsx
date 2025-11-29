import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const ContactForm = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Request More <span className="text-primary">Information</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Have questions or special requests? We'd love to hear from you!
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                placeholder="Your Name"
                className="bg-card border-border"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-card border-border"
              />
            </div>
            <Input
              placeholder="Subject"
              className="bg-card border-border"
            />
            <Textarea
              placeholder="Your Message"
              rows={6}
              className="bg-card border-border resize-none"
            />
            <Button
              size="lg"
              className="w-full md:w-auto px-12 bg-primary hover:bg-primary/90"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
