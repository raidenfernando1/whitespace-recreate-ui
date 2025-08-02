import { DefaultButton } from "../ui/Button";
import Browsers from "../../assets/Browsers.svg";
import Customize from "../../assets/Customize.svg";

function Features({
  title,
  description,
  image,
  bgColor = "bg-primary-darkBlue",
  reverse = false,
  imgSize,
  highlightedText,
}) {
  return (
    <section
      className={`${bgColor} flex flex-col items-center justify-around text-center lg:text-left xl:gap-10 ${reverse ? "text-secondary-black lg:flex-row-reverse" : "text-secondary-white lg:flex-row"}`}
    >
      <div className="lg:mx-5 xl:w-xl">
        <h1 className="mt-10 mb-5 text-4xl font-bold lg:text-5xl xl:text-6xl">
          {title}<span className="bg-[url(./assets/Element.svg)] bg-contain bg-bottom bg-no-repeat">
            {highlightedText}
          </span>
        </h1>
        <p className="my-5 px-5 text-base font-light sm:font-normal md:px-5 lg:p-0 lg:text-lg xl:text-xl">
          {description}
        </p>
        <DefaultButton text="Let's Go" />
      </div>
      <div
        className={`my-10 h-auto w-3xs sm:w-sm md:w-md lg:mx-5 lg:w-lg xl:w-xl ${imgSize}`}
      >
        <img src={image} alt="Image is from unDraw" />
      </div>
    </section>
  );
}

function FeaturesWrapper() {
  return (
    <div>
      <Features
        title="Use as "
        highlightedText="Extension"
        description="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
        image={Browsers}
        imgSize="max-w-80"
      />
      <Features
        title="Customize it to "
        highlightedText="your needs"
        description="Customize the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
        image={Customize}
        reverse={true}
        bgColor="bg-secondary-white"
      />
    </div>
  );
}
export default FeaturesWrapper;
