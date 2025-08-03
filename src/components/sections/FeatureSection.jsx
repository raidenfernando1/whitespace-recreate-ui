import { FeatureBlock } from "./FeatureBlock";
import Browsers from "../../assets/Browsers.svg"
import Customize from "../../assets/Customize.svg"
import Secure from "../../assets/Secure.svg"
import PricingSection from "./PricingSection"
import CallToActionSection from "./CallToActionSection"

function FeaturesSection() {
  return (
    <>
      <FeatureBlock
        title="Use as "
        highlightedText="Extension"
        description="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
        image={Browsers}
        imgSize="max-w-80"
        textColor="text-secondary-white"
      />
      <FeatureBlock
        title="Customize it to "
        highlightedText="your needs"
        description="Customize the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
        image={Customize}
        reverse={true}
        textColor="text-secondary-black"
        bgColor="bg-secondary-white"
      />
      <PricingSection/>
      <CallToActionSection />
      <FeatureBlock
        title="100%"
        highlightedText="your data"
        description="The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encrpytion (E2EE) to secure your notes and ensure no-one but yourself can access them."
        image={Secure}
        textColor="text-secondary-black"
        bgColor="bg-secondary-white"
      />
    </>
  );
}
export default FeaturesSection