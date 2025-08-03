import Navbar from "../components/ui/Navbar";
import Hero from "../components/sections/Hero";
import Productivity from "../components/sections/Productivity";
import Sponsor from "../components/sections/Sponsor";
import FeaturesSection from "../components/sections/FeatureSection";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Productivity />
      <FeaturesSection/>
      <Sponsor />
    </>
  );
}
export default Home;
