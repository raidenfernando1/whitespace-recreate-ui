import { DefaultButton } from "../ui/Button";
import Logo from "../../assets/Logo.svg"


const product = [
  { link: "#", text: "Overview" },
  { link: "#", text: "Pricing" },
  { link: "#", text: "Customer stories" },
];

const resources = [
  { link: "#", text: "Blog" },
  { link: "#", text: "Guides & tutorials" },
  { link: "#", text: "Help center" },
];

const company = [
  { link: "#", text: "About us" },
  { link: "#", text: "Careers" },
  { link: "#", text: "Media kit" },
];

function FooterLinks(props) {
  return (
    <li>
      <a className="text-sm hover:text-secondary-yellow" href={props.link}>
        {props.text}
      </a>
    </li>
  );
}

function Links({ title, contentLink }) {
  return (
    <div className="text-secondary-white text-center my-10">
      <h1 className="text-lg font-bold">{title}</h1>
      <ul>
        {contentLink.map((item, index) => (
          <FooterLinks key={index} link={item.link} text={item.text} />
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-primary-darkBlue">
      <div className="flex flex-col text-secondary-white text-center items-center ">
        <div className="my-5">
          <h1 className="text-lg font-bold lg:text-6xl my-5">Try Whitespace today</h1>
          <p>Get started for free.</p>
          <p className="mb-5">Add your whole team as your needs grow.</p>
          <DefaultButton text="Try Whitespace"/>
          <p className="mt-5">On a big team? Contact sales</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div className="flex items-center flex-col">
            <img src={Logo} className="max-w-80" alt="" />
            <p className="text-center lg:text-left w-90">
              whitespace was created for the new ways we live and work. We make
              a better workspace around the world
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-20">
            <Links title="Product" contentLink={product} />
            <Links title="Resources" contentLink={resources} />
            <Links title="Company" contentLink={company} />
          </div>
          <div>
            <h1 className="text-lg font-bold">Try it Today</h1>
            <p className="px-10 py-3 text-center lg:text-left w-90">Get started for free. Add your whole team as your needs grow.</p>
            <DefaultButton text="Start today" />
        </div>
        </div>
        
      </div>
      <div className="flex flex-col text-center text-secondary-white mt-20">
        <hr className="mx-auto w-[95%] border-secondary-black lg:block hidden"/>
        <ul className="flex flex-col lg:flex-row m-5 lg:ml-10 lg:gap-30 text-sm">
          <a href="#">English</a>
          <a href="#">Terms & Privacy</a>
          <a href="#">Security</a>
          <a href="#">Status</a>
          <p>&copy;2021 Whitespace LLC.</p>
        </ul>
        
        <hr className="mx-auto w-[90%] border-secondary-black lg:hidden block"/>
      </div>
    </footer>
  );
}

export default Footer;
