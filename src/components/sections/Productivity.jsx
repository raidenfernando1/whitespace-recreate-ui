import { DefaultButton } from "../ui/Button";
import TeamCollaboration from "../../assets/TeamCollaboration.svg";
import OnlineCommunity from "../../assets/OnlineCommunity.svg";

function Productivity() {
  return (
    <div>
      <section className="bg-secondary-white flex flex-col items-center justify-around text-center lg:flex-row lg:text-left xl:gap-10">
        <div className="text-secondary-black lg:mx-5 xl:w-xl">
          <h1 className="mt-10 mb-5 text-4xl font-bold lg:text-5xl xl:text-6xl">
            Project Management
          </h1>
          <p className="my-5 px-5 text-base font-light sm:font-normal md:px-5 lg:p-0 lg:text-xl xl:text-2xl">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <DefaultButton text="Get Started" />
        </div>
        <div className="my-10 h-auto w-3xs sm:w-sm md:w-md lg:mx-5 lg:w-lg xl:w-xl">
          <img src={TeamCollaboration} alt="Image from unDraw.co" />
        </div>
      </section>
      <section className="bg-secondary-white flex flex-col items-center justify-around text-center lg:flex-row-reverse lg:text-left xl:gap-10">
        <div className="text-secondary-black lg:mx-5 xl:w-xl">
          <h1 className="mt-10 mb-5 text-4xl font-bold lg:text-5xl xl:text-6xl">
            Project Management
          </h1>
          <p className="my-5 px-5 text-base font-light sm:font-normal md:px-5 lg:p-0 lg:text-xl xl:text-2xl">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <DefaultButton text="Get Started" />
        </div>
        <div className="my-10 h-auto w-3xs sm:w-sm md:w-md lg:mx-5 lg:w-lg xl:w-xl">
          <img src={OnlineCommunity} alt="Image from unDraw.co" />
        </div>
      </section>
    </div>
  );
}

export default Productivity;
