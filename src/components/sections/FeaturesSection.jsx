import { FeatureBlock } from "./FeatureBlock";
import { FeatureBlockList } from "../../data/featureBlocks";

// components
import PricingSection from "./PricingSection";
import CallToActionSection from "./CallToActionSection";
import Sponsor from "../sections/Sponsor";

function FeaturesSection() {
  console.log(FeatureBlockList[2].block3);

  return (
    <div>
      {FeatureBlockList.map((data, index) => {
        if (index === 1) {
          return (
            <>
              <PricingSection key="pricing" />
              <CallToActionSection key="CTA" />
            </>
          );
        }

        if (index === 3) {
          return <Sponsor key="sponsor" />;
        }

        return <FeatureBlock key={`block${index}}`} {...data} />;
      })}
    </div>
  );
}
export default FeaturesSection;
