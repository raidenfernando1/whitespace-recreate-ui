import DataImg from "../assets/DataImg.svg";

function Section({
  background,
  title,
  description,
  textColor,
  image,
  className,
}) {
  return (
    <div
      className={`flex w-full flex-col gap-4 overflow-hidden ${background} lg:min-h-[50vh] lg:flex-row lg:items-center lg:justify-between ${className}`}
    >
      <div className="mt-20 flex justify-center lg:m-0 lg:flex-1 lg:justify-start">
        <div
          className={`max-w-xl text-center ${textColor} lg:ml-10 lg:pr-20 lg:text-left`}
        >
          <h1 className="mb-6 text-4xl font-bold lg:text-5xl">{title}</h1>
          <p className="mb-5 px-5 pb-4 text-lg lg:my-5 lg:px-0">{description}</p>
          <button className="cursor-pointer rounded bg-[#4F9CF9] p-2 px-5 py-3 text-lg text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#212529]">
            Try Whitespace free
          </button>
        </div>
      </div>

      <div className="flex w-full justify-center lg:flex-1">
        <img
          src={`${image}`}
          alt="Image"
          className="mb-5 h-auto max-w-[250px] rounded-lg sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]"
        />
      </div>
    </div>
  );
}

export default Section;
