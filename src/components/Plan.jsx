import { planInfo, basicBenefits } from "./planInfo";
import { PlanButton } from "./Button";
import CheckIcon from "../assets/icons/CheckIcon";

function PlanBox() {
  return (
    <div className="text-secondary-black flex justify-center flex-wrap lg:flex-nowrap  lg:px-10 text-center ">
      {planInfo.map((plan) => (
        <div
          key={plan.id}
          className="border-secondary-yellow  lg:w-auto m-2 border-1 border-solid text-left hover:bg-primary-darkBlue p-10 group rounded-xl  w-80"
        >
          <h2 className="text-xl font-bold mb-8 group-hover:text-secondary-white">{plan.tier}</h2>
          <h1 className="text-3xl font-bold mb-8 group-hover:text-secondary-yellow">{plan.price}</h1>
          <p className="mb-4 group-hover:text-secondary-white">{plan.description}</p>
          <ul className="hidden lg:inline-block">
            {basicBenefits.map((benefit, index) => (
              <li key={index} className="mb-5 group-hover:text-secondary-white"><CheckIcon/> {benefit}</li>
            ))}
          </ul>
          <PlanButton text="Get Started"/>
        </div>
      ))}
    </div>
  );
}

function Plan() {
  return (
    <div className="my-14">
      <div className="text-secondary-black text-center">
        <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
          Choose{" "}
          <span className="bg-[url(./assets/Element.svg)] bg-contain bg-bottom bg-no-repeat">
            Your Plan
          </span>
        </h1>
        <p className="mb-5 px-5 pb-4 text-lg lg:my-5 lg:px-0">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>
      <div>
        <PlanBox />
      </div>
    </div>
  );
}
export default Plan;
