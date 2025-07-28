import Navbar from "../components/Navbar";
import Section from "../components/Section";
import DataImg from "../assets/DataImg.svg"
import TeamCollaboration from "../assets/TeamCollaboration.svg"
import OnlineCommunity from "../assets/OnlineCommunity.svg"
import Browsers from "../assets/Browsers.svg"
import Customize from "../assets/Customize.svg"
import Plan from "../components/Plan";
import Devices from "../assets/Devices.svg"
import Secure  from "../assets/Secure.svg"
import SponsorSection from "../components/SponsorSection";

function Home() {
  return (
    <>
      <Navbar />
      <Section
        image={DataImg}
 
        buttonText="Try Whitespace free"
        className="lg:min-h-[70vh]"
        textColor="text-secondary-white"
        background="bg-[url(./assets/HeroBackground.svg)] bg-no-repeat bg-center"
        headerText="Get More Done with Whitespace"
        description="Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks"
      />
      <Section
      image={TeamCollaboration}
      className="lg:min-h-[50vh]"
      buttonText="Get Started"
      textColor="text-secondary-black"
      background="bg-secondary-white"
        headerText="Project "
        headerHighlighted="Management"
        description="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobiles app and save them to a note."
      />
      <Section
      className = "lg:flex-row-reverse lg:min-h-[50vh]"
      buttonText="Try it now"
      image={OnlineCommunity}
      textColor="text-secondary-black"
      background="bg-secondary-white"
        headerText="Work "
        headerHighlighted="Together"
        description="With whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet share the URL with others."

      />
      <Section
        className="lg:min-h-[30vh]"
        buttonText={"Let's Go"}
        image={Browsers}
        background="bg-primary-darkBlue"
        textColor="text-secondary-white"
        headerText="Use as "
        headerHighlighted="Extension"
        imgSize="h-80"
        description="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."

      />
      <Section
      className = "lg:flex-row-reverse lg:min-h-[50vh]"
      buttonText="Let's Go"
      image={Customize}
      textColor="text-secondary-black"
      background="bg-secondary-white"
        headerText="Customize it to "
        headerHighlighted="your needs"
        description="Customize the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."

      />
      <Plan/>

      <Section
      className = " lg:min-h-[70vh]"
      buttonText="Try Whitespace"
      image={Devices}
      textColor="text-secondary-white"
      background="bg-primary-darkBlue"

      headerText="Your work, everywhere "
      headerHighlighted="you are"
      description="Access your notes from your computer, phone or tablet by synchronizing with various services, including whitespace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!"
      />
      
      <Section
      className="lg:min-h-[70vh] flex-col-reverse"
      buttonText="Read more"
      image={Secure}
      textColor="text-secondary-black"
      background="bg-secondary-white"
      headerText="100% "

      headerHighlighted="your data"
      description="This app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
      />
      <SponsorSection/>
    </>
  );
}
export default Home;
