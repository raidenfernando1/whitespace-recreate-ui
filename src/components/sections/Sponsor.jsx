import Apple from "../assets/Apple.svg";
import Microsoft from "../assets/Microsoft.svg";
import Slack from "../assets/Slack.svg";
import Google from "../assets/Google.svg";

function Sponsor({imgSize = 'w-40 md:w-45 lg:w-55'}) {
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
        <img src={Apple} className={imgSize} alt="Apple Logo" />
        <img src={Microsoft} className={imgSize} alt="Microsoft Logo" />
        <img src={Slack} className={imgSize} alt="Slack Logo" />
        <img src={Google} className={imgSize} alt="Google Logo" />
      </div>
    </div>
  );
}

export default Sponsor;
