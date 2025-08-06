import { planInfo } from "../../data/planInfo";
import { PlanButton } from "../ui/Button";
import CheckIcon from "../../assets/icons/CheckIcon";

function PricingBlock() {
  return (
    <div className="text-secondary-black flex flex-wrap justify-center gap-5 text-center lg:flex-nowrap lg:px-10">
      {planInfo.map((plan) => (
        <div
          key={plan.id}
          className="border-secondary-yellow hover:bg-primary-darkBlue group ease m-2 w-85 rounded-xl border-1 border-solid p-10 text-left transition duration-[0.5s] lg:w-90"
        >
          <h2 className="group-hover:text-secondary-white mb-8 text-xl font-bold">
            {plan.tier}
          </h2>
          <h1 className="group-hover:text-secondary-yellow mb-8 text-3xl font-bold">
            {plan.price}
          </h1>
          <p className="group-hover:text-secondary-white mb-4">
            {plan.description}
          </p>
          <ul className="hidden lg:inline-block">
            {plan.benefits.map((benefit, index) => (
              <li
                key={index}
                className="group-hover:text-secondary-white my-5 flex items-start gap-2 text-balance"
              >
                <CheckIcon className="shrink-0" />
                <p className="flex-1">{benefit}</p>
              </li>
            ))}
          </ul>
          <PlanButton text="Get Started" />
        </div>
      ))}
    </div>
  );
}

function PricingSection() {
  return (
    <div className="my-14">
      <div className="text-secondary-black text-center">
        <h1 className="mt-10 mb-5 text-4xl font-bold lg:text-5xl xl:text-6xl">
          Choose{" "}
          <span className="bg-[url(./assets/Element.svg)] bg-contain bg-bottom bg-no-repeat">
            Your Plan
          </span>
        </h1>
        <p className="my-5 px-5 text-base font-light sm:font-normal md:px-5 lg:p-0 lg:text-lg xl:text-xl">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>
      <div>
        <PricingBlock/>
      </div>
    </div>
  );
}
export default PricingSection;
