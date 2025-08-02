import Navbar from "../components/ui/Navbar";
import Hero from "../components/sections/Hero";
import Productivity from "../components/sections/Productivity";
import FeaturesWrapper from "../components/sections/FeaturesWrapper";
import Plan from "../components/sections/Plan"
import Sponsor from "../components/sections/Sponsor";




function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Productivity/>
      <FeaturesWrapper/>
      <Plan/>
      <Sponsor/>
    </>
  );
}
export default Home;
