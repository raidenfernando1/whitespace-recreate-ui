import Button from "./Button";
import { planInfo, basicBenefits } from "./planInfo";

function PlanBox() {
  return (
    <div className="text-secondary-black flex w-full flex-wrap justify-center text-center">
      {planInfo.map((plan) => (
        <div
          key={plan.id}
          className="border-secondary-yellow m-2 border-1 border-solid text-left"
        >
          <h2>{plan.tier}</h2>
          <h1>{plan.price}</h1>
          <p>{plan.description}</p>
          <ul>
            {basicBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <button className="mb-5 cursor-pointer rounded bg-[#4F9CF9] px-5 py-3 text-base text-[#FFFFFF] hover:bg-[#A7CEFC] hover:text-[#212529]">
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
}

function Plan() {
  return (
    <div>
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
