import { DefaultButton } from "../ui/Button";
import Chart from "../../assets/Chart.svg"


function Hero (){
    return (
        <section className="flex flex-col justify-center items-center bg-primary-darkBlue lg:flex-row text-center lg:text-left lg:h-[70vh] xl:gap-10">
            <div className=" text-secondary-white lg:mx-5 xl:w-xl">
                <h1 className="text-4xl font-bold mt-10 mb-5 lg:text-5xl xl:text-6xl">Get More Done with Whitespace</h1>
                <p className="my-5 text-base font-light sm:font-normal md:px-5 lg:p-0 lg:text-xl xl:text-2xl">Project management software that enables your teams to collaborate, plan, analyze and manage every tasks</p>
                <DefaultButton text="Try Whitespace Free"/>
            </div>
            <div className="h-auto w-3xs my-10 sm:w-sm md:w-md lg:mx-5 lg:w-lg xl:w-xl">
                <img src={Chart} alt="Image from unDraw.co" />
            </div>
        </section>
    );

}
export default Hero