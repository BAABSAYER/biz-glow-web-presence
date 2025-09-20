
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import UseCases from '@/components/UseCases';
import Partnerships from '@/components/Partnerships';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <UseCases />
      <Services />
      <Partnerships />
      <Testimonials />
      <About />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
