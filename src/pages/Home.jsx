import Navbar from "../components/ui/Navbar";
import Hero from "../components/sections/Hero";
import Productivity from "../components/sections/Productivity";
import FeaturesSection from "../components/sections/FeaturesSection";
import Testimonial from "../components/sections/Testimonial"


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Productivity />
      <FeaturesSection/>
      <Testimonial/>
    </>
  );
}
export default Home;
