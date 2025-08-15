import Navbar from "../components/ui/Navbar";
import Hero from "../components/sections/Hero";
import Productivity from "../components/sections/Productivity";
import FeaturesSection from "../components/sections/FeaturesSection";
import Testimonial from "../components/sections/Testimonial"
import Footer from "../components/sections/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Productivity />
      <FeaturesSection/>
      <Testimonial/>
      <Footer/>
      
    </>
  );
}
export default Home;
