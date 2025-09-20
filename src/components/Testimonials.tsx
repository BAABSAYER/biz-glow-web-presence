import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    company: "Al-Rashid Electronics",
    role: "Store Manager", 
    content: "Talah Tech's POS solution transformed our retail operations. The system is intuitive and our staff adapted quickly. Sales processing is now 50% faster.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Fatima Hassan",
    company: "MedCare Clinic",
    role: "IT Director",
    content: "The medical tablets with antimicrobial coating are perfect for our healthcare environment. They've significantly improved our patient data management.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616c2c2f8fd?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Omar Khalil",
    company: "Logistics Plus",
    role: "Operations Manager",
    content: "The rugged handheld devices have revolutionized our warehouse operations. They withstand our demanding environment while boosting productivity by 30%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across industries for reliable technology solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-accent/20">
                  <Quote size={24} />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={index} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-accent font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;