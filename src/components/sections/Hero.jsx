import { DefaultButton } from "../ui/Button";
import Chart from "../../assets/Chart.svg";

function Hero() {
  return (
    <section className="bg-primary-darkBlue flex flex-col items-center justify-around text-center lg:h-[80vh] lg:flex-row lg:text-left xl:gap-10">
      <div className="text-secondary-white lg:mx-5 xl:w-xl">
        <h1 className="mt-10 mb-5 text-4xl font-bold lg:text-5xl xl:text-6xl">
          Get More Done with Whitespace
        </h1>
        <p className="my-5 px-5 text-base font-light sm:font-normal md:px-5 lg:p-0 lg:text-lg xl:text-xl">
          Project management software that enables your teams to collaborate,
          plan, analyze and manage every tasks
        </p>
        <DefaultButton text="Try Whitespace Free" />
      </div>
      <div className="my-10 h-auto w-3xs sm:w-sm md:w-md lg:mx-5 lg:w-lg xl:w-xl">
        <img src={Chart} alt="Image from unDraw.co" />
      </div>
    </section>
  );
}
export default Hero;
