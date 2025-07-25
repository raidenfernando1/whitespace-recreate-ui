import ArrowRight from "../assets/icons/ArrowRight";

export function DefaultButton({ text }) {
  return (
    <button className="mb-5 cursor-pointer rounded bg-primary-lightBlue px-5 py-3 text-base text-secondary-white hover:bg-secondary-blue hover:text-secondary-black">
      {text}
      <ArrowRight />
    </button>
  );
}

export function PlanButton({ text }) {
  return (
    <button className="border-secondary-yellow m-2 mb-5 cursor-pointer rounded-md border-1 border-solid px-10 py-3 text-base group-hover:bg-primary-lightBlue group-hover:border-none group-hover:text-secondary-white hover:bg-secondary-blue hover:text-secondary-black">
      {text}
    </button>
  );
}
