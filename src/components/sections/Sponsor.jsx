import Apple from "../../assets/Apple.svg";
import Microsoft from "../../assets/Microsoft.svg";
import Slack from "../../assets/Slack.svg";
import Google from "../../assets/Google.svg";

function SponsorLogo ({Logo, logoName, imgSize = 'w-40 md:w-45 lg:w-55'}){
  return (
    <img src={Logo} className={imgSize} alt={logoName} />
  );
}




function Sponsor() {
  return (
    <div className="w-full text-center">
      <div className="my-10">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary-black">
          Our {" "}
          <span className="bg-[url(./assets/Element.svg)] bg-contain bg-bottom bg-no-repeat">
            Sponsors
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-around gap-5 sm:mx-5 sm:flex-row my-10">
        <SponsorLogo Logo={Apple} logoName="Apple Logo"/>
        <SponsorLogo Logo={Microsoft} logoName="Microsoft Logo"/>
        <SponsorLogo Logo={Slack} logoName="Slack Logo"/>
        <SponsorLogo Logo={Google} logoName="Google Logo"/>
      </div>
    </div>
  );
}

export default Sponsor;
