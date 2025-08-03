import { DefaultButton } from "../ui/Button";

function CallToActionSection() {
  return (
      <section className="align-center bg-primary-darkBlue text-secondary-white flex h-[50vh] flex-col items-center justify-center py-10 text-center">
        <div>
          <h1 className="mb-5 text-4xl font-bold lg:text-5xl xl:text-6xl">
            Your work, everywhere you are
          </h1>
        </div>
        <div>
          <p className="my-5 px-5 text-base font-light sm:font-normal md:px-5 lg:p-10 lg:text-lg xl:text-xl">
            Access your notes from your computer, phone or tablet by
            synchronizing with various services, including whitespace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
        </div>
        <div>
          <DefaultButton text="Try Taskey" />
        </div>
      </section>
      
  );
}

export default CallToActionSection;
