import { testimonialData } from "../../data/testimonialData";
import Quote from "../../assets/Quote.svg"

function Testimonial() {
  return (
    <div className="flex flex-col lg:m-10">
      <div>
        <h1 className="my-10 text-center text-4xl font-bold lg:text-5xl xl:text-6xl">What our <span className="bg-[url(./assets/Element.svg)] bg-contain bg-bottom bg-no-repeat">
            Client Says
          </span></h1>
      </div>
      <div className="flex flex-wrap justify-center items-stretch">
  {testimonialData.map((testimony) => (
    <div key={testimony.id} className="m-5 w-[22rem] flex">
      <div className="flex flex-col justify-between px-5 py-10 rounded-lg bg-primary-lightBlue h-full w-full">
        <div>
          <img src={Quote} alt="" className="mb-5"/>
          <p className="text-left text-secondary-white text-base border-b pb-5">
            {testimony.description}
          </p>
        </div>
        <div className="flex items-center gap-5 mt-10">
          <img className="max-w-20" src={testimony.image} alt={testimony.name} />
          <div>
            <p className="text-lg font-bold lg:text-xl">{testimony.name}</p>
            <p className="text-sm text-secondary-white lg:text-base">{testimony.position}</p>
            <p className="text-sm text-secondary-white lg:text-base">{testimony.location}</p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default Testimonial;
