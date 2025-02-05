import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Features } from "../components/Features";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Contact } from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Features />
      <WhyChooseUs />
      <Contact />
    </div>
  );
};

export default Index;