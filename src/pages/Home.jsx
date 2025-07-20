import Navbar from "../components/Navbar";
import Section from "../components/Section";
import DataImg from "../assets/DataImg.svg"
import TeamCollaboration from "../assets/TeamCollaboration.svg"
import OnlineCommunity from "../assets/OnlineCommunity.svg"

function Home() {
  return (
    <>
      <Navbar />
      <Section
        image={DataImg}
        className="lg:min-h-[70vh]"
        textColor="text-[#FFFFFF]"
        background="bg-[#043873]"
        title="Get More Done with Whitespace"
        description="Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks"
      />
      <Section
      image={TeamCollaboration}
      textColor="text-[#212529]"
      background="bg-[#FFFFFF]"
        title="Project Management"
        description="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobiles app and save them to a note."
      />
      <Section
      className = "lg:flex-row-reverse "
      image={OnlineCommunity}
      textColor="text-[#212529]"
      background="bg-[#FFFFFF]"
        title="Work Together"
        description="With whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet share the URL with others."

      />
    </>
  );
}
export default Home;
