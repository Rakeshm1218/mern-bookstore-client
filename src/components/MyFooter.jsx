import { Footer, FooterDivider } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer container className=" text-white bg-bgblack">
      <div className="w-full text-center ">
         <div className="w-full flex items-start">
        
        <Footer.Copyright href="/" by="Bookify™" year={2024} />
        </div>
        
      </div>
    </Footer>
  );
};

export default MyFooter;
