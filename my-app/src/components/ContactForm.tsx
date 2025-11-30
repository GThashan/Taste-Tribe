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
              <input
                type="text"
                placeholder="Your Name"
                className="bg-card border border-border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-card border border-border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="bg-card border border-border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="bg-card border border-border rounded-lg px-4 py-3 w-full resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
