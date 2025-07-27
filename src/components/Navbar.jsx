import { useState } from "react";
import ArrowRight from "../assets/icons/ArrowRight";
import MenuIcon from "../assets/icons/MenuIcon";
import Logo from "../assets/Logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }


  return (
    <nav className="font-inter flex h-16 w-full items-center justify-between bg-[#043873] px-6 text-sm md:justify-around">
      <img className="h-6 cursor-pointer" src={Logo} alt="" />
      <ul className="hidden items-center px-2 text-[#FFFFFF] md:flex md:gap-6">
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Solutions</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
      </ul>

      <ul className={`absolute top-16 left-0 w-full bg-[#043873] flex-col items-center px-2 text-[#FFFFFF] md:hidden ${
        isOpen ? 'flex' : 'hidden'
      }`}>
        <li className="py-2 border-b border-[#FFFFFF]/20 w-full text-center">
          <a href="#">Products</a>
        </li>
        <li className="py-2 border-b border-[#FFFFFF]/20 w-full text-center">
          <a href="#">Solutions</a>
        </li>
        <li className="py-2 border-b border-[#FFFFFF]/20 w-full text-center">
          <a href="#">Resources</a>
        </li>
        <li className="py-2 w-full text-center">
          <a href="#">Pricing</a>
        </li>
      </ul>
      <div className="flex items-center gap-3">
        <button className="hidden w-20 cursor-pointer rounded bg-[#FFE492] p-2 text-[#043873] hover:bg-[#FFFFFF] hover:text-[#212529] sm:block">
          Login
        </button>
        <button className="hidden w-auto cursor-pointer rounded bg-[#4F9CF9] p-2 text-[#FFFFFF] hover:bg-[#A7CEFC] hover:text-[#212529] sm:block">
          Try Whitespace free <ArrowRight/>
        </button>
        <button className="md:hidden" onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
