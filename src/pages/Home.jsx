import Navbar from "../components/Navbar";
import Section from "../components/Section";
import DataImg from "../assets/DataImg.svg"
import TeamCollaboration from "../assets/TeamCollaboration.svg"
import OnlineCommunity from "../assets/OnlineCommunity.svg"
import Browsers from "../assets/Browsers.svg"

function Home() {
  return (
    <>
      <Navbar />
      <Section
        image={DataImg}
        buttonText="Try Whitespace free"
        className="lg:min-h-[70vh]"
        textColor="text-[#FFFFFF]"
        background="bg-[url(./assets/HeroBackground.svg)] bg-center"
        headerText="Get More Done with Whitespace"
        description="Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks"
      />
      <Section
      image={TeamCollaboration}
      className="lg:min-h-[50vh]"
      buttonText="Get Started"
      textColor="text-[#212529]"
      background="bg-[#FFFFFF]"
        headerText="Project "
        headerHighlighted="Management"
        description="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobiles app and save them to a note."
      />
      <Section
      className = "lg:flex-row-reverse lg:min-h-[50vh]"
      buttonText="Try it now"
      image={OnlineCommunity}
      textColor="text-[#212529]"
      background="bg-[#FFFFFF]"
        headerText="Work "
        headerHighlighted="together"
        description="With whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet share the URL with others."

      />
      <Section
        className="lg:min-h-[30vh]"
        buttonText={"Let's Go"}
        image={Browsers}
        background="bg-[#043873]"
        textColor="text-[#FFFFFF]"
        headerText="Use as "
        headerHighlighted="Extension"
        imgSize="h-80"
        description="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."

      />
    </>
  );
}
export default Home;
