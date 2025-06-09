"use client";

import { FC } from "react";
import EmailIcon from "../../../public/svgs/EmailIcon";
import { LogosLinkedinIcon } from "../../../public/svgs/LinkedInIcon";
import WhatsAppLogo from "../../../public/svgs/WhatsAppLogo";

const Footer: FC = () => {
  return (
    <footer>
      <div className="w-full bg-gray-800 text-white b-0 p-15">
        <div className="flex flex-col lg:flex-row justify-between items-center ">
          <h1 className="text-3xl">Thinking Maths</h1>
          <div className="flex space-x-9 items-center justify-around text-lg">
            <button className=" bg-none text-black font-bold p-2">
              <EmailIcon />
            </button>
            <button className=" text-black font-bold p-0 rounded-lg bg-white">
              <LogosLinkedinIcon />
            </button>
            <button className=" text-black font-bold p-2">
              <WhatsAppLogo />
            </button>
          </div>
        </div>
        <div className="h-0.25 bg-gray-300 my-5"></div>
        <div className="text-center">
          <p>©EllieWritesCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
