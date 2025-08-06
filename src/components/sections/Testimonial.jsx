import { testimonialData } from "../../data/testimonialData";

function Testimonial() {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="my-10 text-center text-4xl font-bold lg:text-5xl xl:text-6xl">What our <span className="bg-[url(./assets/Element.svg)] bg-contain bg-bottom bg-no-repeat">
            Client Says
          </span></h1>
      </div>
      <div className="flex flex-wrap justify-center items-stretch">
        {testimonialData.map((testimony) => (
          <div key={testimony.id} className="m-5 flex w-[22rem] items-stretch" >
            <div className="px-5 py-10 rounded bg-primary-lightBlue">
                <h1 className="text-left text-secondary-white border-b-1 pb-5">{testimony.description}</h1>
                <div className="flex items-center gap-5 mt-10 mx-5">
                    <div>
                        <img className="max-w-20" src={testimony.image} alt="" />
                    </div>
                    <div>
                        <p className="text-lg font-bold">{testimony.name}</p>
                        <p className="text-sm text-secondary-white">{testimony.position}</p>
                        <p className="text-sm text-secondary-white">{testimony.location}</p>
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
