
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower businesses with innovative technology solutions that drive growth and efficiency in the digital era."
    },
    {
      icon: Users,
      title: "Team",
      description: "Expert professionals with deep industry knowledge and passion for delivering exceptional IT solutions."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly evolving with the latest technologies to provide cutting-edge solutions for our clients."
    },
    {
      icon: Award,
      title: "Quality",
      description: "Committed to delivering superior quality solutions with comprehensive support and maintenance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-talah-primary mb-4">
                About Talah Tech
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Talah Tech, we believe in the power of technology to transform businesses and 
                shape the future. With years of experience in the IT industry, we specialize in 
                delivering comprehensive solutions that meet the evolving needs of modern enterprises.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                Our expertise spans across POS systems, IoT solutions, and enterprise mobility 
                technologies, making us your one-stop destination for all IT needs. We pride 
                ourselves on understanding each client's unique requirements and delivering 
                tailored solutions that drive real business value.
              </p>
              
              <p className="text-gray-600">
                From consultation and implementation to ongoing support and maintenance, 
                we ensure your technology infrastructure remains robust, secure, and scalable 
                as your business grows.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-talah-primary">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-lg">
                <div className="text-2xl font-bold text-talah-accent">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-fit p-3 bg-gradient-to-br from-talah-accent/10 to-talah-primary/10 rounded-xl">
                    <value.icon className="h-8 w-8 text-talah-accent" />
                  </div>
                  <h3 className="font-semibold text-talah-primary text-lg">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
