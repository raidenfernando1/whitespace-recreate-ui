import FemaleAvatar from "../assets/FemaleAvatar.svg";

function TestimonyCard({ description, name, position, location }) {
  return (
    <div className="mx-5 h-auto border p-5 ">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>

        <p className="my-5 font-light">{description}</p>
      </div>
      <hr />
      <div>
        <div className="flex justify-center my-5">
          <div>
            <img src={FemaleAvatar} alt="" className="max-w-[80px]" />
          </div>
          <div className="px-5">
            <p className="mb-3 text-xl font-bold">{name}</p>
            <p className="text-sm font-light">{position}</p>
            <p className="text-sm font-light">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section>
      <div>
        <h1 className="text-center">What Our Clients Says</h1>
      </div>
      <div className="flex overflow-hidden justify-center">
        <TestimonyCard
          description="Whitespace is design as a collaboration tool for business that is a full management solution."
          name="Oberon Shaw, MCH"
          position="Head Talent Acquisition"
          location="North America"
        />
        <TestimonyCard
          description="Whitespace is design as a collaboration tool for business that is a full management solution."
          name="Oberon Shaw, MCH"
          position="Head Talent Acquisition"
          location="North America"
        />
        <TestimonyCard
          description="Whitespace is design as a collaboration tool for business that is a full management solution."
          name="Oberon Shaw, MCH"
          position="Head Talent Acquisition"
          location="North America"
        />
      </div>
    </section>
  );
}
export default Testimonials;
