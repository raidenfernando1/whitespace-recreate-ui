import Navbar from "../components/ui/Navbar";
import Hero from "../components/sections/Hero";
import Productivity from "../components/sections/Productivity";
import FeaturesWrapper from "../components/sections/FeaturesWrapper";




function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Productivity/>
      <FeaturesWrapper/>
    </>
  );
}
export default Home;
