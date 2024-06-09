import logo from "../../../assets/logo.svg";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className=" bg-[#DAE0E5]">
      <div className="flex flex-col md:flex-row md:justify-around items-center  text-center gap-6 px-4 md:px-24 text-base-content">
        <div className="size-48 flex justify-center items-center">
          <aside className="flex items-center justify-center flex-col">
            <img className="w-full" src={logo} alt="" />

            <p className="text-center opacity-90">
              Providing reliable services since 2022
            </p>

            <div className="grid grid-flow-col gap-8 items-center justify-center mt-6">
              <a className="cursor-pointer">
                <FaLinkedin className="text-2xl text-[#0a66c2]" />
              </a>
              <a className="cursor-pointer">
                <FaTwitter className="text-2xl text-[#1DA1F2]" />
              </a>
              <a className="cursor-pointer">
                <FaFacebook className="text-2xl text-[#1877F2]" />
              </a>
            </div>
          </aside>
        </div>

        
            <nav className="flex flex-col justify-center items-center gap-2">
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Customer Service</a>
              <a className="link link-hover">24/7 Support</a>
              <a className="link link-hover">Guidelines</a>
            </nav>
            <nav className="flex flex-col justify-center items-center gap-2">
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">Home</a>
              <a className="link link-hover">Services</a>
              <a className="link link-hover">About</a>
            </nav>
          
          <nav className="flex flex-col  gap-2">
            <div className="flex gap-4 items-center py-2">
              <FaPhoneSquareAlt className="text-2xl" />
              <h2>
                <span className=" text-lg font-semibold">
                  567-858-9533-0339
                </span>
              </h2>
            </div>
            <div className="flex gap-4 items-center py-2">
              <MdEmail className="text-2xl" />
              <h2>
                <span className=" text-lg font-semibold">
                  support@campmedix.com
                </span>
              </h2>
            </div>
          </nav>
        
      </div>
      <div className="px-10 py-4 border-t border-[#aec7bf]">
        <nav className="flex flex-col justify-center items-center ">
          <p className="text-center">
            Copyright © 2024 - All right reserved by CampMedix
          </p>
        </nav>
      </div>
    </footer>
    );
};

export default Footer;