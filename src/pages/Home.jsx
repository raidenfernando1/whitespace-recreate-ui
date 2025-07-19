import Navbar from "../components/Navbar";
import Section from "../components/Section";

function Home() {
  return (
    <>
      <Navbar />
      <Section
        textColor="text-[#FFFFFF]"
        background="bg-[#043873]"
        title="Get More Done with Whitespace"
        description="Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks"
      />
      <Section
      textColor="text-[#212529]"
      background="bg-[#FFFFFF]"
        title="Project Management"
        description="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobiles app and save them to a note."
      />
    </>
  );
}
export default Home;
